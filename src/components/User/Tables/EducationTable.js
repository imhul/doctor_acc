import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Table, Input, Icon, Divider, Button, Form } from 'antd';

const { Column } = Table;
const FormItem = Form.Item;

class EducationTable extends Component {

    isEditing = record => record.key === this.props.ui.educationTableData.editingKey;

    addRow = () => {
        const { ui, uiActions } = this.props;

        const newData = {
            key: `${ui.educationTableData.name} row ${ui.educationTableData.count + 1}`,
            name: "",
            faculty: "",
            startYear: "",
            stopYear: "",
            lastCourse: "",
            specialty: "",
        };
        uiActions.addRow([...ui.educationTableData.rows, newData], "education")
    };

    saveRow(form, key) {
        const { ui, uiActions } = this.props;
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...ui.educationTableData.rows];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                uiActions.saveRow(newData, "education")
            } else {
                newData.push(row);
                uiActions.saveRow(newData, "education")
            }
        })
    };

    render() {
        const { educationTableData } = this.props.ui;
        const { uiActions } = this.props;

        const EditableCell = (data) => {

            return (
                <td className={data.children[1].props ? `${data.children[1].props.record.key}` :  "no-editable"}>
                    { console.info("data.children[1].props.record.key: ", data.children[1].props ? `${data.children[1].props.record.key}` : null) }
                    
                    { 
                        ( data.children[1].props ? this.isEditing(data.children[1].props.record) : false ) 
                        && educationTableData.editing ? (
                            <FormItem style={{ margin: 0 }}>
                                <Input defaultValue={data.children[2]} />
                            </FormItem>
                        ) : data.children
                    }
                </td>
            )
        };
        const components = {
            body: {
                cell: EditableCell,
            },
        };
      
        return (
            <div value={this.props.form}>
                {console.info("this.props.form: ", this.props.form)}
                
                <Table
                    components={components}
                    bordered
                    dataSource={educationTableData.rows}
                    rowClassName="editable-row"
                    pagination={false}
                >
                    <Column dataIndex="name" key="name" editable={true} title="Найменування Навчального закладу" />
                    <Column dataIndex="faculty" key="faculty" editable={true} title="Факультет або відділення" />
                    <Column dataIndex="startYear" key="startYear" editable={true} title="Рік вступу" />
                    <Column dataIndex="stopYear" key="stopYear" editable={true} title="Рік закінчення або вибуття" />
                    <Column dataIndex="lastCourse" key="lastCourse" editable={true} title="Якщо не закінчена, то з якого курсу вибув" />
                    <Column dataIndex="specialty" key="specialty" editable={true} title="Яку спеціальність здобув у результаті закінчення навчального закладу, вказати номер диплому або свідоцтва" />
                    <Column
                        title="Дії"
                        dataIndex="operation"
                        key="operation"
                        editable={false}
                        width={80}
                        render={(text, record) => {
    
                            // console.info("Column render record", record);

                            return educationTableData.editing && this.isEditing(record) ? (
                                <span>
                                    <Icon 
                                        type="check-circle" 
                                        theme="twoTone" 
                                        onClick={() => this.saveRow(form, record.key)}
                                        twoToneColor="#a0d911"
                                    />
                                    <Divider type="vertical" />
                                    <Icon 
                                        type="close-circle" 
                                        theme="twoTone" 
                                        twoToneColor="#fa541c"
                                        onClick={() => uiActions.cancelRow(record.key, "education")}
                                    />
                                </span>
                            ) : (
                                <span>
                                    <Icon
                                        type="edit"
                                        theme="twoTone"
                                        disabled={educationTableData.editingKey !== ""}
                                        onClick={() => uiActions.editRow(record.key, "education")}
                                    />
                                    <Divider type="vertical" />
                                    <Icon
                                        type="delete"
                                        theme="twoTone"
                                        twoToneColor="#ff1744"
                                        disabled={educationTableData.editingKey !== ""}
                                        onClick={() => uiActions.deleteRow(record.key, "education")}
                                    />
                                </span>
                            )
                        }}
                    />

                </Table>
                <p className="add-row">
                    <Icon 
                        type="plus-circle" 
                        theme="twoTone" 
                        onClick={ this.addRow }
                        style={{ marginBottom: 25, marginTop: 15, fontSize: 28 }}
                    />
                    <span>Додати рядок</span>
                </p>
            </div>
        )
    }
};

const EditableFormTable = Form.create()(EducationTable);

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(UI_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ui: state.ui,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableFormTable);
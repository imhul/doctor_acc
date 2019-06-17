import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Table, Input, Icon, Divider, Button, Form } from 'antd';

// Components
// import EditableCell from './EditableCell';

// Helpers
import { getId } from '../../../helpers';

const { Column } = Table;

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
        console.info("this.props: ", this.props);
        const EditableCell = (data) => (
                <td>
                    { console.info("EditableCell param: data", data) }
                    { console.info("EditableCell param: data.children", data.children) }
                { 
                    educationTableData.editing ? (
                        <FormItem style={{ margin: 0 }}>
                            {getFieldDecorator(dataIndex, {
                                initialValue: record[dataIndex],
                            })(<Input />)}
                        </FormItem>
                    ) : data.children
                }
            </td>
        );
        const components = {
            body: {
                cell: EditableCell,
            },
        };
      
        return (
            <div value={this.props.form}>
                {/* {console.info("this.props.form: ", this.props.form)} */}
                <Table
                    components={components}
                    bordered
                    dataSource={educationTableData.rows}
                    rowClassName="editable-row"
                    pagination={false}
                >
                    <Column title="Найменування Навчального закладу" dataIndex="name" key="name" editable={true} />
                    <Column title="Факультет або відділення" dataIndex="faculty" key="faculty" editable={true} />
                    <Column title="Рік вступу" dataIndex="startYear" key="startYear" editable={true} />
                    <Column title="Рік закінчення або вибуття" dataIndex="stopYear" key="stopYear" editable={true} />
                    <Column title="Якщо не закінчена, то з якого курсу вибув" dataIndex="lastCourse" key="lastCourse" editable={true} />
                    <Column title="Яку спеціальність здобув у результаті закінчення навчального закладу, вказати номер диплому або свідоцтва" dataIndex="specialty" key="specialty" editable={true} />
                    <Column
                        title="Операціі"
                        dataIndex="operation"
                        key="operation"
                        editable={false}
                        render={(text, record) => {

                            return educationTableData.editing ? (
                                <span>
                                    {form => (
                                        <Icon 
                                            type="save" 
                                            theme="twoTone" 
                                            onClick={() => this.saveRow(form, record.key)}
                                            style={{ marginRight: 8 }}
                                            color="green"

                                        />
                                    )}

                                    <Divider type="vertical" />
                                        <Icon 
                                            type="stop" 
                                            theme="twoTone" 
                                            color="volcano"
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
                            );
                        }}
                    />

                </Table>
                <Button
                    onClick={this.addRow}
                    type="primary"
                    style={{ marginBottom: 25, marginTop: 15 }}
                >
                    Add a row
                </Button>
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
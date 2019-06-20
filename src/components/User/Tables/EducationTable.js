import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Table, Input, Icon, Divider, Form, Tooltip } from 'antd';

const { Column } = Table;
const FormItem = Form.Item;

class EducationFormTable extends Component {

    isEditing = record => record.key === this.props.ui.educationTableData.editingKey;

    addRow = () => {
        const { ui, uiActions } = this.props;
        const newData = {
            id: +`10${ui.educationTableData.count + 1}`,
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

    render() {
        const { educationTableData } = this.props.ui;
        const { uiActions } = this.props;
        const renderColumn = (text, record, name) => {
            return educationTableData.editing && this.isEditing(record) ? (
                <FormItem style={{ margin: 0 }}>
                    <Input
                        id={record.key}
                        key={record.key}
                        name={name}
                        defaultValue={text}
                    />
                </FormItem>
            ) : text
        };

        return (
            <Table
                bordered
                dataSource={educationTableData.rows}
                rowClassName="editable-row"
                pagination={false}
                footer={() => (
                    <div className="add-row" onClick={this.addRow}>
                        <span>Додати рядок </span>
                        <Icon
                            type="plus-circle"
                            theme="twoTone"
                            style={{ margin: 0, fontSize: 28 }}
                        />
                    </div>
                )}
            >
                <Column 
                    dataIndex="name" 
                    key="name" 
                    editable={true}
                    render={(text, record) => renderColumn(text, record, "name")}
                    title="Найменування Навчального закладу" />
                <Column 
                    dataIndex="faculty" 
                    key="faculty" 
                    editable={true}
                    render={(text, record) => renderColumn(text, record, "faculty")}
                    title="Факультет або відділення" />
                <Column 
                    dataIndex="startYear" 
                    key="startYear" 
                    editable={true}
                    render={(text, record) => renderColumn(text, record, "startYear")}
                    title="Рік вступу" />
                <Column 
                    dataIndex="stopYear" 
                    key="stopYear" 
                    editable={true}
                    render={(text, record) => renderColumn(text, record, "stopYear")}
                    title="Рік закінчення або вибуття" />
                <Column 
                    dataIndex="lastCourse" 
                    key="lastCourse" 
                    editable={true}
                    render={(text, record) => renderColumn(text, record, "lastCourse")}
                    title="Якщо не закінчена, то з якого курсу вибув" />
                <Column 
                    dataIndex="specialty" 
                    key="specialty" 
                    editable={true}
                    render={(text, record) => renderColumn(text, record, "specialty")}
                    title="Яку спеціальність здобув у результаті закінчення навчального закладу, вказати номер диплому або свідоцтва" />
                <Column
                    title="Дії"
                    dataIndex="operation"
                    key="operation"
                    editable={false}
                    width={80}
                    render={(unusable, rows) => {
                        return educationTableData.editing && this.isEditing(rows) ? (
                            <span>
                                <Tooltip title="Зберегти">
                                    <Icon
                                        type="check-circle"
                                        theme="twoTone"
                                        onClick={() => uiActions.saveRow(rows.key, "education")}
                                        twoToneColor="#a0d911"
                                    />
                                </Tooltip>
                                <Divider type="vertical" />
                                <Tooltip title="Скасувати">
                                <Icon
                                    type="close-circle"
                                    theme="twoTone"
                                    twoToneColor="#fa541c"
                                    onClick={() => uiActions.cancelRow(rows.key, "education")}
                                />
                                </Tooltip>
                            </span>
                        ) : (
                            <span>
                                <Tooltip title="Редагувати">
                                <Icon
                                    type="edit"
                                    theme="twoTone"
                                    disabled={educationTableData.editingKey !== ""}
                                    onClick={() => uiActions.editRow(rows.key, "education")}
                                />
                                </Tooltip>
                                <Divider type="vertical" />
                                <Tooltip title="Видалити">
                                <Icon
                                    type="delete"
                                    theme="twoTone"
                                    twoToneColor="#ff1744"
                                    disabled={educationTableData.editingKey !== ""}
                                    onClick={() => uiActions.deleteRow(rows.key, "education")}
                                />
                                </Tooltip>
                            </span>
                        )
                    }}
                />
            </Table>
        )
    }
};

const EducationTable = Form.create()(EducationFormTable);

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

export default connect(mapStateToProps, mapDispatchToProps)(EducationTable);
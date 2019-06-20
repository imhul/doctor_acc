import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Table, Input, Icon, Divider, Form, Tooltip } from 'antd';

const { Column, ColumnGroup } = Table;
const FormItem = Form.Item;

class WorkFormTable extends Component {

    isEditing = record => record.key === this.props.ui.workTableData.editingKey;

    addRow = () => {
        const { ui, uiActions } = this.props;
        const newData = {
            id: +`20${ui.workTableData.count + 1}`,
            key: `${ui.workTableData.name} row ${ui.workTableData.count + 1}`,
            startDate: "",
            stopDate: "",
            post: "",
            geo: "",
        };
        uiActions.addRow([...ui.workTableData.rows, newData], "work")
    };

    render() {
        const { workTableData } = this.props.ui;
        const { uiActions } = this.props;
        const renderColumn = (text, record, name) => {
            return workTableData.editing && this.isEditing(record) ? (
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
                dataSource={workTableData.rows}
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
                <ColumnGroup title="Місяць і рік">
                    <Column 
                        dataIndex="startDate" 
                        key="startDate" 
                        editable={true}
                        render={(text, record) => renderColumn(text, record, "startDate")}
                        title="вступ" />
                    <Column 
                        dataIndex="stopDate" 
                        key="stopDate" 
                        editable={true}
                        render={(text, record) => renderColumn(text, record, "stopDate")}
                        title="звільнення" />
                </ColumnGroup>
                <Column 
                    dataIndex="post" 
                    key="post" 
                    editable={true}
                    render={(text, record) => renderColumn(text, record, "post")}
                    title="Посади із зазначенням підприємства, установи, організації" />
                <Column 
                    dataIndex="geo" 
                    key="geo" 
                    editable={true}
                    render={(text, record) => renderColumn(text, record, "geo")}
                    title="Рік закінчення або вибуття" />
                <Column
                    title="Дії"
                    dataIndex="operation"
                    key="operation"
                    editable={false}
                    width={80}
                    render={(unusable, rows) => {
                        return workTableData.editing && this.isEditing(rows) ? (
                            <span>
                                <Tooltip title="Зберегти">
                                    <Icon
                                        type="check-circle"
                                        theme="twoTone"
                                        onClick={() => uiActions.saveRow(rows.key, "work")}
                                        twoToneColor="#a0d911"
                                    />
                                </Tooltip>
                                <Divider type="vertical" />
                                <Tooltip title="Скасувати">
                                <Icon
                                    type="close-circle"
                                    theme="twoTone"
                                    twoToneColor="#fa541c"
                                    onClick={() => uiActions.cancelRow(rows.key, "work")}
                                />
                                </Tooltip>
                            </span>
                        ) : (
                            <span>
                                <Tooltip title="Редагувати">
                                <Icon
                                    type="edit"
                                    theme="twoTone"
                                    disabled={workTableData.editingKey !== ""}
                                    onClick={() => uiActions.editRow(rows.key, "work")}
                                />
                                </Tooltip>
                                <Divider type="vertical" />
                                <Tooltip title="Видалити">
                                <Icon
                                    type="delete"
                                    theme="twoTone"
                                    twoToneColor="#ff1744"
                                    disabled={workTableData.editingKey !== ""}
                                    onClick={() => uiActions.deleteRow(rows.key, "work")}
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

const WorkTable = Form.create()(WorkFormTable);

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

export default connect(mapStateToProps, mapDispatchToProps)(WorkTable);
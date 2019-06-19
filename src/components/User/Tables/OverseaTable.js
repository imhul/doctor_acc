import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Table, Input, Icon, Divider, Form } from 'antd';

const { Column, ColumnGroup } = Table;
const FormItem = Form.Item;

class OverseaFormTable extends Component {

    isEditing = record => record.key === this.props.ui.overseaTableData.editingKey;

    addRow = () => {
        const { ui, uiActions } = this.props;
        const newData = {
            id: +`30${ui.overseaTableData.count + 1}`,
            key: `${ui.overseaTableData.name} row ${ui.overseaTableData.count + 1}`,
            startDate: "",
            stopDate: "",
            country: "",
            target: "",
        };
        uiActions.addRow([...ui.overseaTableData.rows, newData], "oversea")
    };

    render() {
        const { overseaTableData } = this.props.ui;
        const { uiActions } = this.props;
        const renderColumn = (text, record, name) => {
            return overseaTableData.editing && this.isEditing(record) ? (
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
                dataSource={overseaTableData.rows}
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
                        title="З якого часу" />
                    <Column 
                        dataIndex="stopDate" 
                        key="stopDate" 
                        editable={true}
                        render={(text, record) => renderColumn(text, record, "stopDate")}
                        title="По який час" />
                </ColumnGroup>
                <Column 
                    dataIndex="country" 
                    key="country" 
                    editable={true}
                    render={(text, record) => renderColumn(text, record, "country")}
                    title="В якій країні" />
                <Column 
                    dataIndex="target" 
                    key="target" 
                    editable={true}
                    render={(text, record) => renderColumn(text, record, "target")}
                    title="Мета перебування за кордоном" />
                <Column
                    title="Дії"
                    dataIndex="operation"
                    key="operation"
                    editable={false}
                    width={80}
                    render={(unusable, rows) => {
                        return overseaTableData.editing && this.isEditing(rows) ? (
                            <span>
                                <Icon
                                    type="check-circle"
                                    theme="twoTone"
                                    onClick={() => uiActions.saveRow(rows.key, "oversea")}
                                    twoToneColor="#a0d911"
                                />
                                <Divider type="vertical" />
                                <Icon
                                    type="close-circle"
                                    theme="twoTone"
                                    twoToneColor="#fa541c"
                                    onClick={() => uiActions.cancelRow(rows.key, "oversea")}
                                />
                            </span>
                        ) : (
                            <span>
                                <Icon
                                    type="edit"
                                    theme="twoTone"
                                    disabled={overseaTableData.editingKey !== ""}
                                    onClick={() => uiActions.editRow(rows.key, "oversea")}
                                />
                                <Divider type="vertical" />
                                <Icon
                                    type="delete"
                                    theme="twoTone"
                                    twoToneColor="#ff1744"
                                    disabled={overseaTableData.editingKey !== ""}
                                    onClick={() => uiActions.deleteRow(rows.key, "oversea")}
                                />
                            </span>
                        )
                    }}
                />
            </Table>
        )
    }
};

const OverseaTable = Form.create()(OverseaFormTable);

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

export default connect(mapStateToProps, mapDispatchToProps)(OverseaTable);
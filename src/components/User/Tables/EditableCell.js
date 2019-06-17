import React, { Component, createContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Input, Form } from 'antd';

const FormItem = Form.Item;
const EditableContext = createContext();

class EditableCell extends Component {

    renderCell = () => {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editing ? (
                    <FormItem style={{ margin: 0 }}>
                        <Input />
                    </FormItem>
                ) : (
                        children
                    )}
            </td>
        );
    };

    render() {
        return (
            <EditableContext.Consumer>
                {this.renderCell}
            </EditableContext.Consumer>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        uiactions: bindActionCreators(UI_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ui: state.ui,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableCell);
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Form, Switch } from 'antd';

// Helpers
import { formItemLayout, typeDetector } from '../../../helpers';

const FormItem = Form.Item;

class SwitchInput extends PureComponent {
    render() {
        const { isChild, inputData, ui, uiActions } = this.props;
        // Filtering inputs by current value of pagination component
        const dataFilteredByPage = ui.formData.filter(item => item.Page == ui.currentPage);
        // Filtering children by parent Id
        const ownerDetector = (inputId) => {
            return dataFilteredByPage.filter( item => item.Owner == inputId )
        };
        if(inputData.Owner === null) {
            return (
                <FormItem 
                    className={inputData.Owner === null ? "parent" : "child"}
                    label={inputData.Title} 
                    {...formItemLayout} 
                >
                    { inputData.TextBefore ? `${inputData.TextBefore} ` : null }
                    <Switch 
                        checked={inputData.Checked} // boolean
                        onClick={(checked, event) => uiActions.switchUpdate(checked, inputData.Id )}
                        checkedChildren={inputData.Mode.TextChecked} // 'Так'
                        unCheckedChildren={inputData.Mode.TextUnchecked} // 'Ні'
                    />
                    {
                        inputData.Checked ? ownerDetector(inputData.Id).map(subitem => typeDetector(subitem, true)) : null
                    }
                    { inputData.TextAfter ? ` ${inputData.TextAfter}` : null }
                </FormItem>
            )
        } else return (
            <div 
                className="child" 
                style={ isChild ? {display: "inline-block"} : {display: "none"} }
            >
                { inputData.TextBefore ? `${inputData.TextBefore} ` : null }
                <Switch 
                    checked={inputData.Value} // boolean
                    onClick={(checked, event) => uiActions.switchUpdate(checked, inputData.Id )}
                    checkedChildren={inputData.Mode.TextChecked} // 'Так'
                    unCheckedChildren={inputData.Mode.TextUnchecked} // 'Ні'
                />
                {
                    inputData.Checked ? ownerDetector(inputData.Id).map(subitem => typeDetector(subitem, true)) : null
                }
                { inputData.TextAfter ? ` ${inputData.TextAfter}` : null }
            </div>
        )
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(SwitchInput);
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Form, Radio } from 'antd';

// Helpers
import { formItemLayout, typeDetector } from '../../../helpers';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class RadioParent extends PureComponent {
    render() {
        const { isChild, inputData, ui } = this.props;
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
                    <RadioGroup
                        defaultValue={null}
                        name={inputData.Name}
                        id={inputData.Id}
                        buttonStyle="solid"
                        className={inputData.Owner === null ? "parent" : "child"}
                    >
                        {
                            ownerDetector(inputData.Id).map(subitem => (
                                <RadioButton
                                    id={subitem.Id} 
                                    key={subitem.Id} 
                                    checked={subitem.Checked}
                                    value={subitem.Value}
                                    className={subitem.Owner === null ? "parent" : "child"}
                                    title={subitem.Owner}
                                >
                                    { subitem.Value }
                                </RadioButton>
                            ))
                        }
                        {
                            ownerDetector(inputData.Id).map(subitem => ownerDetector(subitem.Id).map(item => {
                                return subitem.Checked === true ? typeDetector(item, true) : null
                            }))
                        }
                            
                        
                    </RadioGroup>
                    { inputData.TextAfter ? ` ${inputData.TextAfter}` : null }
                </FormItem>
            )
        } else return (
            <div 
                className="child" 
                style={ isChild ? {marginLeft: 10, display: "block"} : {display: "none"} }
                
            >
                { inputData.TextBefore ? `${inputData.TextBefore} ` : null }
                <p>{ inputData.Title ? `${inputData.Title}  ` : null }</p>
                <RadioGroup
                    defaultValue={inputData.Value ? inputData.Value : null}
                    name={inputData.Name}
                    id={inputData.Id}
                    buttonStyle="solid"
                    className={inputData.Owner === null ? "parent" : "child"}
                >
                    {
                        ownerDetector(inputData.Id).map(subitem => (
                            <RadioButton
                                id={subitem.Id} 
                                key={subitem.Id} 
                                value={subitem.Value} 
                                className={`${ subitem.Owner === null ? "parent" : "child" } ${ subitem.Checked ? "ant-radio-button-checked" : null }`}
                                title={subitem.Owner}
                            >
                                { subitem.Value }
                            </RadioButton>
                        ))
                    }
                    {
                        ownerDetector(inputData.Id).map(subitem => ownerDetector(subitem.Id).map(item => {
                            return subitem.Checked ? typeDetector(item, true) : null
                        }))
                    }
                        
                    
                </RadioGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(RadioParent);
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Checkbox } from 'antd';

// Helpers
import { typeDetector } from '../../../helpers';

class CheckboxInput extends PureComponent {
    render() {
        const { isChild, inputData, ui } = this.props;
        // Filtering inputs by current value of pagination component
        const dataFilteredByPage = ui.formData.filter(item => item.Page == ui.currentPage);
        // Filtering children by parent Id
        const ownerDetector = (inputId) => {
            return dataFilteredByPage.filter( item => item.Owner == inputId )
        };
        return (
            <div 
                className={inputData.Owner === null ? "parent" : "child"}
                style={ isChild ? {display: "block"} : {display: "none"} }
            >
                { inputData.TextBefore ? `${inputData.TextBefore} ` : null }
                <Checkbox 
                    className={inputData.Owner === null ? "parent" : "child"}
                    checked={inputData.Checked} 
                    value={inputData.Value}
                    name={inputData.Name}
                    key={inputData.Id}
                    id={inputData.Id} 
                >
                    {inputData.Value}
                    {
                        inputData.Checked ? ownerDetector(inputData.Id).map(subitem => typeDetector(subitem, true)) : null
                    }
                </Checkbox>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxInput);

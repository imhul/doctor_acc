import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Form, DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/uk_UA';
import moment from 'moment';

// Helpers
import { formItemLayout } from '../../../helpers';

const FormItem = Form.Item;

class DateInput extends PureComponent {
    render() {
        const { inputData, uiActions } = this.props;
        const DateInputChild = () => (
            <DatePicker 
                onChange={(date, dateString) => uiActions.dateUpdate(date, dateString, inputData.key)}
                onPanelChange={(date, mode) => uiActions.dateUpdate(date, mode, inputData.key)}
                value={inputData.value !== "" ? moment(inputData.value) : null }
                className={`${inputData.mode.mode}-picker`}
                placeholder={inputData.placeholder}
                showTime={inputData.mode.time}
                format={inputData.mode.format}
                mode={inputData.mode.mode}
                id={inputData.name}
                locale={locale}
            />
        );

        return (
            <FormItem 
                label={inputData.label} {...formItemLayout}
                className="parent"
            >
                <DateInputChild />
            </FormItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(DateInput);
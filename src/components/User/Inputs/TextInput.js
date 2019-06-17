import React from 'react';
import { Form, Input, Icon } from 'antd';

// Helpers
import { formItemLayout } from '../../../helpers';

const FormItem = Form.Item;

const TextInput = (data) => {
    if(data.inputData.Owner === null) {
        return (
            <FormItem 
                className="parent"
                label={data.inputData.Title} 
                {...formItemLayout} 
            >
                { data.inputData.TextBefore ? `${data.inputData.TextBefore} ` : null }
                <Input
                    id={data.inputData.Id}
                    placeholder={data.inputData.Placeholder}
                    addonAfter={data.inputData.TextAfter}
                    value={data.inputData.Value ? data.inputData.Value : ""}
                    addonBefore={<Icon type="form" />}
                />
                { data.inputData.TextAfter ? ` ${data.inputData.TextAfter}` : null }
            </FormItem>
        )
    } else return (
        <div 
            className="child" 
            style={ data.isChild ? {display: "inline"} : {display: "none"} }
        >
            { data.inputData.TextBefore ? `${data.inputData.TextBefore} ` : null }
            <Input
                id={data.inputData.Id}
                placeholder={data.inputData.Placeholder}
                addonAfter={data.inputData.TextAfter}
                value={data.inputData.Value ? data.inputData.Value : ""}
                addonBefore={<Icon type="form" />}
            />
            { data.inputData.TextAfter ? ` ${data.inputData.TextAfter}` : null }
        </div>
    )
};

export default TextInput;
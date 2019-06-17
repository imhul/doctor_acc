import React from 'react';
import { Form, Input } from 'antd';

// Helpers
import { formItemLayout } from '../../../helpers';

const FormItem = Form.Item;
const { TextArea } = Input;

const TextareaInput = (data) => {
    if(data.inputData.Owner === null) {
        return (
            <FormItem 
                className={data.inputData.Owner === null ? "parent" : "child"}
                label={data.inputData.Title} 
                {...formItemLayout} 
            >
                { data.inputData.TextBefore ? `${data.inputData.TextBefore} ` : null }
                <TextArea
                    id={data.inputData.Id}
                    placeholder={data.inputData.Placeholder}
                    value={data.inputData.Value ? data.inputData.Value : ""}
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
            <TextArea
                id={data.inputData.Id}
                placeholder={data.inputData.Placeholder}
                value={data.inputData.Value ? data.inputData.Value : ""}
            />
            { data.inputData.TextAfter ? ` ${data.inputData.TextAfter}` : null }
        </div>
    )
};

export default TextareaInput;
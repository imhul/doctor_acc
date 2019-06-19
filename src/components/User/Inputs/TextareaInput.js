import React from 'react';
import { Form, Input } from 'antd';

// Helpers
import { formItemLayout } from '../../../helpers';

const FormItem = Form.Item;
const { TextArea } = Input;

const TextareaInput = data => (
    <FormItem 
        label={data.inputData.label} 
        key={`${data.inputData.key}`}
        {...formItemLayout} 
    >
        <TextArea
            id={`${data.inputData.key}`}
            required={data.inputData.required}
            placeholder={data.inputData.placeholder}
            value={data.inputData.value ? data.inputData.value : ""}
        />
    </FormItem>
);

export default TextareaInput;
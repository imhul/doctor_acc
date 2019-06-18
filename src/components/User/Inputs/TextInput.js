import React from 'react';
import { Form, Input, Icon } from 'antd';

// Helpers
import { formItemLayout } from '../../../helpers';

const FormItem = Form.Item;

const TextInput = data => (
    <FormItem 
                label={data.inputData.label} 
                {...formItemLayout} 
            >

                <Input
                    id={data.inputData.key}
                    placeholder={data.inputData.placeholder}
                    value={data.inputData.value ? data.inputData.value : ""}
                    addonBefore={<Icon type="form" />}
                />

            </FormItem>
);

export default TextInput;
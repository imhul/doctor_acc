import React from 'react';
import { Form, Input, Icon } from 'antd';

// Helpers
import { formItemLayout } from '../../../helpers';

const FormItem = Form.Item;

const TextInput = data => (
    <FormItem 
                label={data.inputData.Title} 
                {...formItemLayout} 
            >

                <Input
                    id={data.inputData.Id}
                    placeholder={data.inputData.Placeholder}
                    addonAfter={data.inputData.TextAfter}
                    value={data.inputData.Value ? data.inputData.Value : ""}
                    addonBefore={<Icon type="form" />}
                />

            </FormItem>
);

export default TextInput;
import React from 'react';

// Components
import { 
    DateInput,
    TextInput,
    TextareaInput,

} from '../components/User/Inputs';

// Decorative options
export const buttonItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 12,
            offset: 12,
        },
    },
};

export const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

// Inputs initialization by types
export const typeDetector = inputData => {
    console.info("typeDetector inputData: ", inputData);
    switch (inputData.type) {
        case 'date':
            return <DateInput inputData={inputData} key={inputData.key} />;
        case 'text':
            return <TextInput inputData={inputData} key={inputData.key} />;
        case 'textarea':
            return <TextareaInput inputData={inputData} key={inputData.key} />;
        default:
            return null
    }
};

export const getId = string => {
    return string.replace(/ .*/,'')
};
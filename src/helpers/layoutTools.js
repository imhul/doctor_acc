import React from 'react';

// Components
import { 
    SwitchInput,
    DateInput,
    TextInput,
    TextareaInput,
    NumberInput,
    CheckboxInput,
    RadioParent,
    ParentTitle,

} from '../components/User/Inputs';

// Decorative options
export const buttonItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

// Inputs initialization by types
export const typeDetector = (inputData, isChild) => {
    switch (inputData.Type) {
        case 'date':
            return <DateInput isChild={isChild} inputData={inputData} key={inputData.Id} />;
        case 'text':
            return <TextInput isChild={isChild} inputData={inputData} key={inputData.Id} />;
        case 'textarea':
            return <TextareaInput isChild={isChild} inputData={inputData} key={inputData.Id} />;
        case 'number':
            return <NumberInput isChild={isChild} inputData={inputData} key={inputData.Id} />;
        case 'switcher':
            return <SwitchInput isChild={isChild} inputData={inputData} key={inputData.Id} />;
        case 'checkbox':
            return <CheckboxInput isChild={isChild} inputData={inputData} key={inputData.Id} />;
        case 'parent-radio':
            return <RadioParent isChild={isChild} inputData={inputData} key={inputData.Id} />;
        case 'parent':
            return <ParentTitle isChild={isChild} inputData={inputData} key={inputData.Id} />;
        default:
            return null
    }
};

export const getId = string => {
    return string.replace(/ .*/,'')
};
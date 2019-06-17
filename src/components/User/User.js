import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../redux/ui_actions';
import { Form, Button, Switch, Row, Col, Table, Input, Icon, message, } from 'antd';
import { Wave } from 'react-preloading-component';

// Components
import EducationTable from './Tables/EducationTable';

// Helpers
import { 
    requestURL,
    requestBody,
    typeDetector,
    requestHeader,
    
} from '../../helpers';

const FormItem = Form.Item;
const successLoadText = "Дані успішно завантажені!";
const errorLoadText = "Помилка з'єднання! Дані не завантажені!";
const successSaveText = "Дані успішно збережені!";
const errorSaveText = "Помилка з'єднання! Дані не були збережені!";

class User extends Component {

    loadAllData() {
        const { uiActions } = this.props;
        const data = {
            'Hospital': document.getElementById("Hospital").value,
            'Patient': document.getElementById("Patient").value,
            'Hospitalization': document.getElementById("Hospitalization").value,
            'Reception': document.getElementById("Reception").value,
            'Department': document.getElementById("Department").value,
        };

        fetch(requestURL, {
            method: 'post',
            headers: requestHeader,
            body: requestBody(data)
        })
        .then(response => {
            if(response.ok && (response.status === 200)) {
                message.success(successLoadText);
                return response.json()
            } else {
                message.error(errorLoadText);
                uiActions.loadError()
            }
        })
        .then(data => uiActions.loadData(data))
        .catch(error => message.error(error))
    };

    componentDidMount() {
        this.loadAllData = this.loadAllData.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        // this.loadAllData();  // First data loading
    };

    onFormSubmit(e) {
        e.preventDefault();
        this.formSubmit(this.props.ui.formData)
    };

    formSubmit(newData) {
        const { uiActions, ui } = this.props;
        const options = {
            'Hospital': document.getElementById("Hospital").value,
            'Patient': document.getElementById("Patient").value,
            'Hospitalization': document.getElementById("Hospitalization").value,
            'Reception': document.getElementById("Reception").value,
            'Department': document.getElementById("Department").value,
        };
        const request = {
            'Options' : options,
            'Data' : newData,
        };

        fetch('https://med.uax.co/api/?Method=SaveOptions', {
            method: 'post',  
            headers: requestHeader,
            body: 'Request='+JSON.stringify(request)
        })
        .then(response => { 
            if(response.ok && (response.status === 200)) {
                uiActions.formSubmit();
                message.success(successSaveText);
                return response.json()
            } else {
                message.error(errorSaveText);
                uiActions.submitError(response.status)
            }
        })
        .catch(error => message.error(error))
    };

    render() {
        const { 
            isInit,
            isDataLoaded, 
            isSubmitted, 
            isFormActivated, 
            formData, 
            userData, 
            tableData, 
        } = this.props.ui;
        
        const { uiActions } = this.props;

        return (
            <div className="flex-container" style={isInit === false ? { height: '100%' } : { height: 'auto' }}>
                { isInit === false ? <Wave color="#1890ff" /> : ( // preloader
                    <Form 
                        className="doctor-form" 
                        onSubmit={ this.onFormSubmit } 
                        onChange={ uiActions.formUpdate }
                    >   
                        <Icon type="user-add" className="form-icon" />


                        { formData.map(inputs => typeDetector(inputs)) }

                        <EducationTable />

                        <FormItem>
                            <Button disabled={!isFormActivated} type="primary" htmlType="submit">
                                Зберегти <Icon theme="filled" type="save" />
                            </Button>
                        </FormItem>

                    </Form>
                ) }
                
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

export default connect(mapStateToProps, mapDispatchToProps)(User);

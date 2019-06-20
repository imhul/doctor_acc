import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../redux/ui_actions';
import { Form, Button, Alert, Icon, message, Divider, } from 'antd';
import { Wave } from 'react-preloading-component';

// Components
import EducationTable from './Tables/EducationTable';
import WorkTable from './Tables/WorkTable';
import OverseaTable from './Tables/OverseaTable';
import Avatar from './Avatar';
import PassCard from './PassCard';

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
                        <header>
                            <span>
                                <h1>
                                    <Icon type="user-add" className="form-icon" /> Особистий кабінет лікаря
                                </h1>
                                <h2>{ userData.name }</h2>
                                <PassCard />
                            </span>
                            <div className="img-wrapper">
                                {
                                    userData.avatar ? <img 
                                        src={userData.avatar} 
                                        alt={userData.name} 
                                        className="avatar" 
                                    /> : <Avatar />
                                }
                            </div>
                        </header>

                        <h2>Освіта</h2>
                        <EducationTable />
                        <Divider />

                        <h2>Робота</h2>
                        <Alert 
                            showIcon={ true }
                            type="info"
                            message="Виконувана робота з початку трудової діяльності (включаючи навчання у вищих і середніх навчальних закладах, військову службу участь в партизанських загонах і роботу за сумісництвом). При заповненні цього пункту установи, організації і підприємства необхідно іменувати так, як вони називалися у свій час, військову службу записувати з зазначенням посади." 
                        />
                        <Divider style={{ visibility: "hidden", margin: "10px 0" }} />
                        <WorkTable />
                        <Divider />

                        <h2>Закордонний досвід</h2>
                        <Alert 
                            showIcon={ true }
                            type="info"
                            message="Перебування за кордоном (робота, службове відрядження тощо)." 
                        />
                        <Divider style={{ visibility: "hidden", margin: "10px 0" }} />
                        <OverseaTable />
                        <Divider />

                        <Alert 
                            showIcon={ true }
                            type="info"
                            message="Працівник, який заповнює особовий листок, повинен про всі наступні зміни повідомляти за місцем роботи для внесення відповідних даних у його особову картку." 
                        />

                        <Divider style={{ visibility: "hidden", margin: "10px 0" }} />

                        { formData.map(inputs => typeDetector(inputs)) }

                        <Divider style={{ visibility: "hidden", margin: "10px 0" }} />

                        <FormItem className="bottom-buttons">
                            <Button
                                ghost 
                                block 
                                type="danger"  
                                onClick={ uiActions.togglePassChanger }
                            >
                                Змінити логін або пароль
                            </Button>

                            <Divider type="vertical" />

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

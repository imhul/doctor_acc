import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Form, Icon, Input, Button, } from 'antd';

const { Password } = Input;
const FormItem = Form.Item;

class ChangePassLOginForm extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const { form, ui, uiActions } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        uiActions.userAccessFormSave(values)
      }
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { userData, isNewPassActive, isCurrentPassActive, isLoginActive } = this.props.ui;
    const { uiActions } = this.props;
    const isPassMatched = ( currentPass, newPass ) => {
      return currentPass === md5(newPass)
    }; 
    return (
      <Form 
        id="user-access-form"
        onSubmit={this.handleSubmit} 
        onChange={uiActions.userAccessFormUpdate} 
        className="login-form"
      >
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: false }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Логін"
              onClick={uiActions.toggleCurrentLoginConfirm}
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Будь ласка, введіть ваш пароль!' }],
          })(
            <Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              visibilityToggle={true}
              placeholder="Пароль"
              onClick={uiActions.toggleNewPassConfirm}
            />,
          )}
        </FormItem>
        {/* old pass */}
        <div className={`hidden-inputs ${ isNewPassActive ? "show" : null }`}>
          <FormItem>
            {getFieldDecorator('currentPassword', {
              rules: [{ required: false }],
            })(
              <Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                visibilityToggle={true}
                placeholder="Поточний пароль"
                onClick={uiActions.toggleCurrentPassConfirm}
              />,
            )}
          </FormItem>
          
        </div>
        <FormItem>
          <Button htmlType="submit" className="user-form-submit-button" />
        </FormItem>
      </Form>
    );
  }
}

const WrappedChangePassLOginForm = Form.create({ name: 'login_pass_change' })(ChangePassLOginForm);

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

export default connect(mapStateToProps, mapDispatchToProps)(WrappedChangePassLOginForm);
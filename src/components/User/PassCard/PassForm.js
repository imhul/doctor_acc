import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Form, Icon, Input, } from 'antd';

const { Password } = Input;

class ChangePassLOginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { showOldPass } = this.props.ui;
    const { uiActions } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: false }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Логін"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('newPassword', {
            rules: [{ required: true, message: 'Будь ласка, введіть ваш пароль!' }],
          })(
            <Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              visibilityToggle={true}
              placeholder="Пароль"
              onClick={uiActions.toggleOldPassConfirm}
            />,
          )}
        </Form.Item>
        {/* old */}
        <div className={`hidden-inputs ${ showOldPass ? "show" : null }`}>
          <Form.Item>
            {getFieldDecorator('oldPassword1', {
              rules: [{ required: true, message: 'Будь ласка, введіть ваш пароль!' }],
            })(
              <Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                visibilityToggle={true}
                placeholder="Поточний пароль"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('oldPassword2', {
              rules: [{ required: true, message: 'Будь ласка, введіть ваш пароль!' }],
            })(
              <Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                visibilityToggle={true}
                placeholder="Поточний пароль"
              />,
            )}
          </Form.Item>
        </div>
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
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../redux/ui_actions';
import { Drawer, Button, Icon, Tooltip, message, Card } from 'antd';

// Components
import PassForm from './PassForm';

class PassCard extends Component {

    render() {
        const { showPassCard } = this.props.ui;
        const { uiActions } = this.props;
        return (
            <Drawer
                title="Змінити логін або пароль"
                width={348}
                onClose={ uiActions.togglePassChanger }
                visible={ showPassCard }
            >
                <Card
                    style={{ width: 300 }}
                    actions={
                        [
                            <Tooltip title="Зберегти">
                                <Icon
                                    type="check-circle"
                                    theme="twoTone"
                                    onClick={ uiActions.saveUserAccess }
                                    twoToneColor="#a0d911"
                                />
                            </Tooltip>,
                            <Tooltip title="Скасувати">
                                <Icon
                                    type="close-circle"
                                    theme="twoTone"
                                    twoToneColor="#fa541c"
                                    onClick={ uiActions.togglePassChanger }
                                />
                            </Tooltip>,
                            
                        ]
                    }
                >
                    <PassForm />
                </Card>
            </Drawer>
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

export default connect(mapStateToProps, mapDispatchToProps)(PassCard);
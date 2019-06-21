import { typesUI as type } from './types';

export function loadData(payload) {
  return (dispatch) => {
    dispatch({
      type: type.USER_FORM_LOAD_DATA,
      payload: payload,
    })
  }
};

export function loadError(text) {
  return (dispatch) => {
    dispatch({
      type: type.USER_FORM_LOAD_ERROR,
      payload: text,
    })
  }
};

export function submitError(text) {
  return (dispatch) => {
    dispatch({
      type: type.USER_FORM_SUBMIT_ERROR,
      payload: text,
    })
  }
};

export function dateUpdate(payload, mode, id) {
  return (dispatch) => {
    dispatch({
      type: type.DATE_UPDATE,
      payload: payload,
      meta: id,
    })
  }
};

export function tableUpdate(payload) {
  return (dispatch) => {
    dispatch({
      type: type.USER_TABLE_UPDATE,
      payload: payload.target,
    })
  }
};

export function formUpdate(payload) {
  return (dispatch) => {
    dispatch({
      type: type.USER_FORM_UPDATE,
      payload: payload.target,
    })
  }
};

export function formSubmit() {
  return (dispatch) => {
    dispatch({
      type: type.USER_FORM_SUBMIT,
    })
  }
};

// Table rows

export function editRow(key, tableId) {
  return (dispatch) => {
    dispatch({
      type: type.EDIT_ROW,
      payload: key,
      meta: tableId,
    })
  }
};

export function deleteRow(payload, id) {
  return (dispatch) => {
    dispatch({
      type: type.DELETE_ROW,
      payload: payload,
      meta: id,
    })
  }
};

export function cancelRow(payload, id) {
  return (dispatch) => {
    dispatch({
      type: type.CANCEL_ROW,
      payload: payload,
      meta: id,
    })
  }
};

export function saveRow(payload, id) {
  return (dispatch) => {
    dispatch({
      type: type.SAVE_ROW,
      payload: payload,
      meta: id,
    })
  }
};

export function addRow(payload, id) {
  return (dispatch) => {
    dispatch({
      type: type.ADD_ROW,
      payload: payload,
      meta: id,
    })
  }
};

// User access

export function userAccessFormToggle() {
  return (dispatch) => {
    dispatch({
      type: type.USER_ACCESS_FORM_TRIGGER,
    })
  }
};

export function saveUserAccessForm() {
  return (dispatch) => {
    dispatch({
      type: type.USER_ACCESS_FORM_SUBMIT,
    })
  }
};

export function userAccessFormUpdate(payload) {
  return (dispatch) => {
    dispatch({
      type: type.USER_ACCESS_FORM_UPDATE,
      payload: payload.target,
    })
  }
};

export function toggleNewPassConfirm() {
  return (dispatch) => {
    dispatch({
      type: type.NEW_PASS_INPUT_TRIGGER,
    })
  }
};

export function toggleCurrentPassConfirm() {
  return (dispatch) => {
    dispatch({
      type: type.CURRENT_PASS_TRIGGER,
    })
  }
};

export function toggleCurrentLoginConfirm() {
  return (dispatch) => {
    dispatch({
      type: type.CURRENT_LOGIN_TRIGGER,
    })
  }
};
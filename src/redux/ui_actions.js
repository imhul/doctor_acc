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

export function formUpdate(payload) {
  return (dispatch) => {
    dispatch({
      type: type.USER_FORM_UPDATE,
      payload: payload.target,
    })
  }
};

export function numberUpdate(payload, id) {
  return (dispatch) => {
    dispatch({
      type: type.NUMBER_UPDATE,
      payload: payload,
      meta: id,
    })
  }
};

export function switchUpdate(checked, id) {
  return (dispatch) => {
    dispatch({
      type: type.SWITCH_UPDATE,
      payload: checked,
      meta: id,
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
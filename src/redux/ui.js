import { typesUI as type } from './types';
import testData from "../helpers/testData";

const initState = {

    isInit: true,
    isDataLoaded: false,
    isSubmitted: false,
    isFormActivated: false,

    formData: testData.inputs, // [],
    userData: testData.doctor, // [],
    tableData: testData.tables, // [],
    educationTableData: testData.tables.filter(table => table.name === "education")[0], // [],
    workTableData: testData.tables.filter(table => table.name === "work")[0], // [],
    overseaTableData: testData.tables.filter(table => table.name === "oversea")[0], // [],

};

export default (state = initState, action) => {
    switch (action.type) {

        case type.USER_FORM_LOAD_DATA:
            return action.payload.isAuthorized ? { 
                ...state,
                formData: action.payload.inputs ? action.payload.inputs : [],
                educationTableData: action.payload.tables ? action.payload.tables.filter(table => table.name === "education") : [],
                workTableData: action.payload.tables ? action.payload.tables.filter(table => table.name === "work") : [],
                overseaTableData: action.payload.tables ? action.payload.tables.filter(table => table.name === "oversea") : [],
                isDataLoaded: false,
                isInit: true,
            } : { 
                ...state,
            };

        case type.USER_FORM_LOAD_ERROR:
            return { 
                ...state,
                isDataLoaded: false,
            };

        case type.USER_FORM_SUBMIT_ERROR:
            return { 
                ...state,
                isSubmitted: false,
            };

        case type.DATE_UPDATE:
            state.formData.filter(items => items.Id === action.meta).map(item => {
                item.Value = action.payload;
                item.Checked = !action.payload.checked
            });
            return {
                ...state,
                isFormActivated: true,
            };

        case type.NUMBER_UPDATE:
            state.formData.filter(items => items.Id === action.meta).map(item => {
                item.Value = action.payload;
                item.Checked = !action.payload.checked
            });
            return {
                ...state,
                isFormActivated: true,
            };

        case type.SWITCH_UPDATE:
            state.formData.filter(items => items.Id === action.meta).map(item => {
                item.Value = action.payload;
                item.Checked = action.payload
            });
            return {
                ...state,
                isFormActivated: true,
            };

        case type.USER_FORM_UPDATE:
            const target = state.formData.filter(items => items.Id === action.payload.id);
            const untargets = state.formData.filter(items => items.Id !== action.payload.id);
            const targetOwner = `${target.map(item => item.Owner)[0]}`;
            target.map(item => {
                item.Value = action.payload.value;
            });

            untargets.filter(item => item.Owner === targetOwner).map(item => {
                untargets.filter(items => items.Owner === item.Id).map(subitem => {
                    subitem.Checked = false
                });
            });
            return {
                ...state,
                isFormActivated: true,
            };

        case type.USER_FORM_SUBMIT:
            return {
                ...state,
                isSubmitted: true,
            };

            // Table rows

        case type.EDIT_ROW:
            console.info("EDIT_ROW action.meta: ", action.meta);
            state.tableData.filter(items => items.name === action.meta)
            .map(item => {
                item.editingKey = action.payload;
                item.editing = true;
            });
            return {
                ...state,
            };

        case type.DELETE_ROW:
                const currentTable = state.tableData.filter(tables => tables.name === action.meta);
                console.info("DELETE_ROW currentTable: ", currentTable[0]);
                switch (currentTable[0].name) {
                    case "education": state.educationTableData.rows = state.educationTableData.rows.filter( item => item.key !== action.payload );
                    case "work": state.workTableData.rows = state.workTableData.rows.filter( item => item.key !== action.payload );
                    case "oversea": state.overseaTableData.rows = state.overseaTableData.rows.filter( item => item.key !== action.payload );
                };
                return {
                    ...state,
                };

        case type.CANCEL_ROW:
            state.tableData.filter(items => items.name === action.meta)
            .map(item => {
                item.editingKey = "";
                item.editing = false;
            });
            return {
                ...state,
            };

        case type.SAVE_ROW:
            state.tableData.filter(items => items.name === action.meta)
            .map(item => {
                item.editingKey = "";
                item.editing = false;
                item.rows = action.payload
            });
            return {
                ...state,
            };

        case type.ADD_ROW:
            state.tableData.filter(items => items.name === action.meta)
            .map(item => {
                item.count = item.count + 1;
                item.rows = action.payload
            });
            return {
                ...state,
            };

        default:
            return state;
    }
};
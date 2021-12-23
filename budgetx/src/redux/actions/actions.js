import {
    ADD,
    DELETE,
    SEARCH,
    RESET,
    SUM,
  } from '../action-types/actionTypes.js';
  
  export const addItem = (data) => {
    return {
      type: ADD,
      data,
    };
  };
  export const deleteItem = (data) => {
    return {
      type: DELETE,
      data,
    };
  };
  export const resetList = () => {
    return {
      type: RESET,
    };
  };
  export const sumAmount = (data) => {
    return {
      type: SUM,
      data,
    };
  };
  export const searchItem = (query) => {
    return {
      type: SEARCH,
      query,
    };
  };
  
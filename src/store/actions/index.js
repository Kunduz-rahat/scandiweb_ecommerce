import {PRODUCTS, SEARCH_INPUT,  SEND_CURRENCY, SEND_CATEGORY,ADD_TO_CART,ADD_ITEM_QTY,REMOVE_FROM_CART, LOAD_CURRENT_ITEM, CHANGE_ATTRIBUTE} from './types'



export const sendProducts = (state) => ({
	type: PRODUCTS,
	state,
 });
 
 export const sendCurrency = (state) => ({
	type: SEND_CURRENCY,
	state,
 });
 
 export const sendCategory = (state) => ({
	type: SEND_CATEGORY,
	state,
 });
 
 export const searchInput = (state) => ({
	type: SEARCH_INPUT,
	state,
 });
 
 export const addToCart = (state) => {
	return {
	  type: ADD_TO_CART,
	  state,
	};
 };
 
 export const removeFromCart = (state) => {
	return {
	  type: REMOVE_FROM_CART,
	  state,
	};
 };
 
 export const addItemQty = (itemID, amount) => {
	return {
	  type: ADD_ITEM_QTY,
	  payload: {
		 productId: itemID,
		 amount,
	  },
	};
 };
 
 export const loadCurrentItem = (item) => {
	return {
	  type: LOAD_CURRENT_ITEM,
	  payload: item,
	};
 };
 
 export const changeAttribute = (attr, itemID) => {
	return {
	  type: CHANGE_ATTRIBUTE,
	  payload: {
		 attr,
		 itemID,
	  },
	};
 };
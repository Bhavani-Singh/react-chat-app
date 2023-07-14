import { FETCH_CONTACTS, ADD_MESSAGE } from "./actionTypes";

// Action creator function for updating contacts
export function updateContacts(contacts) {
  return {
    type: FETCH_CONTACTS,
    contacts: contacts,
  };
}

// Action creator function for adding a new message
export function addNewMessage(message, userId) {
  return { type: ADD_MESSAGE, message, userId };
}

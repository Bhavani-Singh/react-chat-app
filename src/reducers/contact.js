import { FETCH_CONTACTS, ADD_MESSAGE } from "../actions/actionTypes";

// Initial state for the contacts reducer
const initialState = {
  contacts: [],
};

/**
 * Reducer function for managing the contacts state
 *
 * @param {Object} state - Current state
 * @param {Object} action - Action object
 * @returns {Object} - Updated state
 */
export default function contacts(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
      };
    case ADD_MESSAGE:
      // Create a copy of the contacts array
      const updatedcontacts = [...state.contacts];

      // Find the user with the matching ID
      const user = updatedcontacts.find(
        (contact) => contact.id === action.userId
      );

      // Push the new message to the user's chatlog
      user.chatlog.push(action.message);
      return {
        ...state,
        contacts: [...updatedcontacts],
      };
    default:
      return state;
  }
}

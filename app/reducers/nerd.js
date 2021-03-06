// @flow
import { Map } from 'immutable';
import { NERD } from '../actions/types';
import type { Reducer } from './types';

const initialState = Map({
  users: []
});

const nerd: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case NERD.QUERY_NERD_SUCCESS: {
      return state.merge({
        users: action.payload.json.map((user) => ({ username: user.username, displayName: `${user.name} ${user.surname}` }))
      });
    }

    default:
      return state;
  }
};

export default nerd;

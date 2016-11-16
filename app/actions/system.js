// @flow
import callAPI from './callAPI';
import { SYSTEM } from './types';
import type { Thunk } from './types';
import { addNotification } from './notification';

export function fetchSystem(): Thunk {
  return (dispatch, getState) => {
    const token = getState().auth.get('token');

    return dispatch(callAPI({
      type: SYSTEM.FETCH_SYSTEM,
      endpoint: `systems/${token}?lookupParam=apiToken`,
    }));
  };
}

export function fetchSeller(param: string, lookupParam: string = 'rfid'): Thunk {
  return (dispatch, getState) => {
    const system = getState().system.get('system');

    return dispatch(callAPI({
      type: SYSTEM.FETCH_SELLER,
      endpoint: `${system.get('id')}/customers/${param}?lookupParam=${lookupParam}`,
    }))
    .then((response) => {
      const json = response.value.json;

      if (json && json.customerRole.isSeller) {
        dispatch({
          type: SYSTEM.SET_SELLER,
          payload: { json }
        });

        return dispatch(addNotification({
          clear: true,
          uid: 'not_seller'
        }));
      }

      return dispatch(addNotification({
        title: 'Ikke en gyldig selger!',
        level: 'warning',
        message: 'Du må være en registrert selger. Koble til RFID-leser og skann kortet ditt.',
        autoDismiss: 0,
        uid: 'not_seller'
      }));
    });
  };
}

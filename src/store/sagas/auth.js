
// Sagas are just to use the code which is not much related
// to our main store like updating or getting the store
// We can say the extra or side code we use in our actions
// Also the saga is kind of function * mmean the function
// generator and the yield mean first it will complete this line
// then will move to next line
// Sagas are related to actions

import {put} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

export function* logoutSaga(action)
{
   yield localStorage.removeItem('token');
   yield localStorage.removeItem('expirationDate');
   yield localStorage.removeItem('userId');
   yield put(
    {
        type: actionTypes.AUTH_LOGOUT
    }
   )
}
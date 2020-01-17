import { push } from 'connected-react-router/immutable';
import { user } from '../../constants/action-types';
import { auth } from '../../constants/action-types';
//import { userService } from '../services';
import { authService } from '../services';


export const signIn = (dispatch) => {
  console.log('signIn auth actions dispatch 0', dispatch)
  const request = (user) => { return { type: auth.signIn.request, user }; }
  const success = (user) => { return { type: auth.signIn.success, user }; }
  const failure = (error) => { return { type: auth.signIn.failure, error }; }

  return (username, password) => {
    console.log('signIn auth actions dispatch 1', dispatch)
    console.log('signIn auth actions', username, password)
    dispatch(request({ username }));

    authService.signInByUsername(username, password)
      .then(
        (user) => {
          dispatch(success(user));
          //push('/my/dashboard');
        },
        (error) => {
          dispatch(failure(error.toString()));
          //dispatch(alertActions.error(error.toString()));
        }
      );
  };
}

/*
export const signOut = () => {
  //userService.logout();
  return { type: user.signOut.request };
}

/ * https://github.com/cornflourblue/react-redux-registration-login-example/blob/master/src/_actions/user.actions.js

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}
*/

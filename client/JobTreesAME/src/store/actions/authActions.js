import axios from 'axios';
import storage from '../../helpers/storage';

export function jsLogin(userData) {
    console.log(userData)
    return (dispatch) => {
        axios.post('http://192.168.1.3:3001/user/login', userData)
        .then(({data}) => {
            console.log(data)
            dispatch({type: 'JS_LOGIN', payload: userData.email})
            storage.save({
                key: 'accessToken', // Note: Do not use underscore("_") in key!
                data: {
                  token: data.access_token
                },
              
                // if expires not specified, the defaultExpires will be applied instead.
                // if set to null, then it will never expire.
                expires: null
            });
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function jsRegister(userData) {
    return (dispatch) => {
        fetch('http://localhost:3001/user/register')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })

        .catch((err) => {
            console.log(err)
        })
    }
}
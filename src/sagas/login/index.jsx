/**
 * Created by liliwen on 2017/1/31.
 */
'use strict';
import {takeLatest, delay} from 'redux-saga'
import {call, put} from 'redux-saga/effects';
import * as loginAction from '../../actions/login';
import ajax from '../../common/lib/ajax';
import 'whatwg-fetch';
/**work*/
function* loginValidator(action) {
    //正在登陆提示
    yield put(loginAction.nowIsLoginingActionCreator());

    yield delay(1000);
    //获取用户信息
    
    //验证是否成功登陆
    let success = false;

    let {result, err} = yield call(ajax, {
        url: 'http://211.149.228.167:8080/bzSystem-1.0/user/userLogin',
        method:'POST',
        data:JSON.stringify({
            username : action.username,
            password : action.password
        })
    });
    if(result.loginStatus === true){
        success = true;
    }
    yield put(loginAction.loginResultActionCreator(success));
}

function asyncFetch(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('information from server...'), 3000);
    }).then(info => ({info}))
        .catch(err => ({err}));
}

/**watch*/
export default function* watchLoginAsync() {
    yield takeLatest(loginAction.CLICK_TO_LOGIN, loginValidator);
}
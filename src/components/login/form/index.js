/**
 * Created by Administrator on 2017-03-31.
 */
'use strict';

import React from 'react';
import './index.scss';
import {Icon , Button } from 'antd';
import Logo from '../../../common/components/M/logo';
import Loginbg1 from '../../../images/login/loginbg.png';
import Loginbg3 from '../../../images/login/loginbg3.png';

let sUserAgent= navigator.userAgent.toLowerCase(),
    bIsIpad= sUserAgent.match(/ipad/i) == "ipad",
    bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os",
    bIsMidp= sUserAgent.match(/midp/i) == "midp",
    bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
    bIsUc= sUserAgent.match(/ucweb/i) == "ucweb",
    bIsAndroid= sUserAgent.match(/android/i) == "android",
    bIsCE= sUserAgent.match(/windows ce/i) == "windows ce",
    bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";


class FormCpn extends React.Component {

    constructor() {
        super();
        this.clickToLogin = this.clickToLogin.bind(this);
        this.enterToLogin = this.enterToLogin.bind(this);
        this.state={
            ShowUsernameWarn : false ,
            ShowPasswordWarn : false ,
            usernamehrclassName : 'hr_',
            passwordhrclassName : 'hr_' ,
            usernameIptTipsclassName : 'IptTips',
            passwordIptTipsclassName : 'IptTips' ,
            ShowusercloseIcon : false ,
            ShowpasscloseIcon : false ,
            isshowlogo : false ,
            index : 0
        }
    }

    componentWillMount() {
        

        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            this.setState({
                isshowlogo : true
            })
        }else {
            this.setState({
                isshowlogo : false
            })
        }
    }
    
    /**input聚焦*/
    foucuschange(e) {
        var obj = e.target ,
            _self = this;
        switch (obj.name) {
            case 'username' :
                if(obj.value.length > 0) {
                    _self.setState({
                        ShowusercloseIcon : true ,
                        ShowpasscloseIcon : false,
                        usernameIptTipsclassName : 'IptTips IptTips_change',
                        
                    });
                    if(_self.state.usernamehrclassName == 'hr_ hr_warn'){
                        _self.setState({
                            usernamehrclassName : 'hr_ hr_warn'
                        });
                    }else {
                        _self.setState({
                            usernamehrclassName : 'hr_ hr_change'
                        });
                    }
                }else {
                    _self.setState({
                        ShowusercloseIcon : false ,
                        ShowpasscloseIcon : false ,
                        usernameIptTipsclassName : 'IptTips IptTips_change',
                    });
                    if(_self.state.usernamehrclassName == 'hr_ hr_warn'){
                        _self.setState({
                            usernamehrclassName : 'hr_ hr_warn'
                        });
                    }else {
                        _self.setState({
                            usernamehrclassName : 'hr_ hr_change'
                        });
                    }
                } 
                break;
            case 'password' :
                if(obj.value.length >0) {
                    _self.setState({
                        ShowusercloseIcon : false ,
                        ShowpasscloseIcon : true ,
                        passwordIptTipsclassName : 'IptTips IptTips_change' ,
                    });
                    if(_self.state.passwordhrclassName == 'hr_ hr_warn'){
                        _self.setState({
                            passwordhrclassName : 'hr_ hr_warn'
                        });
                    }else {
                        _self.setState({
                            passwordhrclassName : 'hr_ hr_change'
                        });
                    }
                }else {
                    _self.setState({
                        ShowusercloseIcon : false ,
                        ShowpasscloseIcon : false ,
                        passwordIptTipsclassName : 'IptTips IptTips_change' ,
                    });
                    if(_self.state.passwordhrclassName == 'hr_ hr_warn'){
                        _self.setState({
                            passwordhrclassName : 'hr_ hr_warn'
                        });
                    }else {
                        _self.setState({
                            passwordhrclassName : 'hr_ hr_change'
                        });
                    }
                }
                break;
        }
    }
    /**input失焦*/
    blurchange(e) {
        var obj = e.target ,
            _self = this;
        switch (obj.name) {
            case 'username' :
                if(obj.value.length === 0){
                    this.setState({
                        usernameIptTipsclassName : 'IptTips',
                        usernamehrclassName : 'hr_ '
                    })
                    if(_self.state.usernamehrclassName == 'hr_ hr_warn'){
                        _self.setState({
                            usernamehrclassName : 'hr_ hr_warn'
                        });
                    }
                }else if(obj.value.length !== 0){
                    _self.setState({
                        usernamehrclassName : 'hr_',
                        usernameIptTipsclassName : 'IptTips IptTips_change',
                    });
                     if(_self.state.usernamehrclassName == 'hr_ hr_warn'){
                        _self.setState({
                            usernamehrclassName : 'hr_ hr_warn'
                        });
                    }
                }
                break;
            case 'password' :
                if(obj.value.length === 0){
                    this.setState({
                        passwordIptTipsclassName : 'IptTips' ,
                        passwordhrclassName : 'hr_',
                    })
                    if(_self.state.passwordhrclassName == 'hr_ hr_warn'){
                         _self.setState({
                            passwordhrclassName : 'hr_ hr_warn'
                        });
                    }
                }else if(obj.value.length !== 0){
                    _self.setState({
                        passwordIptTipsclassName : 'IptTips IptTips_change' ,
                        passwordhrclassName : 'hr_',
                    });
                    if(_self.state.passwordhrclassName == 'hr_ hr_warn'){
                         _self.setState({
                            passwordhrclassName : 'hr_ hr_warn'
                        });
                    }
                }
       
                break;
        }
    }
    
    /**输入改变*/
    OnChange(e) {
        var obj = e.target ,
            _self = this ;
        switch (obj.name) {
            case 'username' :
                if(obj.value.length === 0){
                    _self.setState({
                        usernameIptTipsclassName : 'IptTips',
                        ShowusercloseIcon : false
                    });
                }else{
                    _self.setState({
                        usernameIptTipsclassName : 'IptTips IptTips_change',
                        ShowusercloseIcon : true
                    });
                }
                break;
            case 'password' :
                if(obj.value.length === 0){
                    _self.setState({
                        passwordIptTipsclassName : 'IptTips',
                        ShowpasscloseIcon : false
                    });
                }else{
                    _self.setState({
                        passwordIptTipsclassName : 'IptTips IptTips_change',
                        ShowpasscloseIcon : true
                    });
                }
                break;
        }
    }
    
    /**点击按钮登陆*/
    clickToLogin() {
        var username = this.refs.username.value.length;
        var password = this.refs.password.value.length;
        switch (true){
            case username === 0 :
                this.setState({
                    ShowUsernameWarn : true ,
                    ShowPasswordWarn : false ,
                    usernamehrclassName : 'hr_ hr_warn',
                    passwordhrclassName : 'hr_'
                });
                break;
            case password === 0 :
                this.setState({
                    ShowUsernameWarn : false ,
                    ShowPasswordWarn : true ,
                    usernamehrclassName : 'hr_',
                    passwordhrclassName : 'hr_ hr_warn'
                });
                break;
            case username !== 0 && password !== 0:
                this.setState({
                    ShowUsernameWarn : false ,
                    ShowPasswordWarn : false ,
                    usernamehrclassName : 'hr_',
                    passwordhrclassName : 'hr_',
                    ShowpasscloseIcon : false,
                    ShowusercloseIcon:false
                });
                this.props.loginHandler(this.refs.username.value , this.refs.password.value);
                break;
        }

        console.log(this.refs.username.value);
        console.log(this.refs.password.value);
    }
    
    /**回车登陆*/
    enterToLogin(event) {
        var username = this.refs.username.value.length;
        event = event || window.event;
        if (event.keyCode === 13 && username === 0){
            this.setState({
                ShowUsernameWarn : true ,
                ShowPasswordWarn : false ,
                usernamehrclassName : 'hr_ hr_warn',
                passwordhrclassName : 'hr_'
            });
        }else if (event.keyCode === 13 && username !== 0){
            this.refs.password.focus();
            this.clickToLogin();
        }
    }
    /**清空输入框*/
    clearUSER() {
        this.refs.username.value = '';
        this.refs.username.focus();
        this.setState({
            ShowusercloseIcon : false ,
            usernameIptTipsclassName : 'IptTips'
        })
    }
    clearPASS() {
        this.refs.password.value = '';
        this.refs.password.focus();
        this.setState({
            ShowpasscloseIcon : false ,
            passwordIptTipsclassName : 'IptTips'
        })
    }
    oninput(e) {
        var obj = e.target;
        switch (obj.name){
            case 'username' :
                if(obj.value.length > 0) {
                    this.setState({
                        ShowusercloseIcon : true ,
                        ShowpasscloseIcon : false ,
                        usernameIptTipsclassName : 'IptTips IptTips_change',
                        usernamehrclassName : 'hr_ hr_change' ,
                        ShowUsernameWarn : false ,
                    })
                }else {
                    this.setState({
                        ShowusercloseIcon : false ,
                        usernameIptTipsclassName : 'IptTips IptTips_change',
                    })
                }
                break;
            case 'password' :
                if(obj.value.length > 0) {
                    this.setState({
                        ShowusercloseIcon : false ,
                        ShowpasscloseIcon : true ,
                        passwordIptTipsclassName : 'IptTips IptTips_change',
                        passwordhrclassName : 'hr_ hr_change',
                        ShowPasswordWarn : false ,
                    })
                }else {
                    this.setState({
                        ShowpasscloseIcon : false ,
                        passwordIptTipsclassName : 'IptTips IptTips_change',
                    })
                }
                break;

        }
    }
    componentDidMount() {
        // this.autoPlay();
    }
    autoPlay() {
        let _self = this;
        let bgarr = [Loginbg1,Loginbg3];
        setInterval(function () {
            _self.setState({
                index : ++_self.state.index
            });
            if(_self.state.index === bgarr.length)
                _self.setState({
                    index : 0
                });
            _self.refs.index.style.background = 'url('+bgarr[_self.state.index]+') no-repeat center center';
            _self.refs.index.style.backgroundSize = 'cover';
        },3000);
    }
    prevent(e){
       e.stopPropagation();
    }
    
    render() {
        //初始化验证状态
        let validateState = this.props.success ? null : 'error',
            showWarn = this.props.success ? 'hidden' : 'visible',
            loginBtnWords = this.props.isLogining ? '正在登录...' : '登录';
        //第一次通过
        if (this.props.firstTime) validateState = null;
        //第一次不显示
        if (this.props.firstTime) showWarn = 'hidden';

        let ShowUsernameWarn = this.state.ShowUsernameWarn ? 'visible' : 'hidden';
        let ShowPasswordWarn = this.state.ShowPasswordWarn ? 'visible' : 'hidden';
        let ShowusercloseIcon = this.state.ShowusercloseIcon ?　'visible' : 'hidden' ;
        let ShowpasscloseIcon = this.state.ShowpasscloseIcon ?　'visible' : 'hidden' ;
        let isshowlogo = this.state.isshowlogo ? <Logo /> : <div className="cont_title"><div className="word"><h1><Icon type="smile-o" /><span>欢迎登录</span></h1></div></div>;

        return (
            <div className="index" ref="index">
                <div className="logincont" onMouseOver={this.prevent.bind(this)}>
                    {isshowlogo}
                    <div className="cont_ipt">
                        <div className="loginError" style={{visibility:showWarn}}>
                            <Icon type="exclamation-circle" />账号或密码错误！
                        </div>
                        <div className="_ipt_out">
                            <div className="_ipt" >
                                <label className={this.state.usernameIptTipsclassName}>
                                    <font>请输入账号</font>
                                </label>
                                <input type="text" ref="username" name="username" className="ipt" autoComplete="off"  
                                       onFocus={this.foucuschange.bind(this)} 
                                       onBlur={this.blurchange.bind(this)}
                                       onKeyUp={this.enterToLogin.bind(this)}
                                       onInput={this.oninput.bind(this)}
                                />
                                <hr/>
                                <hr className={this.state.usernamehrclassName}/>
                                <div className="warn" style={{visibility: ShowUsernameWarn}} >账号不能为空</div>
                                <label className="closeIcon" style={{visibility:ShowusercloseIcon}} onClick={this.clearUSER.bind(this)}>
                                    <Icon type="close-circle" />
                                </label>
                            </div>
                        </div> 
                        <div className="_ipt_out">
                            <div className="_ipt" >
                                <label className={this.state.passwordIptTipsclassName}>
                                    <font>请输入密码</font>
                                </label>
                                <input type="password" ref="password" name="password" className="ipt"   
                                       onFocus={this.foucuschange.bind(this)} 
                                       onBlur={this.blurchange.bind(this)}
                                       onKeyUp={this.enterToLogin.bind(this)}
                                       onInput={this.oninput.bind(this)}
                                />
                                <hr/>
                                <hr className={this.state.passwordhrclassName}/>
                                <div className="warn" style={{visibility: ShowPasswordWarn}}>密码不能为空</div>
                                <label className="closeIcon" style={{visibility:ShowpasscloseIcon}} onClick={this.clearPASS.bind(this)}>
                                    <Icon type="close-circle" />
                                </label>
                            </div>
                        </div>
                        <div className="btn">
                     
                            <Button type="primary" loading={this.props.isLogining} onClick={this.clickToLogin.bind(this)}>{loginBtnWords}</Button>
                        </div>
                        
                    </div>
                </div>
                <div className="loginfooter"><a href="http://www.zsyltec.com/" title='成都中水云联' target='_blank' style={{color:'#fff',marginRight:'6px'}}>成都中水云联</a>版权所有 copyright@2017</div>
            </div>
        );
    }

}

export default FormCpn;
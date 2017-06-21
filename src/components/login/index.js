/**
 * Created by Administrator on 2017-03-14.
 */

/**引入同一目录下scss文件要在前面加上 “./” */
import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {clickToLoginActionCreator} from '../../actions/login';
import './index.scss';
import FormCpn from './form';
import LoginTop from '../../common/components/common/loginTop';
import Canvas from '../../common/components/bgcanvas';


let sUserAgent= navigator.userAgent.toLowerCase(),
    bIsIpad= sUserAgent.match(/ipad/i) == "ipad",
    bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os",
    bIsMidp= sUserAgent.match(/midp/i) == "midp",
    bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
    bIsUc= sUserAgent.match(/ucweb/i) == "ucweb",
    bIsAndroid= sUserAgent.match(/android/i) == "android",
    bIsCE= sUserAgent.match(/windows ce/i) == "windows ce",
    bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";



class LoginContainer extends React.Component {

    constructor() {
        super();
        this.state={
            isphone : false
        };
        this.loginHandler = this.loginHandler.bind(this);
    }
    componentWillMount() {
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            this.setState({
                isphone : true
            })
        } else {
            this.setState({
                isphone : false
            })
        }
    }
    
    loginHandler(username, password) {
        this.props.dispatch(clickToLoginActionCreator(username, password, true));
    }
    /*生命周期的Hook,用来决定该组件是否重新Render。*/
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.success) {
            browserHistory.replace('entry');
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                browserHistory.replace('m/userControl');
                window.localStorage['isLogin']=JSON.stringify(true);
            } else {
                browserHistory.replace('entry');
                window.localStorage['isLogin']=JSON.stringify(true);
                
            }
            return false;
        }
        return true;
    } 
    componentWillUnmount() {  
        this.setState({        
            isphone : true 
        })   
    }
    render() {
        let formProps = {
            success: this.props.success,
            isLogining: this.props.isLogining,
            firstTime: this.props.firstTime 
        };
        
        let isphone = this.state.isphone ? '' : <Canvas />;

        return (
            <div className="login">
                <LoginTop />
                <FormCpn loginHandler={this.loginHandler} {...formProps} />
            </div>
        );
    }
 
}  

export default connect(state => ({
    success: state.loginReducer.success,
    isLogining: state.loginReducer.isLogining,
    firstTime: state.loginReducer.firstTime
}))(LoginContainer);    
/**
 * Created by Administrator on 2017-04-17.
 */
import React from 'react';
import './index.scss';
import '../../common/lib/rem';
import Link from 'react-router/lib/Link';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as mAction from '../../actions/m';
import Loading from '../../common/components/common/loading';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
let navData = [
    {require:'./components/m/userControl', path: '/m/userControl' ,iconclassname : 'iconfont icon-yonghuguanli', name: '用户管理',title:'userControl'},
    {require:'./components/m/waterControl', path: '/m/waterControl',iconclassname : 'iconfont icon-yinyongshui', name: '用水管理',title:'waterControl'},
    {require:'./components/m/query', path: '/m/query',iconclassname : 'iconfont icon-chaxun', name: '数据查询',title:'query' },
    {require:'./components/m/setting', path: '/m/setting',iconclassname : 'iconfont icon-xitongshezhi', name: '设置',title:'setting' }
];
/**写这个是因为 router3.0 的自带bug （作者已不打算修复）清除掉warn 信息 {You cannot change <Router routes>; it will be ignored}*/
/**参考链接 https://github.com/minooo/React-Study/blob/cfdf6f7ab52158ea3fb08ff345488de5dddcce16/step-04/src/js/index.js*/
if (module.hot) {  
    /**
     * Warning from React Router, caused by react-hot-loader.
     * The warning can be safely ignored, so filter it from the console.
     * Otherwise you'll see it every time something changes.
     * See https://github.com/gaearon/react-hot-loader/issues/298
     */
    const orgError = console.error; // eslint-disable-line no-console
    console.error = (message) => { // eslint-disable-line no-console
        if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
            // Log the error as normally
            orgError.apply(console, [message]);
        }
    };
}
class Appnav extends React.Component {
    constructor() {
        super();
        this.state = {
            isactive1 : false,
            isactive2 : false,
            isactive3 : false,
            isactive4 : false,
        }
    }
    componentWillMount() {
        let isLogin = window.localStorage['isLogin'];
       
        if(isLogin === undefined){
            browserHistory.replace('/'); 
        }
        this.setState({
            isactive1:this.props.isActive('/m/userControl'),
            isactive2:this.props.isActive('/m/waterControl'),
            isactive3:this.props.isActive('/m/query'),
            isactive4:this.props.isActive('/m/setting'),
        })
    } 
    isactive1() {
        this.setState({
            isactive1:true,
            isactive2:false,
            isactive3:false,
            isactive4:false,
        })
    }
    isactive2() {
        this.setState({
            isactive1:false,
            isactive2:true,
            isactive3:false,
            isactive4:false,
        })
    }
    isactive3() {
        this.setState({
             isactive1:false,
            isactive2:false,
            isactive3:true,
            isactive4:false,
        })
    }
    isactive4() {
        this.setState({
             isactive1:false,
            isactive2:false,
            isactive3:false,
            isactive4:true,
        })
    }
    render() {
        return (
            <div className="MnavBtn">
                <div className="MnavBtnin">
                    <Link to='/m/userControl' className={this.state.isactive1 ? 'active' : ''} onClick={this.isactive1.bind(this)}>
                        <div className="innernav">
                            <i className='iconfont icon-yonghuguanli' />
                            <span>用户管理</span>
                        </div>
                    </Link>
                    <Link to='/m/waterControl'  className={this.state.isactive2 ? 'active' : ''} onClick={this.isactive2.bind(this)}>
                        <div className="innernav">
                            <i className='iconfont icon-yinyongshui' />
                            <span>用水管理</span> 
                        </div>
                    </Link>
                    <Link to='/m/query' className={this.state.isactive3 ? 'active' : ''} onClick={this.isactive3.bind(this)}>
                        <div className="innernav">
                            <i className='iconfont icon-chaxun' />
                            <span>数据查询</span>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

class mloyout extends React.Component {
    constructor() {
        super();
        this.clickToMActionCreator = this.clickToMActionCreator.bind(this);
        this.clickToHomeMActionCreator = this.clickToHomeMActionCreator.bind(this);
    }
    clickToMActionCreator() {
        this.props.dispatch(mAction.clickToMActionCreator());
    }
    clickToHomeMActionCreator(){
        this.props.dispatch(mAction.clickToHomeMActionCreator());
    }
    render() {
        /**底部菜单栏*/
        let props = {
            isActive : this.props.router.isActive
        }
        let nav = this.props.IsShowBottomNab ? <Appnav {...props}/> : null;
        let child = this.props.isloading ? <div className="loading"><Loading /></div> : this.props.children && React.cloneElement(
            this.props.children , {
                IsShowBottomNab : this.props.IsShowBottomNab,
                clickToMActionCreator : this.clickToMActionCreator,
                clickToHomeMActionCreator : this.clickToHomeMActionCreator
            }
        );
        return (
            <div className="Mindex">
                { child }
                { nav }
            </div>
        );
    }
}
export default connect(state => ({
    IsShowBottomNab: state.mReducer.IsShowBottomNab,
    isloading: state.mReducer.isloading, 
}))(mloyout);
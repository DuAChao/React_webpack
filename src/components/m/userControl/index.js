/**
 * Created by Administrator on 2017-04-17.
 */
import React from 'react';
import './index.scss';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loginbg1 from '../../../images/login/loginbg.png';
import Loginbg3 from '../../../images/login/loginbg3.png';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import UserInfo from '../common/userInfo';


const style = {
    margin: 0,
    width:'33.33%',
    height: '2rem',
    boxSizing:'border-box',
    boxShadow:'none'
};

class userControl extends React.Component {
    constructor() {
        super();
        this.state = {
            index : 0
        }
    }
    componentWillMount() {
        this.props.clickToHomeMActionCreator();
        
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
    render() {
        let navData = [
            { path: '/userControl/bytz' ,iconclassname : 'iconfont icon-baobiaoceshezhi', name: '表页调整' },
            { path: '/userControl/ysbg',iconclassname : 'iconfont icon-jiaohuan', name: '用水变更' },
            { path: '/userControl/zlxg',iconclassname : 'iconfont icon-xiugai', name: '资料修改' },
            { path: '/userControl/hb' ,iconclassname : 'iconfont icon-tihuan', name: '换表' },
            { path: '/userControl/tb',iconclassname : 'iconfont icon-tingzhi', name: '停表' },
            { path: '/userControl/fb',iconclassname : 'iconfont icon-kaishi', name: '复表' }
        ];
        
        return (
            <div className="container">
                <div className="toptitle" >
                    <div className="toptitleout">
                        <label className="UserInfo">
                            <UserInfo />
                        </label>
                        <span>用户管理</span>
                    </div>
                </div>
                <div className="bg" ref='index'></div>
                <div className="nav-bar">
                    <div className="nav-bar-1">
                        {
                            navData.map((nav,index)=>{
                                return   <MuiThemeProvider key={index} muiTheme={getMuiTheme()}>
                                            <RaisedButton key={index} label={
                                                <Link key={index} to={nav.path} onTouchStart={console.log(1)}>
                                                    <div className="nav-bar-2">
                                                        <i className={nav.iconclassname} />
                                                        <p>{nav.name}</p>
                                                    </div>
                                                </Link>
                                                } style={style} className='nav-bar-1-in' />
                                        </MuiThemeProvider>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default userControl;
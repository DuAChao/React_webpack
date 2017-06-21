/**
 * Created by Administrator on 2017-04-17.
 */
import React from 'react';
import './index.scss';
import Link from 'react-router/lib/Link';
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

class query extends React.Component {

    constructor() {
        super();

    }
    componentWillMount() {
        this.props.clickToHomeMActionCreator();
    }
    render() {
        let navData = [
            { path: '/query/cbls',iconclassname : 'iconfont icon-14shuibiao', name: '抄表流水' },
            { path: '/query/qfcx',iconclassname : 'iconfont icon-arrears-status', name: '欠费查询' },
            { path: '/query/bscx',iconclassname : 'iconfont icon-chaxun1', name: '补收查询' },
            { path: '/query/bccx',iconclassname : 'iconfont icon-icon', name: '补偿查询' },
            { path: '/query/jfls',iconclassname : 'iconfont icon-zizhujiaofei', name: '缴费流水' },
            { path: '/query/fpcx',iconclassname : 'iconfont icon-fapiao', name: '发票查询' },
            { path: '/query/jmcx',iconclassname : 'iconfont icon-mian', name: '减免查询' },
            { path: '/query/bgcx',iconclassname : 'iconfont icon-biangeng', name: '变更查询' }
        ];
        return (
            <div className="container">
                <div className="toptitle" >
                    <div className="toptitleout">
                        <label className="UserInfo">
                            <UserInfo />
                        </label>
                        <span>数据查询</span>
                    </div>
                </div>
                <div className="bg"></div>
                <div className="nav-bar">
                    <div className="nav-bar-1">
                        {
                            navData.map((nav,index)=>{
                                return  <MuiThemeProvider key={index} muiTheme={getMuiTheme()}>
                                            <RaisedButton key={index} label={
                                                <Link key={index} to={nav.path} >
                                                    <div className="nav-bar-2">
                                                        <i className={nav.iconclassname} />
                                                        <p>{nav.name}</p>
                                                    </div>
                                                </Link>
                                            } style={style} className='nav-bar-1-in'/>
                                    </MuiThemeProvider>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default query;
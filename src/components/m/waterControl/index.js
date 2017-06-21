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

class waterControl extends React.Component {

    constructor() {
        super();

    }
    componentWillMount() {
        this.props.clickToHomeMActionCreator();
    }
    
    render() {

        let navData = [
            { path: '/waterControl/sfbc' ,iconclassname : 'iconfont icon-zhengfuwuchangzijinzizhu', name: '水费补偿' },
            { path: '/waterControl/zdxd',iconclassname : 'iconfont icon-zhi', name: '止度修订' },
            { path: '/waterControl/sc',iconclassname : 'iconfont icon-shanchu1', name: '删除' },
            { path: '/waterControl/bssf' ,iconclassname : 'iconfont icon-shuifei', name: '补收水费' },
            { path: '/waterControl/sljm',iconclassname : 'iconfont icon-shuiliangjibie3', name: '水量减免' },
            { path: '/waterControl/sfjm',iconclassname : 'iconfont icon-shuifei1', name: '水费减免' },
            { path: '/waterControl/wyjjm' ,iconclassname : 'iconfont icon-yiweiyue', name: '违约金减免' },
            { path: '/waterControl/cblr',iconclassname : 'iconfont icon-xiugai', name: '抄表录入' }
        ];
        return (
            <div className="container">
                <div className="toptitle" >
                    <div className="toptitleout">
                        <label className="UserInfo">
                            <UserInfo />
                        </label>
                        <span>用水管理</span>
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

export default waterControl;



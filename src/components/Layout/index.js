/**
 * Created by Administrator on 2017-04-01.
 */

'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import {Menu, Icon ,Tooltip , Dropdown } from 'antd';
import './index.scss';
import Loading from '../../common/components/common/loading';
const SubMenu = Menu.SubMenu;
import UserSet from './UserSet';

class Layout extends React.Component {
    constructor() {
        super();
        let init = '';
        if(window.localStorage['initnav'] == undefined) {
            init = false;
        }else {
            init = JSON.parse(window.localStorage['initnav'])
        }
        this.state = {
            initnav : init,
            navstyle : true ,
            Toll:'',
            record: '',
            reading: '',
            tool: '',
            water: '',
            business: '',
            search:'',
            charge:'',
            statement:'',
            system:'',
            tabHover:'0',
            initactive:false
        };
        this.auto_control_nav = this.auto_control_nav.bind(this);
    }
    componentWillMount() {
        if(window.localStorage['tabHover'] == undefined){
            window.localStorage['tabHover']=JSON.stringify('0');
        }
        window.localStorage['initnav']=JSON.stringify(this.state.initnav);
    }
    auto_control_nav() {
        let _self = this;
        if(_self.state.initnav === true) {
            _self.setState({
                initnav : false,
                Toll:'',
                record: '',
                reading: '',
                tool: '',
                water: '',
                business: '',
                search:'',
                charge:'',
                statement:'',
                system:'',
            });
            window.localStorage['initnav'] = JSON.stringify(false);
        }else {
            _self.setState({
                initnav : true,
                Toll:'营业收费',
                record: '档案管理',
                reading: '抄表管理',
                tool: '工具卡片',
                water: '用水管理',
                business: '营业管理',
                search:'数据查询',
                charge:'营业报表',
                statement:'水表报表',
                system:'系统设置',
            });
            window.localStorage['initnav'] = JSON.stringify(true);
        }
    }
    NAVCLICK(e){
        let _self = this;
        let obj = e.target.getAttribute("data-top");
        // console.log(e.currentTarget);
        e.stopPropagation();
        e.preventDefault();
        _self.setState({
            tabHover:obj,
        })
        window.localStorage['tabHover']=JSON.stringify(obj);
    }

    render() {
        let AutoChangeNav = JSON.parse(window.localStorage['initnav']) ? 'right' : 'left';
        let autotips = JSON.parse(window.localStorage['initnav']) ? "点击展开" : "点击收缩";
        let {Toll,record,reading,tool,water,business,search,charge,statement,system} = this.state;
        let index_left_nav = JSON.parse(window.localStorage['initnav']) ? 'index_left_nav index_left_nav_change' : 'index_left_nav';
        

        function handleClick(e) {
            console.log('click', e);
        } 
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" style={{color:'rgba(0, 0, 0, 0.65)'}} href="http://www.alipay.com/">更改密码</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" style={{color:'rgba(0, 0, 0, 0.65)'}} href="http://www.taobao.com/">退出登录</a>
                </Menu.Item>
            </Menu>
        );

        const tabHover = JSON.parse(window.localStorage['tabHover']);
        return (
            <div className="index_cont">
                <div className={index_left_nav} ref="index_left_nav">
                    <div className="userhandle">
                        <UserSet />
                        <div className="userhandle_inner">
                            <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" getPopupContainer={() => document.getElementsByClassName('userhandle_inner')[0]}>
                                <a className="ant-dropdown-link" href="javascript:;">
                                    admin<Icon type="down"/>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    <Tooltip title='' placement="right" >
                        <div className="auto_control_nav" onClick={this.auto_control_nav.bind(this)}>
                            <Icon type={AutoChangeNav} />
                        </div> 
                    </Tooltip>
                    <div className="userAction">
                        <ul onClick={this.NAVCLICK.bind(this)}>
                            <li className="nav_li">
                                <Tooltip title={Toll} placement="right" >
                                    <Link  activeClassName="active" to="/index/toll" data-top='0'>
                                        <i className="iconfont icon-shoufei" />
                                        <span>营业收费</span>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li className="nav_li">
                                <Tooltip title={record} placement="right" >
                                    <Link  activeClassName="active" to="/index/record" data-top='50px'>
                                        <i className="iconfont icon-dangan" />
                                        <span>档案管理</span>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li className="nav_li">
                                <Tooltip title={reading} placement="right">
                                    <Link  activeClassName="active" to="/index/reading" data-top='100px'>
                                        <i className="iconfont icon-14shuibiao" />
                                        <span>抄表管理</span>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li className="nav_li">
                                <Tooltip title={tool} placement="right">
                                    <Link  activeClassName="active" to="/index/tool" data-top='150px'>
                                        <i className="iconfont icon-tool" />
                                        <span>工具卡片</span>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li className="nav_li">
                                <Tooltip title={water} placement="right">
                                    <Link  activeClassName="active" to="/index/water" data-top='200px'>
                                        <i className="iconfont icon-jnzd2" />
                                        <span>用水管理</span>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li className="nav_li">
                                <Tooltip title={business} placement="right">
                                    <Link  activeClassName="active" to="/index/business" data-top='250px'>
                                        <i className="iconfont icon-yingyebu" />
                                        <span>营业管理</span>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li className="nav_li">
                                <Tooltip title={search} placement="right">
                                    <Link  activeClassName="active" to="/index/search" data-top='300px'>
                                        <i className="iconfont icon-shujuchaxun" />
                                        <span>数据查询</span>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li className="nav_li">
                                <Tooltip title={charge} placement="right">
                                    <Link  activeClassName="active" to="/index/charge" data-top='350px'>
                                        <i className="iconfont icon-baobiao1" />
                                        <span>营业报表</span>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li className="nav_li">
                                <Tooltip title={statement} placement="right">
                                    <Link  activeClassName="active" to="/index/statement" data-top='400px'>
                                        <i className="iconfont icon-baobiao" />
                                        <span>水表报表</span>
                                    </Link>
                                </Tooltip>
                            </li>
                            <li className="nav_li">
                                <Tooltip title={system} placement="right">
                                    <Link  activeClassName="active" to="/index/system" data-top='450px'>
                                        <i className="iconfont icon-xitongshezhi" />
                                        <span>系统设置</span>
                                    </Link>
                                </Tooltip>
                            </li>
                            <div className='tab-hover' style={{top:tabHover}}></div>
                        </ul>
                    </div>
                </div>
                <div className='index_right_cont' ref="index_right_cont">
                    { 
                        this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children
                    }
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    isloading: state.mReducer.isloading
}))(Layout);
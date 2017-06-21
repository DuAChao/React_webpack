
/**
 * Created by Administrator on 2017-05-09.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';
import userImg from '../../../../images/userImg.jpg';
import {Icon} from 'antd';

const styles = {
    medium: {
        width: '100%',
        height: '100%',
        padding: 0,
        display: 'block',
    }
};

class userInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <IconButton iconClassName="icon iconfont icon-caidan" style={styles.medium} onTouchTap={this.handleToggle}/>
                </MuiThemeProvider>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <Drawer
                        docked={false}
                        width={300}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        >
                        <div className="usermes">
                            <div className="userImg">
                                <div className="userImginner">
                                    <img src={userImg} alt="用户照片"/>
                                </div>
                            </div>
                            <div className="userinfo">
                                <span>张三</span>
                            </div>
                        </div>
                        <div className='userAction'>
                            <div className='list-col-1' onTouchTap={this.handleClose}>
                                <Icon type="lock" />
                                <span>修改密码</span>
                            </div>
                            <div className='btn'>
                                <button onTouchTap={this.handleClose}>退出登录</button>
                            </div>
                        </div>
                    </Drawer>
                </MuiThemeProvider>
             </div>
        );
    }
}
export default userInfo;
{/*<MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
<MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
<MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>*/}
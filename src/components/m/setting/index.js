/**
 * Created by Administrator on 2017-04-20.
 */

import React from 'react';
import './index.scss';
import userImg from '../../../images/userImg.jpg'

class setting extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div className="container setting">
                <div className="settingcont">
                    <div className="usermes">
                        <div className="userImg">
                            <img src={userImg} alt="用户照片"/>
                        </div>
                        <div className="username">admin</div>
                    </div>
                    <div className="settingbtn clearfloat">
                        <button>
                            退出登录
                        </button>
                    </div>
                </div>
                
                
            </div>
        );
    }



}

export default setting;
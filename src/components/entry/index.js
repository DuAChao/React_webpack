/**
 * Created by Administrator on 2017-04-10.
 */

'use strict';

import React from 'react';
import './index.scss';
import LoginTop from '../../common/components/common/loginTop';
import {browserHistory} from 'react-router';
import { Icon } from 'antd';

class Entry extends React.Component {

    constructor() {
        super();
    }
    jumpentry() {
        browserHistory.push('index/Toll');
        window.localStorage['tabHover']=JSON.stringify("0");
    }

    render() {
        return (

            <div className="entry">
                <LoginTop />
                <div className="index">
                    <div className="entrycont">
                        <div className="entry_container">
                            <div className="toll_entry" onClick={this.jumpentry}>
                                <Icon type="pay-circle-o" />
                                <p>收费系统</p>
                            </div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className="loginfooter">中水云联版权所有 copyright@2017</div>
                </div>
            </div>
        );
    }
}
export default Entry;
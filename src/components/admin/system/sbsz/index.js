/**
 * Created by Administrator on 2017-04-01.
 */
'use strict';
import React from 'react';
import './index.scss';
import { Button, Icon , Tree , Tooltip , Menu , Dropdown  } from 'antd';
const TreeNode = Tree.TreeNode;
/**表格*/
import TABLE from '../../../../common/components/table'
import TREE from '../../../../common/components/tree';
import Sbxh from './sbxh';
import Sblb from './sblb';
import Sbcz from './sbcz';
import Gys from './gys';
class sbsz extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {

    }
    componentDidMount() {

    }

    //表格数据
    render() {
        return (
            <div className="index_right_cont_container">
                <div className="container_out">
                       <div className='LeftContainer'>
                        <div className='commonInner'>
                            <div className='companyTree'>
                                <div className='comIn'>
                                    <h2 className="companyName"><Icon type="home" />西充鸿源水务</h2>
                                    <div className='TreeCont'>
                                        <TREE />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='RightContainer'>
                        <div className='commonInner RightInfo'>
                            <div className='tabLine'>
                                <Sbxh />
                                <Sblb />
                                <Sbcz />
                                <Gys />
                                <Tooltip placement="top" title='搜索'>
                                    <div className='tabLine-col'>
                                        <Icon type="search" />
                                    </div>
                                </Tooltip>
                                <Tooltip placement="top" title='导出'>
                                    <div className='tabLine-col'>
                                        <Icon type="cloud-download-o" />
                                    </div>
                                </Tooltip>

                            </div>
                            <div className='commonInfo'>
                                <div className='TableContainer'>
                                    <div className='comIn'>
                                        <TABLE />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

 
export default sbsz;
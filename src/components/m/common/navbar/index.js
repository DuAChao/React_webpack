/**
 * Created by Administrator on 2017-05-05.
 */

import React from 'react';
import './index.scss';
import Link from 'react-router/lib/Link';


let navData = [
    {require:'./components/m/userControl', path: '/m/userControl' ,iconclassname : 'iconfont icon-yonghuguanli', name: '用户管理',title:'userControl'},
    {require:'./components/m/waterControl', path: '/m/waterControl',iconclassname : 'iconfont icon-yinyongshui', name: '用水管理',title:'waterControl'},
    {require:'./components/m/query', path: '/m/query',iconclassname : 'iconfont icon-chaxun', name: '数据查询',title:'query' },
    {require:'./components/m/setting', path: '/m/setting',iconclassname : 'iconfont icon-xitongshezhi', name: '设置',title:'setting' }
];

class Appnav extends React.Component {
    constructor() {
        super();
    }
    render() {

        return (
            <div className="MnavBtn">
                <div className="MnavBtnin">
                    {
                        navData.map((element,index)=>{
                            return  <Link key={index}
                                          data-reactid={'1'+index}
                                          to={element.path}
                                          activeClassName="active"
                            >
                                <div className="innernav">
                                    <i className={element.iconclassname} />
                                    <span>{element.name}</span>
                                </div>
                            </Link>


                        })
                    }
                </div>
            </div>
        );
    }
}
export default Appnav;
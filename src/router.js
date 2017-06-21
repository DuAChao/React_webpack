/**
 * Created by Administrator on 2017-02-14.
 */
'use strict';

/**解决移动端300毫秒延迟*/
import FastClick from 'fastclick';
FastClick.attach(document.body);

import React from 'react';
import {render} from 'react-dom';
import {Redirect , Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import LoginContainer from './components/login';
import entryContainer from './components/entry';
import Layout from './components/Layout';
import mLayout from './components/m';
import './common/css/common.scss';
import {connect} from 'react-redux';
import * as mAction from './actions/m';
import userControl from './components/m/userControl';
import NoMatch from './common/components/common/NoMatch';
import tollContainer from './components/admin/toll';
//  const tollContainer = (location, cb) => {
//             require.ensure([], require => {
//                 cb(null, require('./components/admin/toll').default)
//             },'toll')
//         };

/**
 * 按需加载*
 * es5 写法 require 后面不用加‘.default’
 * es6 写法 require 后面加‘.default’
 * 不然就加载不了
 * */
class AppContainer extends React.Component {
    constructor() {
        super();
        this.nowIsLoadingActionCreator = this.nowIsLoadingActionCreator.bind(this);
        this.nowIsStopLoadingActionCreator = this.nowIsStopLoadingActionCreator.bind(this);
    }

    nowIsLoadingActionCreator() {
        this.props.dispatch(mAction.nowIsLoadingActionCreator());
    }
    nowIsStopLoadingActionCreator() {
        this.props.dispatch(mAction.nowIsStopLoadingActionCreator());
    }
    render() {
        const RecordContainer = (location, cb) => {
            require.ensure([], require => {
                cb(null, require('./components/admin/record').default)
            },'Record')
        };
        const statementContainer = (location, cb) => {
            require.ensure([], require => {
                // 在后面加 .default
                cb(null, require('./components/admin/statement').default)
            },'statement')
        };
       
        const toolContainer = (location, cb) => {
            require.ensure([], require => {
                cb(null, require('./components/admin/tool').default)
            },'tool')
        };
        const waterContainer = (location, cb) => {
            require.ensure([], require => {
                cb(null, require('./components/admin/water').default)
            },'water')
        };
        const systemContainer = (location, cb) => {
            require.ensure([], require => {
                cb(null, require('./components/admin/system').default)
            },'system')
        };
        const businessContainer = (location, cb) => {
            require.ensure([], require => {
                cb(null, require('./components/admin/business').default)
            },'business')
        };
        const chargeContainer = (location, cb) => {
            require.ensure([], require => {
                cb(null, require('./components/admin/charge').default)
            },'charge')
        };
        const readingContainer = (location, cb) => {
            require.ensure([], require => {
                cb(null, require('./components/admin/reading').default)
            },'reading')
        };
        const searchContainer = (location, cb ) => {
            require.ensure([], require => {
                cb(null, require('./components/admin/search').default)
            },'search')
        };



        /**营业收费*/
        const PBSF = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/toll/pbsf').default);
                this.nowIsStopLoadingActionCreator();
            },'PBSF')
        };
        const KBCZ = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/toll/kbcz').default)
                this.nowIsStopLoadingActionCreator();
            },'KBCZ')
        };
        const SFTJ = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/toll/sftj').default)
                this.nowIsStopLoadingActionCreator();
            },'SFTJ')
        };
        const SFJL = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/toll/sfjl').default)
                this.nowIsStopLoadingActionCreator();
            },'SFJL')
        };
        const YCJL = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/toll/ycjl').default)
                this.nowIsStopLoadingActionCreator();
            },'YCJL')
        };
        /**用户档案*/
        const YHDA = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/Record/yhda').default)
                this.nowIsStopLoadingActionCreator();
            },'YHDA')
        };
        const yhbg = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/Record/yhbg').default)
                this.nowIsStopLoadingActionCreator();
            },'yhbg')
        };
        const yhtj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/Record/yhtj').default)
                this.nowIsStopLoadingActionCreator();
            },'yhtj')
        };
        /**抄表管理*/
        const rgcb = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/reading/rgcb').default)
                this.nowIsStopLoadingActionCreator();
            },'rgcb')
        };
        const yccb = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/reading/yccb').default)
                this.nowIsStopLoadingActionCreator();
            },'yccb')
        };
        const zddr = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/reading/zddr').default)
                this.nowIsStopLoadingActionCreator();
            },'zddr')
        };
        const cbdc = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/reading/cbdc').default)
                this.nowIsStopLoadingActionCreator();
            },'cbdc')
        };
        const bcgl = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/reading/bcgl').default)
                this.nowIsStopLoadingActionCreator();
            },'bcgl')
        };
        const zblr = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/reading/zblr').default)
                this.nowIsStopLoadingActionCreator();
            },'zblr')
        };
        /**工具卡片*/
        const GNK = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/tool/gnk').default)
                this.nowIsStopLoadingActionCreator();
            },'GNK')
        };
        const yhk = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/tool/yhk').default)
                this.nowIsStopLoadingActionCreator();
            },'yhk')
        };
        const hck = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/tool/hck').default)
                this.nowIsStopLoadingActionCreator();
            },'hck')
        };
        const csk = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/tool/csk').default)
                this.nowIsStopLoadingActionCreator();
            },'csk')
        };
        const hbk = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/tool/hbk').default)
                this.nowIsStopLoadingActionCreator();
            },'hbk')
        };
        const cbk = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/tool/cbk').default)
                this.nowIsStopLoadingActionCreator();
            },'cbk')
        };

        /**用水管理*/

        const zdsh = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/water/zdsh').default)
                this.nowIsStopLoadingActionCreator();
            },'zdsh')
        };
        const ysjm = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/water/ysjm').default)
                this.nowIsStopLoadingActionCreator();
            },'ysjm')
        };
        const yysl = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/water/yysl').default)
                this.nowIsStopLoadingActionCreator();
            },'yysl')
        };
        const qfyh = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/water/qfyh').default)
                this.nowIsStopLoadingActionCreator();
            },'qfyh')
        };
        const jels = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/water/jels').default)
                this.nowIsStopLoadingActionCreator();
            },'jels')
        };
        const pcbls = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/water/cbls').default)
                this.nowIsStopLoadingActionCreator();
            },'pcbls')
        };
        const lcfx = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/water/lcfx').default)
                this.nowIsStopLoadingActionCreator();
            },'lcfx')
        };
        const ysdt = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/water/ysdt').default)
                this.nowIsStopLoadingActionCreator();
            },'ysdt')
        };

        /**营业管理*/
        const yyxj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/business/yyxj').default)
                this.nowIsStopLoadingActionCreator();
            },'yyxj')
        };
        const fply = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/business/fply').default)
                this.nowIsStopLoadingActionCreator();
            },'fply')
        };

        const yyjp = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/business/yyjp').default)
                this.nowIsStopLoadingActionCreator();
            },'yyjp')
        };
        const zzsp = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/business/zzsp').default)
                this.nowIsStopLoadingActionCreator();
            },'zzsp')
        };
        const dxfs = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/business/dxfs').default)
                this.nowIsStopLoadingActionCreator();
            },'dxfs')
        };
        /**数据查询*/
        const jfcx = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/search/jfcx').default)
                this.nowIsStopLoadingActionCreator();
            },'jfcx')
        };
        const yccx = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/search/yccx').default)
                this.nowIsStopLoadingActionCreator();
            },'yccx')
        };

        const fpcx = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/search/fpcx').default)
                this.nowIsStopLoadingActionCreator();
            },'fpcx')
        };
        const kfcx = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/search/kfcx').default)
                this.nowIsStopLoadingActionCreator();
            },'kfcx')
        };
        const bscx = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/search/bscx').default)
                this.nowIsStopLoadingActionCreator();
            },'bscx')
        };
        const dscx = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/search/dscx').default)
                this.nowIsStopLoadingActionCreator();
            },'dscx')
        };
        const bgcx = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/search/bgcx').default)
                this.nowIsStopLoadingActionCreator();
            },'bgcx')
        };
        const jmcx = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/search/jmcx').default)
                this.nowIsStopLoadingActionCreator();
            },'jmcx')
        };
        const bccx = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/search/bccx').default)
                this.nowIsStopLoadingActionCreator();
            },'bccx')
        };
        /**营业报表*/
        const yysftj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/charge/yysftj').default)
                this.nowIsStopLoadingActionCreator();
            },'yysftj')
        };
        const yckftj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/charge/yckftj').default)
                this.nowIsStopLoadingActionCreator();
            },'yckftj')
        };
        const yslxtj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/charge/yslxtj').default)
                this.nowIsStopLoadingActionCreator();
            },'yslxtj')
        };
        const ysfytj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/charge/ysfytj').default)
                this.nowIsStopLoadingActionCreator();
            },'ysfytj')
        };
        const qftj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/charge/qftj').default)
                this.nowIsStopLoadingActionCreator();
            },'qftj')
        };
        const hsltj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/charge/hsltj').default)
                this.nowIsStopLoadingActionCreator();
            },'hsltj')
        };
        const fyjmtj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/charge/fyjmtj').default)
                this.nowIsStopLoadingActionCreator();
            },'fyjmtj')
        };
        const yyzftj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/charge/yyzftj').default)
                this.nowIsStopLoadingActionCreator();
            },'yyzftj')
        };
        const yylptj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/charge/yylptj').default)
                this.nowIsStopLoadingActionCreator();
            },'yylptj')
        };


        /**水表报表*/
        const cbfbtj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/statement/cbfbtj').default)
                this.nowIsStopLoadingActionCreator();
            },'cbfbtj')
        };
        const cbltj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/statement/cbltj').default)
                this.nowIsStopLoadingActionCreator();
            },'cbltj')
        };
        const ssltj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/statement/ssltj').default)
                this.nowIsStopLoadingActionCreator();
            },'cbltj')
        };
        const xzyhtj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/statement/xzyhtj').default)
                this.nowIsStopLoadingActionCreator();
            },'cbltj')
        };
        const ysfbtj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/statement/ysfbtj').default)
                this.nowIsStopLoadingActionCreator();
            },'cbltj')
        };
        const jtfbtj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/statement/jtfbtj').default)
                this.nowIsStopLoadingActionCreator();
            },'cbltj')
        };
        const sblxtj = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/statement/sblxtj').default)
                this.nowIsStopLoadingActionCreator();
            },'cbltj')
        };

        /**系统设置*/
        const bmsz = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/system/bmsz').default)
                this.nowIsStopLoadingActionCreator();
            },'bmsz')
        };
        const czysz = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/system/czysz').default)
                this.nowIsStopLoadingActionCreator();
            },'czysz')
        };
        const sbsz = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/system/sbsz').default)
                this.nowIsStopLoadingActionCreator();
            },'sbsz')
        };
        const ycsz = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/system/ycsz').default)
                this.nowIsStopLoadingActionCreator();
            },'ycsz')
        };
        const sjsz = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/system/sjsz').default)
                this.nowIsStopLoadingActionCreator();
            },'sjsz')
        };
        const qtsz = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/system/qtsz').default)
                this.nowIsStopLoadingActionCreator();
            },'qtsz')
        };
        const bdsz = (location, cb) => {
            this.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/admin/system/bdsz').default)
                this.nowIsStopLoadingActionCreator();
            },'bdsz')
        };
        
        /**************移动端**************/
        let _self = this;
        const bytz = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/userControl/bytz').default);
                _self.nowIsStopLoadingActionCreator();
            },'bytz')
        };
        const ysbg = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/userControl/ysbg').default);
                _self.nowIsStopLoadingActionCreator();
            },'ysbg')
        };
        const zlxg = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/userControl/zlxg').default);
                _self.nowIsStopLoadingActionCreator();
            },'zlxg')
        };
        const hb = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/userControl/hb').default);
                _self.nowIsStopLoadingActionCreator();
            },'hb')
        };
        const tb = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/userControl/tb').default);
                _self.nowIsStopLoadingActionCreator();
            },'tb')
        };
        const fb = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/userControl/fb').default);
                _self.nowIsStopLoadingActionCreator();
            },'fb')
        };

        const waterControl = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/waterControl').default);
                _self.nowIsStopLoadingActionCreator();
            },'waterControl')
        };
        const sc = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/waterControl/sc').default);
                _self.nowIsStopLoadingActionCreator();
            },'sc')
        };
        const zdxd = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/waterControl/zdxd').default);
                _self.nowIsStopLoadingActionCreator();
            },'zdxd')
        };
        const sljm = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/waterControl/sljm').default);
                _self.nowIsStopLoadingActionCreator();
            },'sljm')
        };
        const sfjm = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/waterControl/sfjm').default);
                _self.nowIsStopLoadingActionCreator();
            },'sfjm')
        };
        const wyjjm = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/waterControl/wyjjm').default);
                _self.nowIsStopLoadingActionCreator();
            },'wyjjm')
        };
        const sfbc = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/waterControl/sfbc').default);
                _self.nowIsStopLoadingActionCreator();
            },'sfbc')
        };
        const bssf = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/waterControl/bssf').default);
                _self.nowIsStopLoadingActionCreator();
            },'bssf')
        };
        const cblr = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/waterControl/cblr').default);
                _self.nowIsStopLoadingActionCreator();
            },'cblr')
        };
        const query = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/query').default);
                _self.nowIsStopLoadingActionCreator();
            },'query')
        };
        const cbls = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/query/cbls').default);
                _self.nowIsStopLoadingActionCreator();
            },'cbls')
        };

        const setting = (location, cb) => {
            _self.nowIsLoadingActionCreator();
            require.ensure([], require => {
                cb(null, require('./components/m/setting').default);
                _self.nowIsStopLoadingActionCreator();
            },'setting')
        };

        let getComponentdata = [
            {getComponent:bytz,path:'/userControl/bytz'},
            {getComponent:ysbg,path:'/userControl/ysbg'},
            {getComponent:zlxg,path:'/userControl/zlxg'},
            {getComponent:hb,path:'/userControl/hb'},
            {getComponent:tb,path:'/userControl/tb'},
            {getComponent:fb,path:'/userControl/fb'},
            {getComponent:waterControl,path:'waterControl'},
            {getComponent:sc,path:'/waterControl/sc'},
            {getComponent:zdxd,path:'/waterControl/zdxd'},
            {getComponent:sljm,path:'/waterControl/sljm'},
            {getComponent:sfjm,path:'/waterControl/sfjm'},
            {getComponent:wyjjm,path:'/waterControl/wyjjm'},
            {getComponent:sfbc,path:'/waterControl/sfbc'},
            {getComponent:bssf,path:'/waterControl/bssf'},
            {getComponent:cblr,path:'/waterControl/cblr'},
            {getComponent:query,path:'query'},
            {getComponent:cbls,path:'/query/cbls'},
            {getComponent:setting,path:'setting'}
        ];
 
        return (
            <Router history={browserHistory}>
                <Route path="/" component={LoginContainer} />
                <Route path="entry" component={entryContainer} />
                <Route path="index" component={Layout}>
                    <IndexRoute component={tollContainer} />
                    {/*营业收费*/}
                    <Route path="toll" component={tollContainer}>
                        <Route path="/index/toll/pbsf" getComponent={PBSF}/>
                        <Route path="/index/toll/kbcz" getComponent={KBCZ}/>
                        <Route path="/index/toll/sftj" getComponent={SFTJ}/>
                        <Route path="/index/toll/sfjl" getComponent={SFJL}/>
                        <Route path="/index/toll/ycjl" getComponent={YCJL}/>
                    </Route>
                    {/*档案管理*/}
                    <Route path="Record" getComponent={RecordContainer}>
                        <Route path="/index/Record/yhda" getComponent={YHDA}/>
                        <Route path="/index/Record/yhbg" getComponent={yhbg}/>
                        <Route path="/index/Record/yhtj" getComponent={yhtj}/>
                    </Route>
                    {/*水表报表*/}
                    <Route path="statement" getComponent={statementContainer}>
                        <Route path="/index/statement/cbfbtj" getComponent={cbfbtj}/>
                        <Route path="/index/statement/cbltj" getComponent={cbltj}/>
                        <Route path="/index/statement/ssltj" getComponent={ssltj}/>
                        <Route path="/index/statement/xzyhtj" getComponent={xzyhtj}/>
                        <Route path="/index/statement/ysfbtj" getComponent={ysfbtj}/>
                        <Route path="/index/statement/jtfbtj" getComponent={jtfbtj}/>
                        <Route path="/index/statement/sblxtj" getComponent={sblxtj}/>
                    </Route>
                    
                    {/*工具卡片*/}
                    <Route path="tool" getComponent={toolContainer}>
                        <Route path="/index/tool/gnk" getComponent={GNK}/>
                        <Route path="/index/tool/yhk" getComponent={yhk}/>
                        <Route path="/index/tool/hck" getComponent={hck}/>
                        <Route path="/index/tool/csk" getComponent={csk}/>
                        <Route path="/index/tool/hbk" getComponent={hbk}/>
                        <Route path="/index/tool/cbk" getComponent={cbk}/>
                    </Route>
                    {/*用水管理*/}
                    <Route path="water" getComponent={waterContainer}>
                        <Route path="/index/water/zdsh" getComponent={zdsh}/>
                        <Route path="/index/water/ysjm" getComponent={ysjm}/>
                        <Route path="/index/water/yysl" getComponent={yysl}/>
                        <Route path="/index/water/qfyh" getComponent={qfyh}/>
                        <Route path="/index/water/jels" getComponent={jels}/>
                        <Route path="/index/water/cbls" getComponent={pcbls}/>
                        <Route path="/index/water/lcfx" getComponent={lcfx}/>
                        <Route path="/index/water/lcfx" getComponent={lcfx}/>
                        <Route path="/index/water/ysdt" getComponent={ysdt}/>
                    </Route>
                    {/*系统设置*/}
                    <Route path="system" getComponent={systemContainer}>
                        <Route path="/index/system/bmsz" getComponent={bmsz}/>
                        <Route path="/index/system/czysz" getComponent={czysz}/>
                        <Route path="/index/system/sbsz" getComponent={sbsz}/>
                        <Route path="/index/system/ycsz" getComponent={ycsz}/>
                        <Route path="/index/system/sjsz" getComponent={sjsz}/>
                        <Route path="/index/system/qtsz" getComponent={qtsz}/>
                        <Route path="/index/system/bdsz" getComponent={bdsz}/>
                    </Route>
                    {/*营业管理*/}
                    <Route path="business" getComponent={businessContainer}>
                        <Route path="/index/business/yyxj" getComponent={yyxj}/>
                        <Route path="/index/business/fply" getComponent={fply}/>
                        <Route path="/index/business/yyjp" getComponent={yyjp}/>
                        <Route path="/index/business/zzsp" getComponent={zzsp}/>
                        <Route path="/index/business/dxfs" getComponent={dxfs}/>
                    </Route>
                    {/*营业报表*/}
                    <Route path="charge" getComponent={chargeContainer}>
                        <Route path="/index/charge/yysftj" getComponent={yysftj}/> 
                        <Route path="/index/charge/yckftj" getComponent={yckftj}/>
                        <Route path="/index/charge/yslxtj" getComponent={yslxtj}/>
                        <Route path="/index/charge/ysfytj" getComponent={ysfytj}/>
                        <Route path="/index/charge/qftj" getComponent={qftj}/>
                        <Route path="/index/charge/hsltj" getComponent={hsltj}/>
                        <Route path="/index/charge/fyjmtj" getComponent={fyjmtj}/>
                        <Route path="/index/charge/yyzftj" getComponent={yyzftj}/>
                        <Route path="/index/charge/yylptj" getComponent={yylptj}/>
                    </Route>
                    {/*抄表管理*/}
                    <Route path="reading" getComponent={readingContainer}>
                        <Route path="/index/reading/rgcb" getComponent={rgcb}/>
                        <Route path="/index/reading/yccb" getComponent={yccb}/>
                        <Route path="/index/reading/zddr" getComponent={zddr}/>
                        <Route path="/index/reading/zddr" getComponent={zddr}/>
                        <Route path="/index/reading/cbdc" getComponent={cbdc}/>
                        <Route path="/index/reading/bcgl" getComponent={bcgl}/>
                        <Route path="/index/reading/zblr" getComponent={zblr}/>
                    </Route>
                    {/*数据查询*/}
                    <Route path="search" getComponent={searchContainer} >
                        <Route path="/index/search/jfcx" getComponent={jfcx}/>
                        <Route path="/index/search/yccx" getComponent={yccx}/>
                        <Route path="/index/search/fpcx" getComponent={fpcx}/>
                        <Route path="/index/search/kfcx" getComponent={kfcx}/>
                        <Route path="/index/search/bscx" getComponent={bscx}/>
                        <Route path="/index/search/dscx" getComponent={dscx}/>
                        <Route path="/index/search/bgcx" getComponent={bgcx}/>
                        <Route path="/index/search/jmcx" getComponent={jmcx}/>
                        <Route path="/index/search/bccx" getComponent={bccx}/>
                    </Route>
                </Route>
                <Route path="m" component={mLayout} >
                    <IndexRoute component={userControl} />
                    <Route  path="userControl" component={userControl} />
                    {
                        getComponentdata.map((ele,i)=>{
                            return <Route key={"m"+i} path={ele.path}
                                          getComponent={ ele.getComponent }
                            />
                        })
                    }
                </Route>
                <Route path='/404' component={NoMatch} />
                {/* 其他重定向到 404 */}
                <Redirect from='*' to='/404' />
            </Router>
        )
        
    }
}

export default connect(state => ({
    isloading: state.mReducer.isloading
}))(AppContainer);


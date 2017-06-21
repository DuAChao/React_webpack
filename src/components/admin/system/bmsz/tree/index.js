/**
 * Created by Administrator on 2017-04-13.
 */
import React from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

class tree extends React.Component {

    constructor() {
        super();
    }

    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    }
    
    render() {
        const loop = data => data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode key={item.key} title={item.key} disableCheckbox={item.key === '0-0-0'}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={item.key} />;
        });
        /**默认选中*/
        // defaultExpandedKeys={['0-0-0', '0-0-1']}
        // defaultSelectedKeys={['0-0-0', '0-0-1']}
        // defaultCheckedKeys={['0-0-0', '0-0-1']}
        return (
            <Tree
                checkable
                onSelect={this.onSelect}
                onCheck={this.onCheck}
            >
                <TreeNode title="营业收费" key="0-0">
                    <TreeNode title="综合收费" key="0-0-0" >
                        <TreeNode title="收费" key="0-0-0-0" />
                        <TreeNode title="预存" key="0-0-0-1" />
                        <TreeNode title="设置" key="0-0-0-2" />
                        <TreeNode title="补打" key="0-0-0-3" />
                        <TreeNode title="作废" key="0-0-0-4" />
                        <TreeNode title="替打" key="0-0-0-5" />
                        <TreeNode title="跳票" key="0-0-0-6" />
                        <TreeNode title="补票" key="0-0-0-7" />
                        <TreeNode title="变更手机号" key="0-0-0-8" />
                        <TreeNode title="IC卡绑定" key="0-0-0-9" />
                    </TreeNode>
                    <TreeNode title="收费统计" key="0-0-1" />
                    <TreeNode title="收费记录" key="0-0-2" />
                    <TreeNode title="预存记录" key="0-0-3" />
                </TreeNode>
                <TreeNode title="档案管理" key="0-1">
                    <TreeNode title="用户档案" key="0-1-0" >
                        <TreeNode title="添加用户" key="0-1-0-0" />
                        <TreeNode title="编辑用户" key="0-1-0-1" />
                        <TreeNode title="删除用户" key="0-1-0-2" />
                        <TreeNode title="导入用户" key="0-1-0-3" />
                        <TreeNode title="导出用户" key="0-1-0-4" />
                        <TreeNode title="打印用户卡" key="0-1-0-5" />
                    </TreeNode>
                    <TreeNode title="用户变更" key="0-1-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>开户</span>} key="0-1-1-0" />
                        <TreeNode title={<span style={{ color: '#08c' }}>补卡</span>} key="0-1-1-1" />
                        <TreeNode title={<span style={{ color: '#08c' }}>停表申请</span>} key="0-1-1-2" />
                        <TreeNode title={<span style={{ color: '#08c' }}>停表审核</span>} key="0-1-1-3" />
                        <TreeNode title={<span style={{ color: '#08c' }}>过户申请</span>} key="0-1-1-4" />
                        <TreeNode title={<span style={{ color: '#08c' }}>过户审核</span>} key="0-1-1-5" />
                        <TreeNode title={<span style={{ color: '#08c' }}>复表</span>} key="0-1-1-6" />
                        <TreeNode title={<span style={{ color: '#08c' }}>换表</span>} key="0-1-1-7" />
                        <TreeNode title={<span style={{ color: '#08c' }}>类型变更申请</span>} key="0-1-1-8" />
                        <TreeNode title={<span style={{ color: '#08c' }}>类型变更审核</span>} key="0-1-1-9" />
                    </TreeNode>
                    <TreeNode title="用户统计" key="0-1-2">
                        <TreeNode title={<span style={{ color: '#08c' }}>导出</span>} key="0-1-2-0" />
                    </TreeNode>
                </TreeNode>
                <TreeNode title="抄表管理" key="0-2">
                    <TreeNode title="人工抄表" key="0-2-0" >
                        <TreeNode title="抄表录入" key="0-2-0-0" />
                        <TreeNode title="导出数据" key="0-2-0-1" />
                        <TreeNode title="抄表删除" key="0-2-0-2" />
                    </TreeNode>
                    <TreeNode title="远传抄表" key="0-2-1" />
                    <TreeNode title="止度导入" key="0-2-2" />
                    <TreeNode title="抄表导出" key="0-2-3">
                        <TreeNode title={<span style={{ color: '#08c' }}>打印抄表本</span>} key="0-2-3-0" />
                        <TreeNode title={<span style={{ color: '#08c' }}>下发数据</span>} key="0-2-3-1" />
                        <TreeNode title={<span style={{ color: '#08c' }}>表页调整</span>} key="0-2-3-2" />
                        <TreeNode title={<span style={{ color: '#08c' }}>用户迁移</span>} key="0-2-3-3" />
                    </TreeNode>
                    <TreeNode title="表册管理" key="0-2-4">
                        <TreeNode title={<span style={{ color: '#08c' }}>新增区域</span>} key="0-2-4-0" />
                        <TreeNode title={<span style={{ color: '#08c' }}>修改区域</span>} key="0-2-4-1" />
                        <TreeNode title={<span style={{ color: '#08c' }}>删除区域</span>} key="0-2-4-2" />
                        <TreeNode title={<span style={{ color: '#08c' }}>路线调整</span>} key="0-2-4-3" />
                        <TreeNode title={<span style={{ color: '#08c' }}>管理调整</span>} key="0-2-4-4" />
                    </TreeNode>
                    <TreeNode title="总表录入" key="0-2-5">
                        <TreeNode title={<span style={{ color: '#08c' }}>新增总表</span>} key="0-2-5-0" />
                        <TreeNode title={<span style={{ color: '#08c' }}>编辑总表</span>} key="0-2-5-1" />
                        <TreeNode title={<span style={{ color: '#08c' }}>删除总表</span>} key="0-2-5-2" />
                        <TreeNode title={<span style={{ color: '#08c' }}>总表录入</span>} key="0-2-5-3" />
                        <TreeNode title={<span style={{ color: '#08c' }}>总表导出</span>} key="0-2-5-4" />
                    </TreeNode>

                </TreeNode>
                <TreeNode title="用水管理" key="0-3">
                    <TreeNode title="止度审核" key="0-3-0" >
                        <TreeNode title="撤销" key="0-3-0-0" />
                        <TreeNode title="修订" key="0-3-0-1" />
                        <TreeNode title="审核" key="0-3-0-2" />
                    </TreeNode>
                    <TreeNode title="用水减免" key="0-3-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>删除数据</span>} key="0-3-1-0" />
                        <TreeNode title={<span style={{ color: '#08c' }}>抄表重审</span>} key="0-3-1-1" />
                        <TreeNode title={<span style={{ color: '#08c' }}>阶梯持平</span>} key="0-3-1-2" />
                        <TreeNode title={<span style={{ color: '#08c' }}>阶梯调配</span>} key="0-3-1-3" />
                        <TreeNode title={<span style={{ color: '#08c' }}>减免水量</span>} key="0-3-1-4" />
                        <TreeNode title={<span style={{ color: '#08c' }}>减免水费</span>} key="0-3-1-5" />
                        <TreeNode title={<span style={{ color: '#08c' }}>减免违约金</span>} key="0-3-1-6" />
                        <TreeNode title={<span style={{ color: '#08c' }}>水费补偿</span>} key="0-3-1-7" />
                    </TreeNode>
                    <TreeNode title="月用水量" key="0-3-2" />
                    <TreeNode title="欠费用户" key="0-3-3" />
                    <TreeNode title="金额流水" key="0-3-4" />
                    <TreeNode title="抄表流水" key="0-3-5" />
                    <TreeNode title="漏抄分析" key="0-3-6" />
                    <TreeNode title="用水动态" key="0-3-7" />
                    <TreeNode title="补收水费申请" key="0-3-8" />
                    <TreeNode title="补收水费审核" key="0-3-9" />
                </TreeNode>
                <TreeNode title="营业管理" key="0-4">
                    <TreeNode title="营业小计" key="0-4-0" />
                    <TreeNode title="发票领用" key="0-4-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-0-1-0" />
                    </TreeNode>
                    <TreeNode title="营业交票" key="0-4-2" />
                    <TreeNode title="增值税票" key="0-4-3" />
                    <TreeNode title="短信发送" key="0-4-4" />
                </TreeNode>
                <TreeNode title="数据查询" key="0-5">
                    <TreeNode title="缴费查询" key="0-5-0" />
                    <TreeNode title="预存查询" key="0-5-1" />
                    <TreeNode title="发票查询" key="0-5-2" />
                    <TreeNode title="扣费查询" key="0-5-3" />
                    <TreeNode title="补收查询" key="0-5-4" />
                    <TreeNode title="代收查询" key="0-5-5" />
                    <TreeNode title="变更查询" key="0-5-6" />
                    <TreeNode title="减免查询" key="0-5-7" />
                    <TreeNode title="补偿查询" key="0-5-8" />
                </TreeNode>
                <TreeNode title="营业报表" key="0-6">
                    <TreeNode title="营业收费统计" key="0-6-0" />
                    <TreeNode title="预存扣费统计" key="0-6-1" />
                    <TreeNode title="用水类型统计" key="0-6-2" />
                    <TreeNode title="应收费用统计" key="0-6-3" />
                    <TreeNode title="欠费统计" key="0-6-4" />
                    <TreeNode title="回收率统计" key="0-6-5" />
                    <TreeNode title="费用减免统计" key="0-6-6" />
                    <TreeNode title="营业作废统计" key="0-6-7" />
                    <TreeNode title="营业领票统计" key="0-6-8" />
                </TreeNode>
                <TreeNode title="水表报表" key="0-7">
                    <TreeNode title="抄表分布统计" key="0-7-0" />
                    <TreeNode title="抄表率统计" key="0-7-1" />
                    <TreeNode title="水损统计" key="0-7-2" />
                    <TreeNode title="新增用户统计" key="0-7-3" />
                    <TreeNode title="用水分布统计" key="0-7-4" />
                    <TreeNode title="阶梯分布统计" key="0-7-5" />
                    <TreeNode title="水表类型统计" key="0-7-6" />
                </TreeNode>
                <TreeNode title="决策分析" key="0-8">
                    <TreeNode title="营业分析" key="0-8-0" />
                    <TreeNode title="抄表率分析" key="0-8-1" />
                    <TreeNode title="回收率分析" key="0-8-2" />
                    <TreeNode title="用户综合分析" key="0-8-3" />
                </TreeNode>
                <TreeNode title="工具卡片" key="0-9" />
                <TreeNode title="系统设置" key="0-10">
                    <TreeNode title="部门设置" key="0-10-0" />
                    <TreeNode title="操作员设置" key="0-10-1" />
                    <TreeNode title="水表设置" key="0-10-2" />
                    <TreeNode title="远传设置" key="0-10-3" />
                    <TreeNode title="水价设置" key="0-10-4" />
                    <TreeNode title="其他设置" key="0-10-5" />
                </TreeNode>
            </Tree>
        )
    }
}

export default tree;
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
                <TreeNode title="财务部" key="0-0">
                    <TreeNode title="A组" key="0-0-0" >
                        <TreeNode title="李大炮" key="0-0-0-0" />
                        <TreeNode title="李二炮" key="0-0-0-1" />
                        <TreeNode title="李二炮" key="0-0-0-2" />
                        <TreeNode title="李二炮" key="0-0-0-3" />
                        <TreeNode title="李二炮" key="0-0-0-4" />
                        <TreeNode title="李二炮" key="0-0-0-5" />
                        <TreeNode title="李二炮" key="0-0-0-6" />
                        <TreeNode title="李二炮" key="0-0-0-7" />
                        <TreeNode title="李二炮" key="0-0-0-8" />
                        <TreeNode title="李二炮" key="0-0-0-9" />
                        <TreeNode title="李二炮" key="0-0-0-10" />
                        <TreeNode title="李二炮" key="0-0-0-11" />
                        <TreeNode title="李二炮" key="0-0-0-12" />
                        <TreeNode title="李二炮" key="0-0-0-13" />
                    </TreeNode>
                    <TreeNode title="B组" key="0-0-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-0-1-0" />
                    </TreeNode>
                </TreeNode>
                <TreeNode title="销售部" key="0-1">
                    <TreeNode title="A组" key="0-1-0" >
                        <TreeNode title="李大炮" key="0-1-0-0" />
                        <TreeNode title="李二炮" key="0-1-0-1" />
                    </TreeNode>
                    <TreeNode title="B组" key="0-1-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-1-1-0" />
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-1-1-1" />
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-1-1-2" />
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-1-1-3" />
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-1-1-4" />
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-1-1-5" />
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-1-1-6" />
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-1-1-7" />
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-1-1-8" />
                        <TreeNode title={<span style={{ color: '#08c' }}>李三炮</span>} key="0-1-1-9" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        )
    }
}

export default tree;
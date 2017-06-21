import React from 'react';
import './index.scss';
import { Button, Input , Select ,Modal , Tooltip} from 'antd';
class gys extends React.Component {
    constructor() {
        super();
        this.state = {
            Loading: false,
            visible: false,
        }
    }

    showModal() {
        this.setState({
            visible: true,
        });
    }
    handleOk() {
        this.setState({ Loading: true });
        setTimeout(() => {
            this.setState({ Loading: false, visible: false });
        }, 3000);
    }
    handleCancel() {
        this.setState({ visible: false }); 
    } 
    render() {
        function handleChange(value) {
            console.log(`selected ${value}`);
        } 
        return (
            <Tooltip placement="top" title='新增供应商'>
                <div className='tabLine-col' onClick={this.showModal.bind(this)}>
                    <i className="iconfont icon-gongyingshang" />
                    <Modal 
                        visible={this.state.visible}
                        title="新增供应商"
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}
                        width='600px'
                        wrapClassName="gysCont"
                        footer={[ 
                            <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                            <Button key="submit" type="primary" size="large" loading={this.state.Loading} onClick={this.handleOk.bind(this)}>
                                新增
                            </Button>
                            ]}   
                    >
                        <div className="WaterTypeList">
                            <table>
                                <thead>
                                    <tr>
                                        <th>公司名称</th>
                                        <th>公司编码</th>
                                        <th>售后人员</th>
                                        <th>售后电话</th>
                                        <th className="last">操作1</th>
                                        <th className="last">操作2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>三川</td>
                                        <td>铜壳</td>
                                        <td>铜壳</td>
                                        <td>铜壳</td>
                                        <td className="last">删除</td>
                                        <td className="last">修改</td>
                                    </tr>
                                    <tr>
                                        <td>三川</td>
                                        <td>铜壳</td>
                                        <td>铜壳</td>
                                        <td>铜壳</td>
                                        <td className="last">删除</td>
                                        <td className="last">修改</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className="form-col-ipt">
                            <div className="title">
                                公司名称:
                            </div>
                            <div className="ipt">
                                <Input size="large" placeholder="请输入公司名称" />
                            </div>
                        </div>
                        <div className="form-col-ipt">
                            <div className="title">
                                公司编码:
                            </div>
                            <div className="ipt">
                                <Input size="large" placeholder="请输入公司编码" />
                            </div>
                        </div>
                        <div className="form-col-ipt">
                            <div className="title">
                                售后人员:
                            </div>
                            <div className="ipt">
                                <Input size="large" placeholder="请输入售后人员" />
                            </div>
                        </div>
                        <div className="form-col-ipt">
                            <div className="title">
                                联系电话:
                            </div>
                            <div className="ipt">
                                <Input size="large" placeholder="请输入联系电话" />
                            </div>
                        </div>
                    </Modal>
                </div>
            </Tooltip>
        );
    }
}

export default gys;
import React from 'react';
import './index.scss';
import { Button, Input , Select ,Modal , Tooltip } from 'antd';
class sblb extends React.Component {
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
            <Tooltip placement="top" title='新增水表类别'>
                <div className='tabLine-col' onClick={this.showModal.bind(this)}>
                    <i className="iconfont icon-leibie" />
                    <Modal 
                        visible={this.state.visible}
                        title="新增水表类别"
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}
                        width='380px'
                        wrapClassName="sblbCont"
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
                                        <th className="first">序号</th>
                                        <th>类型名称</th>
                                        <th className="last">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="first">1</td>
                                        <td>普通水表</td>
                                        <td className="last">删除</td>
                                    </tr>
                                    <tr>
                                        <td className="first">2</td>
                                        <td>普通水表</td>
                                        <td className="last">删除</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="form-col-ipt">
                            <div className="title">
                                水表类型:
                            </div>
                            <div className="ipt">
                                <Input size="large" placeholder="请输入水表类型" />
                            </div>
                        </div>
                    </Modal>
                </div>
            </Tooltip>
        );
    }
}

export default sblb;
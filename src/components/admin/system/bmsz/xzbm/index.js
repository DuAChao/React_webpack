import React from 'react';
import './index.scss';
import { Button, Input , Select ,Modal , Icon , Tooltip} from 'antd';
class xzbm extends React.Component {
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
            <Tooltip placement="top" title='新增部门'>
                <div className="tabLine-col" onClick={this.showModal.bind(this)}>
                    <Icon type="usergroup-add" />
                    <Modal 
                        visible={this.state.visible}
                        title="新增部门"
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}
                        width='380px'
                        wrapClassName="xzbmCont" 
                        footer={[ 
                            <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取消</Button>,
                            <Button key="submit" type="primary" size="large" loading={this.state.Loading} onClick={this.handleOk.bind(this)}>
                                新增
                            </Button>
                            ]}   
                    > 
                        <div className="form-col-ipt">
                            <div className="title">
                                部门编号:
                            </div>
                            <div className="ipt">
                                <Input size="large" placeholder="部门编号" />
                            </div>

                        </div>
                        <div className="form-col-ipt">
                            <span className="title">
                                部门名称:
                            </span>
                            <div className="ipt">
                                <Input size="large" placeholder="部门名称" />
                            </div>
                        </div>
                        <div className="form-col-ipt">
                            <div className="title">
                                部门简码:
                            </div>
                            <div className="ipt">
                                <Input size="large" placeholder="部门简码" />
                            </div>
                        </div>
                        <div className="form-col-ipt">
                            <div className="title">
                                上级部门:
                            </div>
                            <div className="ipt">
                                <Select defaultValue="all" style={{ width: 100 }} onChange={handleChange}>
                                    <Option value="all">无上级</Option>
                                    <Option value="jack">西充</Option>
                                    <Option value="lucy">管理员</Option>
                                </Select>
                            </div>

                        </div>
                        <div className="form-col-ipt">
                            <div className="title">
                                数据状态:
                            </div>
                            <div className="ipt">
                                <Select defaultValue="all" style={{ width: 100 }} onChange={handleChange}>
                                    <Option value="all">启用</Option>
                                    <Option value="jack">停用</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="form-col-ipt">
                            <div className="title">
                                部门备注:
                            </div>
                            <div className="ipt textarea">
                                <textarea name="部门备注" placeholder="请添加备注" />
                            </div>
                        </div>
                    </Modal>
                </div>
              </Tooltip>
        );
    }
}

export default xzbm;
import React from 'react';
import './index.scss';
import { Button, Input , Select ,Modal , Icon , Tooltip} from 'antd';
class xzyyt extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            visible: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    render() {
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <Tooltip placement="top" title='新增营业厅'>
                <div className='tabLine-col'  onClick={this.showModal}>
                    <Icon type="plus" />
                    <Modal
                        visible={this.state.visible}
                        title="新增营业厅"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        wrapClassName="xzyytCont"
                        width='380px'
                        footer={[
                            <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
                            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
                                新增
                            </Button>,
                            ]}
                    >
                        <div className="form-col-ipt">
                            <div className="title">
                                站点编号:
                            </div>
                            <div className="ipt">
                                <Input size="large" placeholder="站点编号" />
                            </div>

                        </div>
                        <div className="form-col-ipt">
                            <span className="title">
                                站点名称:
                            </span>
                            <div className="ipt">
                                <Input size="large" placeholder="站点名称" />
                            </div>
                        </div>
                        <div className="form-col-ipt">
                            <div className="title">
                                所属分厂:
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
                                数据备注:
                            </div>
                            <div className="ipt textarea">
                                <textarea name="数据备注" placeholder="请添加备注" />
                            </div>
                        </div>
                    </Modal>
                </div>
            </Tooltip>
        );
    }
}

export default xzyyt;
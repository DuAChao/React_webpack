import React from 'react';
import './index.scss';
import { Button, Input , Select ,Modal , Checkbox , InputNumber , Tooltip} from 'antd';
const CheckboxGroup = Checkbox.Group;
class sbxh extends React.Component {
    constructor() {
        super();
        this.state = {
            xzczyLoading: false,
            xzczyVisible: false,
        }
    }

    xzczyShowModal = () => {
        this.setState({
            xzczyVisible: true,
        });
    }
    xzczyHandleOk = () => {
        this.setState({ xzczyLoading: true });
        setTimeout(() => {
            this.setState({ xzczyLoading: false, xzczyVisible: false });
        }, 3000);
    }
    xzczyHandleCancel = () => {
        this.setState({ xzczyVisible: false });
    }
    render() {
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        function onChange(value) {
            console.log('changed', value);
        }

        return (
            <Tooltip placement="top" title='新增水表型号'>
                <div className='tabLine-col' onClick={this.xzczyShowModal.bind(this)}>
                    <i className="iconfont icon-shuibiao" />
                    <Modal
                        visible={this.state.xzczyVisible}
                        title="新增水表型号"
                        onOk={this.xzczyHandleOk.bind(this)}
                        onCancel={this.xzczyHandleCancel.bind(this)}
                        wrapClassName="sbxhCont"
                        width='690px'
                        footer={[
                            <Button key="back" size="large" onClick={this.xzczyHandleCancel.bind(this)}>取消</Button>,
                            <Button key="submit" type="primary" size="large" loading={this.state.xzczyLoading} onClick={this.xzczyHandleOk.bind(this)}>
                                新增
                            </Button>,
                            ]}
                    >
                        <div className="form-col-left">
                            <div className="form-col-ipt">
                                <div className="title">
                                    型号名称:
                                </div>
                                <div className="ipt">
                                    <Input size="large" placeholder="请输入型号名称" />
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    水表口径(mm):
                                </div>
                                <div className="ipt">
                                    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    是否带阀:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 , verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">无上级</Option>
                                        <Option value="jack">西充</Option>
                                        <Option value="lucy">管理员</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    收费方式:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 , verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">无上级</Option>
                                        <Option value="jack">西充</Option>
                                        <Option value="lucy">管理员</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    抄表方式:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 , verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">无上级</Option>
                                        <Option value="jack">西充</Option>
                                        <Option value="lucy">管理员</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    通讯设备:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 , verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">无上级</Option>
                                        <Option value="jack">西充</Option>
                                        <Option value="lucy">管理员</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    最大止度:
                                </div>
                                <div className="ipt">
                                    <InputNumber min={1} max={10000} defaultValue={9999} onChange={onChange} />
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    生产厂家:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 , verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">无上级</Option>
                                        <Option value="jack">西充</Option>
                                        <Option value="lucy">管理员</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    资料备注:
                                </div>
                                <div className="ipt textarea">
                                    <textarea name="部门备注" placeholder="请添加备注" />
                                </div>
                            </div>
                        </div>
                        <div className="form-col-right">
                            <div className="form-col-ipt">
                                <div className="title">
                                    安装方式:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 , verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">启用</Option>
                                        <Option value="jack">停用</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    水表材质:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 ,verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">无上级</Option>
                                        <Option value="jack">西充</Option>
                                        <Option value="lucy">管理员</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    水表类型:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 ,verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">启用</Option>
                                        <Option value="jack">停用</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    卡表选项:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 ,verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">启用</Option>
                                        <Option value="jack">停用</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    水表用途:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 ,verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">启用</Option>
                                        <Option value="jack">停用</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    表号长度:
                                </div>
                                <div className="ipt">
                                    <InputNumber min={1} max={10000} defaultValue={9999} onChange={onChange} />
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    度数倍率:
                                </div>
                                <div className="ipt">
                                    <InputNumber min={1} max={10000} defaultValue={9999} onChange={onChange} />
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    数据处理:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 ,verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">启用</Option>
                                        <Option value="jack">停用</Option>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </Tooltip>
        );
    }
}

export default sbxh;
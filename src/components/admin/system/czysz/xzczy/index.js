import React from 'react';
import './index.scss';
import { Button, Input , Select ,Modal , Checkbox , InputNumber , Icon , Tooltip} from 'antd';
const CheckboxGroup = Checkbox.Group;
class xzczy extends React.Component {
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

    xzczyOnChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    render() {
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        function onChange(value) {
            console.log('changed', value);
        }
        const plainOptions = ['抄表员', '收费员', '区域管理员'];
        return (
            <Tooltip placement="top" title='新增操作员'>
                <div className='tabLine-col' onClick={this.xzczyShowModal.bind(this)}>
                    <Icon type="user-add" />
                    <Modal
                        visible={this.state.xzczyVisible}
                        title="新增操作员"
                        onOk={this.xzczyHandleOk.bind(this)}
                        onCancel={this.xzczyHandleCancel.bind(this)}
                        wrapClassName="xzczyCont"
                        width='800px'
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
                                    登录账号:
                                </div>
                                <div className="ipt">
                                    <Input size="large" placeholder="登录账号" />
                                </div>
                            </div>
                            <div className="form-col-ipt">
                            <span className="title">
                                登录密码:
                            </span>
                                <div className="ipt">
                                    <Input size="large" placeholder="登录密码" />
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    员工姓名:
                                </div>
                                <div className="ipt">
                                    <Input size="large" placeholder="员工姓名" />
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    联系电话:
                                </div>
                                <div className="ipt">
                                    <Input size="large" type="tel" placeholder="联系电话" />
                                </div>
                            </div>
                            <div className="form-col-ipt">
                                <div className="title">
                                    所属分厂:
                                </div>
                                <div className="ipt">
                                    <Select defaultValue="all" style={{ width: 100 , verticalAlign: 'middle'}} onChange={handleChange}>
                                        <Option value="all">无上级</Option>
                                        <Option value="jack">西充</Option>
                                        <Option value="lucy">管理员</Option>
                                    </Select>
                                </div>

                            </div>
                        </div>
                        <div className="form-col-right">
                            <div className="form-col-ipt">
                                <div className="title">
                                    营业厅名:
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
                                    所属部门:
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
                                    所属岗位:
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
                                    用户状态:
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
                                    系统标识:
                                </div>
                                <div className="ipt">
                                    <CheckboxGroup options={plainOptions} defaultValue={['']} onChange={this.xzczyOnChange.bind(this)} />
                                </div>
                            </div>
                        </div>
                        <div className="derateCont">
                            <div className="col-md-1">
                                <div className="infoIn">
                                    <div className="title">水费减免（元）</div>
                                    <div className="Cross-col">
                                        <span>每月上限:</span>
                                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                    </div>
                                    <div className="Cross-col">
                                        <span>单笔上限:</span>
                                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="infoIn">
                                    <div className="title">滞纳金减免（元）</div>
                                    <div className="Cross-col">
                                        <span>每月上限:</span>
                                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                    </div>
                                    <div className="Cross-col">
                                        <span>单笔上限:</span>
                                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="infoIn">
                                    <div className="title">水量减免（立方米）</div>
                                    <div className="Cross-col">
                                        <span>每月上限:</span>
                                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                    </div>
                                    <div className="Cross-col">
                                        <span>单笔上限:</span>
                                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </Tooltip>
        );
    }
}

export default xzczy;
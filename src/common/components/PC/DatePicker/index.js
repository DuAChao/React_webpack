/**
 * Created by Administrator on 2017-04-11.
 */
/**日期选择器*/ 
import React from 'react';
import { DatePicker } from 'antd';

class datePicker extends React.Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false
    };

    disabledStartDate(startValue) {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();

    };

    disabledEndDate(endValue) {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };
    onChange(field, value) {
        this.setState({
            [field]: value,
        });
    };

    onStartChange(value) {
        this.onChange('startValue', value);
    }

    onEndChange(value) {
        this.onChange('endValue', value);
    }

    handleStartOpenChange(open) {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }

    handleEndOpenChange(open) {
        this.setState({ endOpen: open });
    }

    render() {
        const { startValue, endValue, endOpen } = this.state;
        console.log("=======我是分割栏=========");
        console.log("开始时间："+startValue);
        console.log("结束时间："+endValue);
        return (
            <div className="toolbar_md_1 datePicker">
                <DatePicker
                    disabledDate={this.disabledStartDate}
                    format="YYYY-MM-DD"
                    value={startValue}
                    placeholder="开始日期"
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                />
                &nbsp;
                <DatePicker
                    disabledDate={this.disabledEndDate}
                    format="YYYY-MM-DD"
                    value={endValue}
                    placeholder="结束日期"
                    onChange={this.onEndChange}
                    open={endOpen}
                    onOpenChange={this.handleEndOpenChange}
                />
            </div>
        );
    }
}
export default datePicker;
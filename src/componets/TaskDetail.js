import React, { Component } from 'react';
import {Icon, Input, Tag} from 'element-react';
import utils from '../utils/utils.js';
import '../css/TaskDetail.less';

class TaskDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskType: ['未开始', '待办', '已完成'],
            showInput: false,
            value: '',
            close: false
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    componentDidMount() {
        this.setState({
            value: this.props.item.items.content
        });
    }
    handleInput() {
        this.setState({
            showInput: true
        });
    }
    handleChange(value) {
        this.setState({
            value: value
        });
    }
    handleBlur() {
        this.props.handleChangeValue(this.state.value, this.props.item.taskId);
        this.setState({
            showInput: false
        });
    }
    handleClose() {
        this.setState({
            close: true
        });
        setTimeout(()=> {
            this.props.handleDetailClose();
        }, 700);
    }
    render(){
        return(
            <div className={`TaskDetail ${this.state.close ? 'rightDisappear' : ''}`}>
                <div className="m-hd">
                    {this.props.item.taskType === 2 &&
                        <a className="checked">
                            <Icon name="check"/>
                        </a>
                    }
                    <a className={`cnt ${this.props.item.taskType === 2 ? 'finish' : ''}`}>
                        {this.props.item.items.title}
                    </a>
                    <span className="close" onClick={this.handleClose}>
                        <Icon name="close" />
                    </span>
                </div>
                <div className="m-mn">
                    {this.state.showInput ?
                        <Input
                            value={this.state.value}
                            type="textarea"
                            autosize={{ minRows: 3, maxRows: 5}}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                        />
                        :
                        <p onClick={this.handleInput}>{this.props.item.items.content}</p>
                    }
                </div>
                <div className="m-ft">
                    <dl className="cnt">
                        <dt className="bind">
                            <Icon name="time" />
                            <span>截止日期</span>
                        </dt>
                        <dd className={`box ${utils.judgeOverdue(this.props.item.items.time) ? 'overdue' : ''}`}>
                            {utils.handleFormat(this.props.item.items.time, 'yyyy-MM-dd')}
                        </dd>
                    </dl>
                    <dl className="cnt">
                        <dt className="bind">
                            <Icon name="edit" />
                            <span>标 签</span>
                        </dt>
                        <dd className="box">
                            <Tag type="danger">P{this.props.item.items.level}&nbsp;</Tag>
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
}

export default TaskDetail;
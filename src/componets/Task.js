import React, { Component } from 'react';
import {Icon, Tag} from 'element-react';
import TaskDetail from './TaskDetail';
import utils from '../utils/utils.js';
import '../css/Task.less';

class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskType: ['未开始', '待办', '已完成'],
            showDetail: false
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDetail = this.handleDetail.bind(this);
        this.handleDetailClose = this.handleDetailClose.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }
    handleCheck() {
        if(this.props.item.taskType === 2) {
            return null;
        } else {
            this.props.handleCheck(this.props.item.taskId)
        }
    }
    handleDetail() {
        this.setState({
            showDetail : true
        })
    }
    handleChangeValue(value) {
        this.props.handleChangeValue(value, this.props.item.taskId);
    }
    handleDetailClose() {
        this.setState({
            showDetail : false
        })
    }
    render(){
        return(
            <div>
                <div className="Task">
                    <div className="m-hd">
                        <h2 className="title">{this.state.taskType[this.props.item.taskType]}</h2>
                        <span className="close" onClick={this.props.handleClose.bind(this, this.props.item.taskId)}><Icon name="close" /></span>
                    </div>
                    <div className="m-mn">
                        <div className="title">
                            <a className={`check ${this.props.item.taskType === 2 ? 'checked' : ''}`}
                                onClick={this.handleCheck}>
                                {this.props.item.taskType === 2 && <Icon name="check" />}
                            </a>
                            <a className={`cnt ${this.props.item.taskType === 2 ? 'finish' : ''}`}
                                onClick={this.handleDetail}>
                                {this.props.item.items.title}
                            </a>
                        </div>
                        <div className="desc">
                            <span className={this.props.item.items.overdue ? 'overdue' : ''}>
                                <Icon name="time" /> {utils.handleFormat(this.props.item.items.time, 'MM-dd')}
                            </span>
                            <span><Tag type="danger">P{this.props.item.items.level}</Tag></span>
                        </div>
                    </div>
                    <div className="m-ft" onClick={this.props.addTask}>
                        <Icon name="plus" /> 新建事项
                    </div>
                </div>
                {this.state.showDetail &&
                    <TaskDetail item={this.props.item}
                                handleDetailClose={this.handleDetailClose}
                                handleChangeValue={this.handleChangeValue}/>}
            </div>
        );
    }
}

export default Task;
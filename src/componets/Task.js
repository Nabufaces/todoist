import React, { Component } from 'react';
import {Icon, Tag} from 'element-react';
import utils from '../utils/utils.js';
import '../css/Task.less';

class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskType: ['未开始', '待办', '已完成']
        };
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck() {
        if(this.props.item.taskType === 2) {
            return null;
        } else {
            this.props.handleCheck(this.props.item.taskId)
        }
    }
    render(){
        return(
            <div className="Task">
                <div className="m-hd">
                    <h2 className="title">{this.state.taskType[this.props.item.taskType]}</h2>
                    <span className="close" onClick={this.props.handleDelete.bind(this, this.props.item.taskId)}><Icon name="close" /></span>
                </div>
                <div className="m-mn">
                    <div className="title">
                        <a className={`check ${this.props.item.taskType === 2 ? 'checked' : ''}`}
                            onClick={this.handleCheck}>
                            {this.props.item.taskType === 2 && <Icon name="check" />}
                        </a>
                        <a className={`cnt ${this.props.item.taskType === 2 ? 'finish' : ''}`}
                            onClick={this.props.handleShowDetail.bind(this, this.props.item.taskId)}>
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
        );
    }
}

export default Task;
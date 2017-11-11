import React, { Component } from 'react';
import {Icon, Tag} from 'element-react';
import '../css/Task.less';

class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskType: ['未开始', '待办', '已完成']
        };
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleFormat(value, format = "yyyy-MM-dd HH:mm"){
        const handleFix = (str) => {
            str = "" + (str || "");
            return str.length <= 1? "0" + str : str;
        };
        const maps = {
            'yyyy': function(date){return date.getFullYear()},
            'MM': function(date){return handleFix(date.getMonth() + 1); },
            'dd': function(date){ return handleFix(date.getDate()) },
            'HH': function(date){ return handleFix(date.getHours()) },
            'mm': function(date){ return handleFix(date.getMinutes())}
        };
        const trunk = new RegExp(Object.keys(maps).join('|'),'g');

        value = new Date(value);

        return format.replace(trunk, (capture) => {
            return maps[capture]? maps[capture](value): "";
        });
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
                    <span className="close" onClick={this.props.handleClose.bind(this, this.props.item.taskId)}><Icon name="close" /></span>
                </div>
                <div className="m-mn">
                    <div className="title">
                        <a className={`check ${this.props.item.taskType === 2 ? 'checked' : ''}`}
                            onClick={this.handleCheck}>
                            {this.props.item.taskType === 2 && <Icon name="check" />}
                        </a>
                        <a className={`cnt ${this.props.item.taskType === 2 ? 'finish' : ''}`}>
                            {this.props.item.items.title}
                        </a>
                    </div>
                    <div className="desc">
                        <span className={this.props.item.items.overdue ? 'overdue' : ''}>
                            <Icon name="time" /> {this.handleFormat(this.props.item.items.time, 'MM-dd')}
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
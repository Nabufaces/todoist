import React, { Component } from 'react';
import Task from './Task';
import '../css/Main.less';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList : [
            {
                taskId: 123,
                taskType: 1,
                items: {
                    level: 1,
                    title: '产品库需求修改',
                    content:'后台增加CMS的搜索热刺排行榜',
                    time: 1510385400000,
                    overdue: true
                }
            }, {
                taskId: 12,
                taskType: 2,
                items: {
                    level: 3,
                    title: '产品库需求修改,产品库需求修改',
                    content:'向下滚动频道tab悬浮在浏览器顶部',
                    time: 1510385400000,
                    overdue: false
                }
            }]
        };
    }
    addTask() {
        let taskList = this.state.taskList;
        taskList.push({
            taskId: 123,
            taskType: 0,
            items: {
                level: 1,
                title: '',
                time: 1510385400000,
                overdue: true
            }
        });
        this.setState({
            taskList: taskList
        })
    }
    handleCheck(taskId) {
        let taskList = this.state.taskList;
        taskList.forEach((item) => {
            if(item.taskId === parseInt(taskId, 10)) {
                item.taskType = 2;
            }
        });
        this.setState({
            taskList: taskList
        })
    }
    handleClose(taskId) {
        let taskList = this.state.taskList;
        let index = -1;
        taskList.forEach((item, item_index) => {
            if(item.taskId === parseInt(taskId, 10)) {
                index = item_index;
            }
        });
        if(index !== -1){
            taskList.splice(index, 1);
        }
        this.setState({
            taskList: taskList
        })
    }
    handleChangeValue(value, taskId) {
        let taskList = this.state.taskList;
        taskList.forEach((item) => {
            if(item.taskId === parseInt(taskId, 10)) {
                item.items.content = value;
            }
        });
        this.setState({
            taskList: taskList
        })
    }
    render(){
        const taskList = this.state.taskList.map((item, index) => {
            return <Task item={item} key={index} addTask={this.addTask.bind(this)}
                         handleCheck={this.handleCheck.bind(this)}
                         handleClose={this.handleClose.bind(this)}
                         handleChangeValue={this.handleChangeValue.bind(this)}/>
        });

        return(
            <div className="Main">
                {taskList}
            </div>
        );
    }
}

export default Main;
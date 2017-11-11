import React, { Component } from 'react';
import Task from './Task';
import TaskDetail from './TaskDetail';
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
            }],
            showDetail: false,
            showDetailItem: {}
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
    handleDelete(taskId) {
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
    handleShowDetail(taskId) {
        const taskList = this.state.taskList;
        const task = taskList.filter((item) => {
            return item.taskId === parseInt(taskId, 10);
        });
        this.setState({
            showDetail: true,
            showDetailItem: task[0]
        })
    }
    handleDetailClose() {
        this.setState({
            showDetail: false
        })
    }
    render(){
        const taskList = this.state.taskList.map((item, index) => {
            return <Task item={item} key={index} addTask={this.addTask.bind(this)}
                         handleCheck={this.handleCheck.bind(this)}
                         handleDelete={this.handleDelete.bind(this)}
                         handleChangeValue={this.handleChangeValue.bind(this)}
                         handleShowDetail={this.handleShowDetail.bind(this)}/>
        });

        return(
            <div className="Main">
                <div className="group">
                    {taskList}
                    {this.state.showDetail &&
                    <TaskDetail item={this.state.showDetailItem}
                                handleDetailClose={this.handleDetailClose.bind(this)}
                                handleChangeValue={this.handleChangeValue.bind(this)}/>}
                </div>
            </div>
        );
    }
}

export default Main;
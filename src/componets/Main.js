import React, { Component } from 'react';
import Task from './Task';
import TaskDetail from './TaskDetail';
import {Dialog, Form, Input, Select, DatePicker, Button} from 'element-react';
import '../css/Main.less';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            taskList : [
            {
                taskId: 1,
                taskType: 1,
                items: {
                    level: 1,
                    title: '产品库需求修改',
                    content:'后台增加CMS的搜索热刺排行榜',
                    time: 1510385400000
                }
            }, {
                taskId: 2,
                taskType: 2,
                items: {
                    level: 3,
                    title: '产品库需求修改,产品库需求修改',
                    content:'向下滚动频道tab悬浮在浏览器顶部',
                    time: 1511107200000
                }
            }],
            showDetail: false,
            showDetailItem: {},
            showAddModal: false,
            addTaskForm: {
                taskId: 0,
                taskType: 1,
                items: {
                    level: 1,
                    title: '',
                    content: '',
                    time: new Date()
                }
            }
        };
    }
    componentDidMount() {
        let addTaskForm = this.state.addTaskForm;
        addTaskForm.taskId = this.state.taskList.length + 1;
        this.setState({
            addTaskForm
        })
    }
    handleAddChange(key, value) {
        let addTaskForm = this.state.addTaskForm;
        addTaskForm.items[key] = value;
        this.setState({
            items: addTaskForm.items
        });
    }
    handleAddTaskSubmit() {
        let addTaskForm = this.state.addTaskForm;
        let taskList = this.state.taskList;
        taskList.push(addTaskForm);
        this.setState({
            showAddModal: false,
            taskList
        });
    }
    handleCheck(taskId) {
        let taskList = this.state.taskList;
        taskList.forEach((item) => {
            if(item.taskId === parseInt(taskId, 10)) {
                item.taskType = 2;
            }
        });
        this.setState({
            taskList
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
            taskList
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
            taskList
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
        const TaskList = this.state.taskList.map((item, index) => {
            return <Task item={item} key={index}
                         handleAddTask={() => this.setState({ showAddModal: true })}
                         handleCheck={this.handleCheck.bind(this)}
                         handleDelete={this.handleDelete.bind(this)}
                         handleChangeValue={this.handleChangeValue.bind(this)}
                         handleShowDetail={this.handleShowDetail.bind(this)}/>
        });

        return(
            <div className="Main">
                <div className="group">
                    {TaskList}
                    {this.state.showDetail &&
                    <TaskDetail item={this.state.showDetailItem}
                                handleDetailClose={this.handleDetailClose.bind(this)}
                                handleChangeValue={this.handleChangeValue.bind(this)}/>}
                </div>
                <Dialog
                    title="新增事项"
                    visible={this.state.showAddModal}
                    onCancel={() => this.setState({showAddModal: false})}
                >
                    <Dialog.Body>
                        <Form model={this.state.addTaskForm} labelWidth="100"
                              onSubmit={(e) => {
                                  e.preventDefault()
                              }}>
                            <Form.Item label="事项标题">
                                <Input type="text" value={this.state.addTaskForm.items.title}
                                       onChange={this.handleAddChange.bind(this, 'title')}
                                />
                            </Form.Item>
                            <Form.Item label="事项内容">
                                <Input value={this.state.addTaskForm.items.content}
                                       type="textarea"
                                       autosize={{minRows: 3, maxRows: 5}}
                                       onChange={this.handleAddChange.bind(this, 'content')}/>
                            </Form.Item>
                            <Form.Item label="提交事件">
                                <DatePicker
                                    value={this.state.addTaskForm.items.time}
                                    placeholder="选择日期"
                                    onChange={this.handleAddChange.bind(this, 'time')}
                                />
                            </Form.Item>
                            <Form.Item label="设置优先级">
                                <Select value={this.state.addTaskForm.items.level}>
                                    <Select.Option label="P1" value={1}/>
                                    <Select.Option label="P2" value={2}/>
                                    <Select.Option label="P3" value={3}/>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type="success" onClick={this.handleAddTaskSubmit.bind(this)}>立即创建</Button>
                                <Button onClick={() => this.setState({showAddModal: false})}>取消</Button>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                </Dialog>
            </div>
        );
    }
}

export default Main;
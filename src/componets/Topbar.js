import React, { Component } from 'react';
import { Button, Select } from 'element-react';
import '../css/Topbar.less';

class Topbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            levelOption : [{
                value: 0,
                label: '按优先级降序',
                iconName: 'icon-desc'
            }, {
                value: 1,
                label: '按优先级升序',
                iconName: 'icon-asc'
            }, {
                value: 2,
                label: '按过期时间',
                iconName: 'icon-time'
            }],
            levelValue: ''
        }
    }

    render(){
        return(
            <div className="Topbar">
                <div className="m-tt">
                    <i className="iconfont icon-menu_icon_workbench" />
                    <span>我的工作台</span>
                </div>
                <div className="m-mn">
                    <ul className="todo-list">
                        <li><a className="active">待办</a></li>
                        <li><a>进行中</a></li>
                        <li><a>完成</a></li>
                    </ul>
                </div>
                <div className="m-level">
                    <Button type="success">
                        <i className="iconfont icon-sifangge" />
                    </Button>
                    <Select value={this.state.levelValue}>
                        {
                            this.state.levelOption.map((item) => {
                                return (
                                    <Select.Option label={item.label} value={item.value} key={item.value}>
                                        <i className={`iconfont ${item.iconName}`} />
                                        <span style={{marginLeft: '10px'}}>{item.label}</span>
                                    </Select.Option>
                                )
                            })
                        }
                    </Select>
                </div>
            </div>
        );
    }
}

export default Topbar;
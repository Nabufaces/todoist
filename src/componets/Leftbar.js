import React, { Component } from 'react';
import '../css/Leftbar.less';

class Topbar extends Component {
    showUser() {

    }
    render(){
        return(
            <div className="Leftbar">
                <ul className="menu">
                    <li className="active">
                        <i className="iconfont icon-wode" /><br/>
                        <a>我的</a>
                    </li>
                    <li>
                        <i className="iconfont icon-sousuo" /><br/>
                        <a>搜索</a>
                    </li>
                    <li>
                        <i className="iconfont icon-xiaoxi" /><br/>
                        <a>消息</a>
                    </li>
                    <li>
                        <i className="iconfont icon-add" />
                    </li>
                    <li className="user" onClick={this.showUser}>
                        <img className="userImg" src={require('../static/head.jpg')} alt=""/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Topbar;
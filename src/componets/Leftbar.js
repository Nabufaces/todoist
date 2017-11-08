import React, { Component } from 'react';
import '../css/Leftbar.css';


class Topbar extends Component {
    showUser() {

    }
    render(){
        return(
            <div className="Leftbar">
                <ul className="menu">
                    <li>
                        <i className="iconfont icon-wode"></i><br/>
                        <a>我的</a>
                    </li>
                    <li>
                        <i className="iconfont icon-sousuo"></i><br/>
                        <a>搜索</a>
                    </li>
                    <li>
                        <i className="iconfont icon-xiaoxi"></i><br/>
                        <a>消息</a>
                    </li>
                    <li>
                        <i className="iconfont icon-add"></i>
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
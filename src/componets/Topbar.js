import React, { Component } from 'react';
import '../css/Topbar.less';


class Topbar extends Component {
    render(){
        return(
            <div className="topbar">
                <title>Todoist</title>
                <div className="user">
                    {/*<img src="" />*/}
                </div>
            </div>
        );
    }
}

export default Topbar;
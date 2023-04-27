import React, { Children } from 'react'
import '../../styles/sidebar.css'
import { SidebarData } from './SidebarData'
import { NavLink } from 'react-router-dom'

function Sidebar(props) {
    return (

        <div className="nav">
            <div className='Sidebar'>
                <ul className='SidebarList'>
                    {SidebarData.map((val, key) => {
                        return (
                            <NavLink to={val.path}>
                                <li
                                    key={key}
                                    className='Row'
                                // id={window.location.pathname == val.link ? "active" : ""}
                                // onClick={() => {
                                //     window.location.pathname = val.link
                                // }}
                                >
                                    <div id='icon'>{val.icon}</div>
                                    <div id='title'>{val.title}</div>
                                </li>
                            </NavLink>
                        );

                    })}
                </ul>
            </div>
            <div className='col'>
                {props.children}
            </div>
        </div>
    )
}

export default Sidebar
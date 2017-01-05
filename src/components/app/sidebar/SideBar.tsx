import * as React from "react";

export interface SideBarProps {

}

export interface SideBarStates {

}

export class SideBar extends React.Component<SideBarProps, SideBarStates> {

    public constructor(props: SideBarProps) {
        super(props);
    }

    render() {
        return <div className="sidebar">
            <nav className="sidebar-nav">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="icon-speedometer"></i>
                            Dashboard
                            <span className="tag tag-info">NEW</span>
                        </a>
                    </li>
                    <li className="nav-title">
                        UI
                    </li>
                    <li className="nav-item nav-dropdown">
                        <a className="nav-link nav-dropdown-toggle" href="#">
                            <i className="icon-puzzle"></i>
                            Components
                        </a>
                        <ul className="nav-dropdown-items">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-puzzle"></i>
                                    Buttons
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    }
}
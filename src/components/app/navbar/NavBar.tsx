import * as React from "react";
import {NavItemList} from "./NavBarItemList";
import {Brand} from "./Brand";

export interface NavBarProps {

}

export interface NavBarStates {

}

export class NavBar extends React.Component<NavBarProps, NavBarStates> {

    public constructor(props: NavBarProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <header className="navbar">
            <div className="container-fluid">
                <button className="navbar-toggler mobile-toggler hidden-lg-up" type="button">☰</button>
                <Brand href="#" content="Account Book"/>
                <NavItemList/>
            </div>
        </header>
    }
}
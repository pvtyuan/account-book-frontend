import * as React from "react";
import {NavItem} from "../nav-common/NavItem";

export interface NavItemListProps {
    [index: string]: string
}

export interface NavItemListStates {
    items: Array<number>;
}

export class NavItemList extends React.Component<NavItemListProps, NavItemListStates> {
    public constructor() {
        super();
        this.state = {
            items: [1,2]
        }
    }

    public render() {
        return <ul className="nav navbar-nav hidden-md-down">
            <NavItem content="☰" href="#" key="" extraClass="navbar-toggler layout-toggler"/>
            {
                this.state.items.map(item => <NavItem content={"11bb"+item} href="#" key={item.toString()}/>)
            }
        </ul>
    }
}
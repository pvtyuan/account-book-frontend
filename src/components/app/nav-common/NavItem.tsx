/**
 * Created by Yuan on 2017/1/5.
 */
import * as React from "react";

export interface NavItemProps {
    content: string,
    href: string,
    key: string,
    extraClass?: string;
}

export class NavItem extends React.Component<NavItemProps, undefined> {
    public constructor(props: NavItemProps) {
        super(props);
    }

    public render() {
        return <li className="nav-item p-x-1">
            <a className={"nav-link "+this.props.extraClass} href={this.props.href}>{this.props.content}</a>
        </li>
    }
}
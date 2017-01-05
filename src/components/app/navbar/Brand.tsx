import * as React from "react";

export interface BrandProps {
    href: string;
    content: string
}

export class Brand extends React.Component<BrandProps, undefined> {
    public constructor(props: BrandProps) {
        super(props);
    }

    public render() {
        return <a href={this.props.href} className="navbar-brand">{this.props.content}</a>
    }
}
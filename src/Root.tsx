import * as React from "react";

export interface RootProps {

}

export class Root extends React.Component<RootProps, undefined> {
    public constructor(props: RootProps) {
        super(props);
    }

    public render() {
        return <div>
            {this.props.children}
        </div>
    }
}
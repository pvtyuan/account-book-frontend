import * as React from "react";
import {SideBar} from "./sidebar/SideBar";
import {NavBar} from "./navbar/NavBar";

export interface AppProps {

}

export interface AppStates {
    logged: boolean;
}

export class App extends React.Component<AppProps, AppStates> {

    public constructor() {
        super();
        this.state = {logged: true};
    }

    handleChange = (event:any, logged: boolean) => {
        this.setState({logged: logged});
    };

    render() {
        return <div><NavBar />
        <SideBar />
        </div>
    }
}


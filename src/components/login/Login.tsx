import * as React from "react";

export interface LoginProps {
    content: string,
    href: string,
    key: string,
    extraClass?: string;
}

export class Login extends React.Component<Login, undefined> {
    public constructor(props: LoginProps) {
        super(props);
    }

    public render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-8 m-x-auto pull-xs-none vamiddle"
                     style={{marginTop:"84.25px"}}>
                    <div className="card-group">
                        <div className="card p-a-2">
                            <div className="card-block">
                                <h1>Login</h1>
                                <p className="text-muted">
                                    Sign In to your account
                                </p>
                                <div className="input-group m-b-1">
                                    <span className="input-group-addon">
                                        <i className="icon-user"></i>
                                    </span>
                                    <input className="form-control" placeholder="Username" type="text"/>
                                </div>
                                <div className="input-group m-b-2">
                                    <span className="input-group-addon">
                                        <i className="icon-lock"></i>
                                    </span>
                                    <input className="form-control" placeholder="Password" type="password"/>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <button className="btn btn-primary p-x-2" type="button">Login</button>
                                    </div>
                                    <div className="col-xs-6 text-xs-right">
                                        <button className="btn btn-link p-x-0" type="button">Forgot password?</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-inverse card-primary p-y-3" style={{width: "44%"}}>
                            <div className="card-block text-xs-center">
                                <div>
                                    <h2>Sign up</h2>
                                    <p>Sign up to explore</p>
                                    <button className="btn btn-primary active m-t-1" type="button">Register Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
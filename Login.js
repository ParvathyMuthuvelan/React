import React, { Component } from "react";
import LoginService from "../services/LoginService";

 class Login extends React.Component
{
    constructor()
    {
        super();
        this.state={"userName":'',"password":''
    };
    this.state = {
        movies: []
}
        this.fnSubmit=this.fnSubmit.bind(this);
        this.fnHi=this.fnHi.bind(this);
    }

    // fnSetUsername(username)
    // {
    //     console.log(username);
    //     this.setState({"username":username});
    //     console.log("state is "+this.state.username);
    // }

    fnSubmit()
    {
        
        console.log(this.state);
        //LoginService.test();
        LoginService.loginValidate(this.state).then((response)=>{
            console.log(response);
            //console.log(response.data.jwt);
            console.log(response.data.token);
            console.log("Storing jwt in localStorage");
            localStorage.setItem("jwt",response.data.token);
        },(error)=>{
            console.log(error)
        });
    }

    fnHi()
    {
        LoginService.hi().then((res) => {
            this.setState({movies: res.data});
            console.log('response' +res.data);
        });
        /*EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });*/
       // console.log('going to call'+res.data);
        //LoginService.hi().then((response)=>{
       // console.log(response);
       // console.log(response.data);
      //  });
    }

    render()
    {
        return <div>
            {this.state.userName} | {this.state.password}
            <form>
                User Name: <input type="text" onChange={(event)=>this.setState({"userName":event.target.value})} /><br/>
                Password: <input type="password" onChange={(event)=>this.setState({"password":event.target.value})} /><br/>
                <input type="button" value="Login" onClick={this.fnSubmit} />
            </form>
            <br/>
            <br/>

            <input type="button" value="Call hi method" onClick={this.fnHi} />
        </div>;
    }
}
export default Login;
import React from 'react';

import { Link } from 'react-router-dom'

export default class ViewUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listUsers: [
                {
                    fullName: "Himanshu Ganapavarapu",
                    email: "himanshu.ganpa@gmail.com"
                },
                {
                    fullName: "Shivani Wakade",
                    email: "shs.shs@gmail.com"
                }
            ]
        }
    }

    componentDidMount() {
        let user = this.props.location.state;
        if(user !== undefined){
            let users = this.state.listUsers;
            users.push(this.props.location.state.currentUser);
            this.setState({
                ...this.state,
                listUsers: users
            })

            this.props.location.state = null;
        }
    }

    editUser = (user) => {
        this.props.history.push({
            pathname: '/add-edit-user/',
            state: {
                currentUser: user
            }
        });
    }

    deleteUser = (id) => {
        console.log(id)
        let list = this.state.listUsers;
        for(var i in list) {
            if(list[i].id === id) {
                delete list[i]
            }
        }
        this.setState({
            listUsers: list
        })
    }

    displayUsers = () => {
        let users = this.state.listUsers;
        return users.map((user, i) => {
            return (
                <div className="col-md-4 card border-secondary mb-3 card-style" key={i}>
                    <div className="text-right">
                        <button onClick={()=> {this.editUser(user)}}><i className="fa fa-edit"></i></button>
                        <button onClick={() => {this.deleteUser(user.id)}}><i className="fa fa-trash"></i></button>
                    </div>
                    <div className="card-body row">
                        <div className="col-md-2">
                            {/* Photo */}
                        </div>
                        <div className="col-md-10">
                            <h6>{user.fullName}</h6>
                            <p className="email-font">{user.email}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }


    render() {
        return (
            <React.Fragment>
                {/* BODY */}
                <div className="container-fluid jumbotron" id="view-body">
                <br /><br />
                    <div className="row">
                        
                        {this.displayUsers()}

                        {/*ADD USER BOX */}
                        <div className="col-md-4 card mb-3 border-secondary card-style">
                            <Link to="/add-edit-user/" id="add-edit-user-card">

                                <div className="card-body row">
                                    <div className="col-md-12 text-center">
                                        <i className="fa fa-plus fa-4x" aria-hidden="true"></i>
                                        <p>Add Family Member</p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h6>Add a family member</h6>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
import React from 'react';

import { Link } from 'react-router-dom'

export default class ViewUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listUsers: []
        }
    }

    componentDidMount() {
        if(JSON.parse(localStorage.getItem('myMembers')) != null){
            let listUsers = JSON.parse(localStorage.getItem('myMembers'))
            this.setState({
                ...this.state,
                listUsers: listUsers
            })
        } 
        else {
            localStorage.setItem('myMembers', JSON.stringify(this.state.listUsers))
            localStorage.setItem('currentId', `${this.state.listUsers.length + 1}`)
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
        let list = this.state.listUsers;
        let updatedUsers = []; 
        for(var i in list) {
            if(list[i].id !== id) {
                updatedUsers.push(list[i])
            }
        }
        this.setState({
            listUsers: updatedUsers
        })
        localStorage.setItem("myMembers", JSON.stringify(updatedUsers))
    }

    displayUsers = () => {
        let users = this.state.listUsers;
        return users.map((user, i) => {
            return (
                <div className="col-md-3 card border-secondary mb-3 card-style" key={i}>
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

    addUser() {
        this.props.history.push({
            pathname: '/add-edit-user/',
            state: {
                currentUser: null,
                listUsers: this.state.listUsers
            }
        });
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
                        <div onClick={this.addUser.bind(this)} className="col-md-3 card mb-3 border-secondary card-style" id="add-edit-user-card">
                                <div className="card-body row">
                                    <div className="col-md-12 text-center">
                                        <i className="fa fa-plus fa-4x" aria-hidden="true"></i>
                                        <p>Add Family Member</p>
                                    </div>
                                </div>
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
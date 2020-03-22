import React from 'react';
import { Link } from 'react-router-dom';
export default class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listUsers: [
                {
                    id: "1",
                    fullName: "Himanshu Ganapavarapu",
                    emailAddress: "himanshu.ganpa@gmail.com"
                },
                {
                    id: "2",
                    fullName: "Himanshu",
                    emailAddress: "himanshu.ganpa@gmail.com"
                }
            ],
            currentUser: {
                fullName: '',
                dob: '',
                location: '',
                occupation: '',
                phoneNumber: '',
                email: '',
                sex: 'M',
                fbUrl: '',
                twitterUrl: '',
                linkedinUrl: ''
            },
            errors: {
                fullName: '',
                dob: '',
                location: '',
                occupation: '',
                phoneNumber: '',
                email: '',
                sex: '',
                fbUrl: '',
                twitterUrl: '',
                linkedinUrl: ''
            },
            hasErrors: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.location.state != undefined) {
            let user = this.props.location.state.currentUser
            this.setState({
                ...this.state,
                currentUser: user
            })
            this.props.location.state = null
            console.log(this.props.location.state)
        }
    }

    handleErrors() {
        let user = this.state.currentUser;
        let errors = this.state.errors
        let hasErrors = this.state.hasErrors;

        
        if (user.fullName == '') {
            errors = {
                fullName: 'Name Cannot Be Empty'
            }
            hasErrors = true;
        } else {
            errors = {
                ...errors,
                fullName: ''
            }
            hasErrors = false;
        }
        if (user.dob == '') {
            errors= {
                ...errors,
                dob: "dob cannot be empty"
            }
            hasErrors = true;
        } else {
            hasErrors = false;
            errors = {
                ...errors,
                dob: ''
            }
        }
        if (user.location == '') {
            errors= {
                ...errors,
                location: "location cannot be empty"
            }
            hasErrors = true;
        } else {
            hasErrors = false;
            errors = {
                ...errors,
                location: ''
            }
        }
        if (user.occupation == '') {
            errors= {
                ...errors,
                occupation: "occupation cannot be empty"
            }
            hasErrors = true;
        } else {
            hasErrors = false;
            errors = {
                ...errors,
                occupation: ''
            }
        }
        if (user.phoneNumber == '') {
            errors= {
                ...errors,
                phoneNumber: "phoneNumber cannot be empty"
            }
            hasErrors = true;
        } else {
            hasErrors = false;
            errors = {
                ...errors,
                phoneNumber: ''
            }
        }
        if (user.email == '') {
            errors= {
                ...errors,
                email: "email cannot be empty"
            }
            hasErrors = true;
        }else {
            hasErrors = false;
            errors= {
                ...errors,
                email: ""
            }
        }
        if (user.fbUrl == '') {
            errors= {
                ...errors,
                fbUrl: "fbUrl cannot be empty"
            }
            hasErrors = true;
        } else {
            hasErrors = false;
            errors = {
                ...errors,
                fbUrl: ''
            }
        }
        if (user.twitterUrl == '') {
            errors= {
                ...errors,
                twitterUrl: "twitterUrl cannot be empty"
            }
            hasErrors = true;
        } else {
            hasErrors = false;
            errors = {
                ...errors,
                twitterUrl: ''
            }
        }
        if (user.linkedinUrl == '') {
            errors= {
                ...errors,
                linkedinUrl: "linkedinUrl cannot be empty"
            }
            hasErrors = true;
        } else {
            hasErrors = false;
            errors = {
                ...errors,
                linkedinUrl: ''
            }
        }

        this.setState({
            ...this.state,
            errors: errors,
            hasErrors: hasErrors
        })

    }

    handleChange(e) {
        let user = {
            ...this.state.currentUser,
            [e.target.name]: e.target.value
        };
        this.setState({
            ...this.state,
            currentUser: user
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleErrors()
        if (this.state.hasErrors) {
            console.log(this.state.currentUser)
        }

        this.props.history.push({
            pathname: '/',
            state: {
                currentUser: this.state.currentUser
            }
        });
    }

    render() {
        return (<div className="container-fluid">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <h1>
                            PERSONAL INFO
                        </h1>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row form-group">
                    <div class="col-md-3">
                        <label for="fullName">Full Name</label>
                        <input type="text" class="form-control" placeholder="Full Name" name="fullName" onChange={this.handleChange} value={this.state.currentUser.fullName}/>
                        <p className="text-danger">{this.state.hasErrors? this.state.errors.fullName: ''}</p>
                    </div>
                    <div class="col-md-3">
                        <label for="dob">Date of Birth</label>
                        <input type="number" class="form-control" placeholder="Date of Birth" name="dob" onChange={this.handleChange} value={this.state.currentUser.dob} />
                        <p className="text-danger">{this.state.hasErrors? this.state.errors.dob: ''}</p>
                    </div>
                    <div class="col-md-3">
                        <label for="location">Location</label>
                        <input type="text" class="form-control" placeholder="Location" name="location" onChange={this.handleChange}  value={this.state.currentUser.location}/>
                        <p className="text-danger">{this.state.hasErrors? this.state.errors.location: ''}</p>
                    </div>
                    <div class="col-md-3">
                        <label for="location">Occupation</label>
                        <input type="text" class="form-control" placeholder="Occupation" name="occupation" onChange={this.handleChange}  value={this.state.currentUser.occupation}/>
                        <p className="text-danger">{this.state.hasErrors? this.state.errors.occupation: ''}</p>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-3">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="number" class="form-control" placeholder="Phone Number" name="phoneNumber" onChange={this.handleChange} value={this.state.currentUser.phoneNumber}/>
                        <p className="text-danger">{this.state.hasErrors? this.state.errors.phoneNumber: ''}</p>
                    </div>
                    <div class="col-md-3 form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.currentUser.email}/>
                        <p className="text-danger">{this.state.hasErrors? this.state.errors.email: ''}</p>
                    </div>
                    <div class="col-md-3">
                        <label for="sex">Sex</label>
                        <select class="form-control" name="sex" onChange={this.handleChange}value={this.state.currentUser.sex}>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                        <p className="text-danger">{this.state.hasErrors? this.state.errors.sex: ''}</p>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-3">
                        <label for="fbUrl">Facebook Profile</label>
                        <input type="text" class="form-control" placeholder="www.facebook.com/johndoe" name="fbUrl" onChange={this.handleChange} value={this.state.currentUser.fbUrl}/>
                        <p className="text-danger">{this.state.hasErrors? this.state.errors.fbUrl: ''}</p>
                    </div>
                    <div class="col-md-3">
                        <label for="twitterUrl">Twitter Profile</label>
                        <input type="text" class="form-control" placeholder="www.twitter.com/johndoe" name="twitterUrl" onChange={this.handleChange} value={this.state.currentUser.twitterUrl}/>
                        <p className="text-danger">{this.state.hasErrors? this.state.errors.twitterUrl: ''}</p>

                    </div>
                    <div class="col-md-3">
                        <label for="linkedinUrl">Linkedin Profile</label>
                        <input type="text" class="form-control" placeholder="www.linkedin.com/johndoe" name="linkedinUrl" onChange={this.handleChange} value={this.state.currentUser.linkedinUrl}/>
                        <p className="text-danger">{this.state.hasErrors? this.state.errors.linkedinUrl: ''}</p>
                    </div>
                </div>
                <br />
                {this.state.hasErrors? 
                
                <div class="alert alert-dismissible alert-danger">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
                </div>

                : null}
                
                <br /><br />
                <div class="row">
                    <div class="col-md-2 offset-md-8">
                        <button onClick={this.handleSubmit} class="btn btn-success btn-block">
                            SAVE
                        </button>
                    </div>
                    <div class="col-md-2">
                        <Link to="/view-users">
                            <button class="btn btn-danger btn-block">
                                CANCEL
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>)
    }
}
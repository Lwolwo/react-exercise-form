import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myProfile.less';


class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: 'Male',
      description: '',
      isReaded: false,
      isFinished: false
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    }, () => this.formIsFinished());
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    }, () => this.formIsFinished());
  };

  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    }, () => this.formIsFinished());
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, gender, description} = this.state;
    console.log("Name:", name);
    console.log("Gender:", gender);
    console.log("Description:", description);
  };

  handleIsReadedChange = (event) => {
    this.setState({
      isReaded: event.target.checked
    }, () => this.formIsFinished());
  }

  formIsFinished() {
    const {name, description, isReaded} = this.state;
    if (name !== '' && description !== '' && isReaded) {
      this.setState({
        isFinished: true
      })
    } else {
      this.setState({
        isFinished: false
      })
    }
  }

  render() {
    const { name, gender, description, isReaded, isFinished } = this.state;

    return (
      <div className="myProfile">
        <h1>My Profile</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="formItem">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={this.handleNameChange}
              placeholder="Your name"
            />
          </div>
          <div className="formItem">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              className="form-control"
              name="gender"
              onChange={this.handleGenderChange}
              value={gender}
            >
              <option value="male">Male</option>
              <option value="female">Feamle</option>
            </select>
          </div>
          <div>
          <div className="formItem">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              className="form-control"
              rows="4"
              value={description}
              onChange={this.handleDescriptionChange}
              placeholder="Description about yourself"
            />
          </div>
          <div className="formItem checkbox custom-control custom-checkbox">
            <input
              type="checkbox"
              id="read"
              className="checkboxInput" 
              checked={isReaded}
              onChange={this.handleIsReadedChange}
            />
            <label htmlFor="read" className="checkboxLabel">I have read the terms of conducts</label>

          </div>

          <button className="btn btn-primary btn-lg button" type="submit" disabled={!isFinished}>
              Submit
            </button>


          </div>
        </form>
      </div>
    );
  }
}

export default MyProfile;



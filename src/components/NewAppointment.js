import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

const initialState = {
  appointment: {
    pet: "",
    owner: "",
    date: "",
    hour: "",
    symptoms: ""
  },
  error: false
};

class NewAppointment extends Component {
  state = {
    ...initialState
  };

  handleChange = e => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { pet, owner, date, hour, symptoms } = this.state.appointment;
    if (
      pet === "" ||
      owner === "" ||
      date === "" ||
      hour === "" ||
      symptoms === ""
    ) {
      this.setState({
        error: true
      });
      return;
    }
    const newAppointment = {
      ...this.state.appointment
    };
    newAppointment.id = uuid();
    this.props.createNewAppointment(newAppointment);
    this.setState({
      ...initialState
    });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Create New Appointment{" "}
          </h2>{" "}
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              All fields are riquired{" "}
            </div>
          ) : null}{" "}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet Name{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet Name"
                  name="pet"
                  onChange={this.handleChange}
                  value={this.state.appointment.pet}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Owner Pet Name{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Owner Pet Name"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.appointment.owner}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label"> Date </label>{" "}
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />{" "}
              </div>{" "}
              <label className="col-sm-4 col-lg-2 col-form-label"> Hour </label>{" "}
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hour"
                  onChange={this.handleChange}
                  value={this.state.appointment.hour}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Symptoms{" "}
              </label>{" "}
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  placeholder="Describe the symptoms"
                  name="symptoms"
                  onChange={this.handleChange}
                  value={this.state.appointment.symptoms}
                />{" "}
              </div>{" "}
            </div>{" "}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Add New Appoitment"
            />
          </form>{" "}
        </div>{" "}
      </div>
    );
  }
}

NewAppointment.propTypes = {
  createNewAppointment: PropTypes.func.isRequired
};

export default NewAppointment;

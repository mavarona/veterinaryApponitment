import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NewAppointment from "./components/NewAppointment";
import ListAppointments from "./components/ListAppointments";

class App extends Component {
  state = {
    appointments: []
  };

  componentDidMount() {
    const appointmentsLS = localStorage.getItem("appointments");
    if (appointmentsLS) {
      this.setState({
        appointments: JSON.parse(appointmentsLS)
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      "appointments",
      JSON.stringify(this.state.appointments)
    );
  }

  createNewAppointment = appointment => {
    const appointments = [...this.state.appointments, appointment];
    this.setState({ appointments });
  };

  deleteAppointment = id => {
    const currentAppointments = [...this.state.appointments];
    const appointments = currentAppointments.filter(
      appointment => appointment.id !== id
    );
    this.setState({ appointments });
  };

  render() {
    return (
      <div className="container">
        <Header title="Administrator Veterinary Patients" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment createNewAppointment={this.createNewAppointment} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListAppointments
              appointments={this.state.appointments}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

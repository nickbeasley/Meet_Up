import React, { Component } from "react";
import { WarningAlert } from "./Alert";
import moment from "moment";

class Event extends Component {
  state = {
    detailsHidden: true,
    infoText: "",
  };

  onClickedShowDetails = () => {
    this.setState({ detailsHidden: false });
  };

  onClickedHideDetails = () => {
    this.setState({ detailsHidden: true });
  };

  warningMessage = () => {
    if (this.props.event.description === undefined) {
      return <WarningAlert text="No description available" />;
    }
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <div className="start-time">
          {moment(event.start.dateTime).format("MMMM Do YYYY, h:mm a")}
        </div>
        <div className="location">{event.location}</div>
        {this.state.detailsHidden === true ? (
          <button
            type="button"
            className="show-details"
            onClick={this.onClickedShowDetails}
          >
            Show details
          </button>
        ) : (
          <div className="about-event">
            <a className="link-to-google" href={event.htmlLink}>
              See details on Google Calendar
            </a>
            <div className="description">{event.description}</div>
            <button
              className="hide-details"
              type="button"
              onClick={this.onClickedHideDetails}
            >
              Hide details
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Event;

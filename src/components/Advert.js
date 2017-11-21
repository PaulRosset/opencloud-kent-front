import React, { Component } from "react";
import {
  TransitionablePortal,
  Header,
  Segment,
  Button
} from "semantic-ui-react";

export default class Portal extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open && nextProps.open) {
      this.activePortal.ref.click();
    }
  }

  render() {
    return (
      <TransitionablePortal
        style={{ position: "relative" }}
        onOpen={this.props.handleOpen}
        onClose={this.props.handleClose}
        trigger={
          <Button
            ref={ref => (this.activePortal = ref)}
            style={{ display: "none" }}
          >
            Click me
          </Button>
        }
      >
        <Segment
          style={{
            width: "25%",
            height: "15%",
            position: "absolute",
            left: "50%",
            top: "50%",
            zIndex: 1000,
            margin: "-70px 0 0 -170px"
          }}
        >
          <Header>This is an example portal</Header>
          <p>An image has been uploaded</p>
          <p>To close, simply click away</p>
        </Segment>
      </TransitionablePortal>
    );
  }
}

import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import Portal from "./Advert";

const DropZoned = styled(Dropzone)`
  position: relative;
  border: 10px dotted #545454;
  border-radius: 20px;
  color: #000;
  font: bold 24px/200px arial;
  height: 200px;
  margin: 30px auto;
  text-align: center;
  width: 100%;
`;

const Advert = styled.p`
  font-size: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  width: 100%;
  text-align: center;
`;

export default class FormUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: [],
      rejected: [],
      openPortal: false
    };
  }

  handleOpen() {
    this.setState({
      openPortal: true
    });
  }

  handleClose() {
    this.setState({
      openPortal: false
    });
  }

  onDrop(acceptedFiles, rejectedFiles) {
    console.log(acceptedFiles, rejectedFiles);
    if (acceptedFiles) {
      console.log("Je suis LA DROPZONE FUNCTION");
      this.handleOpen();
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <DropZoned
          onDrop={(acceptedFiles, rejectedFiles) =>
            this.onDrop(acceptedFiles, rejectedFiles)
          }
          accept="application/pdf"
        >
          <Advert>
            Drop your PDF file right here, we take care of the rest{" "}
            <span role="img" aria-label="emoji happy">
              😀
            </span>
            <br />
            <Icon
              name="upload"
              size="big"
              color="grey"
              link
              bordered
              circular
              style={{ marginTop: "30px" }}
            />
          </Advert>
        </DropZoned>
        <Portal
          open={this.state.openPortal}
          handleOpen={this.handleOpen.bind(this)}
          handleClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}

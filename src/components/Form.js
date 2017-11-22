import React, { Component } from "react";
import agent from "superagent";
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
    if (acceptedFiles[0]) {
      this.handleOpen();
      agent
        .post("http://l'urlquetuveuxjeanclaude.com")
        .use(() => this.setState({ loading: true }))
        .attach(acceptedFiles[0].name, acceptedFiles[0])
        .end((err, res) => {
          if (!err) {
            this.setState({
              header: `${acceptedFiles[0].name} book has been uploaded !`,
              message: "Processing the book ...",
              color: "green",
              loading: false
            });
          }
        });
    } else if (rejectedFiles) {
      this.handleOpen();
      this.setState({
        header: `${rejectedFiles[0].name} book can't be uploaded`,
        message: `Please verify the validity format of the book, expected pdf got ${
          rejectedFiles[0].type
        }`,
        color: "red"
      });
    }
  }

  render() {
    return (
      <div>
        <DropZoned
          onDrop={(acceptedFiles, rejectedFiles) =>
            this.onDrop(acceptedFiles, rejectedFiles)
          }
          accept="application/pdf"
        >
          <Advert>
            Drop your book (pdf) file right here, we take care of the rest{" "}
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
          header={this.state.header}
          message={this.state.message}
          color={this.state.color}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

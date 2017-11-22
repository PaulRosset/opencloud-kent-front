import React, { Component } from "react";
import styled from "styled-components";
import { Segment, Grid, Divider, Advertisement } from "semantic-ui-react";

import Form from "./Form";
import { Results } from "./Result";

const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative:
`;

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BodyContainer>
        <Advertisement
          unit="leaderboard"
          test="Oh my BOOK 🧐"
          style={{ margin: "20px auto", fontSize: "20px" }}
        />
        <Divider section />
        <Grid textAlign="center">
          <Grid.Column width={10} textAlign="center">
            <Segment size="tiny" padded={true} piled>
              <Form res={body => this.setState({ result: body })} />
            </Segment>
          </Grid.Column>
        </Grid>
        <Divider section />
        {this.state.body ? (
          <Results
            header="Hello"
            meta="Im here"
            description="Im a description"
            img=""
          />
        ) : null}
      </BodyContainer>
    );
  }
}

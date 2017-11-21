import React, { Component } from "react";
import styled from "styled-components";
import { Segment, Grid, Divider, Advertisement } from "semantic-ui-react";

import Form from "./Form";

const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative:
`;

export default class Body extends Component {
  render() {
    return (
      <BodyContainer>
        <Advertisement
          unit="leaderboard"
          test="Oh my PDF 🧐"
          style={{ margin: "20px auto", fontSize: "20px" }}
        />
        <Divider section />
        <Grid textAlign="center">
          <Grid.Column width={10} textAlign="center">
            <Segment size="tiny" padded={true} piled>
              <Form />
            </Segment>
          </Grid.Column>
        </Grid>
        <Divider section />
      </BodyContainer>
    );
  }
}

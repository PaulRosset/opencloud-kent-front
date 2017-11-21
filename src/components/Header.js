import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const HeaderBar = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #2196f3;
  position: relative;
`;

const AlignVertical = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Title = styled.span`
  color: white;
  margin-left: 2rem;
  font-size: 16px;
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderBar>
        <AlignVertical>
          <Title>
            <Icon name="cloud" />OpenCloudPlatform
          </Title>
        </AlignVertical>
      </HeaderBar>
    );
  }
}

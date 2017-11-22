import React from "react";
import { Item, Label } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const ItemStyled = styled(Item)`
  display: flex;
`;

export const Results = ({ header, description, meta, img }) => (
  <Container>
    <h1>Results:</h1>
    <ItemStyled>
      <Item.Image src={img || "http://via.placeholder.com/150x150"} />
      <Item.Content style={{ marginLeft: "25px" }}>
        <Item.Header className="marginBottom" as="a">
          {header}
        </Item.Header>
        <Item.Meta className="marginBottom">
          <span className="cinema">{meta}</span>
        </Item.Meta>
        <Item.Description className="marginBottom">
          {description}
        </Item.Description>
        <Item.Extra className="marginBottom">
          <Label>IMAX</Label>
          <Label icon="globe" content="Additional Languages" />
        </Item.Extra>
      </Item.Content>
    </ItemStyled>
  </Container>
);

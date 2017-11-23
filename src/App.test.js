import React from "react";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

import App from "./App";
import Form from "./components/Form";
import Dropzone from "react-dropzone";
import { setTimeout } from "timers";

Enzyme.configure({ adapter: new Adapter() });

let wrapperForm;

describe("Test <Form /> Component", () => {
  beforeAll(() => {
    wrapperForm = shallow(<Form />);
  });

  it("Check initial <Form /> Component", () => {
    expect(wrapperForm.getElement()).toMatchSnapshot();
  });

  it("Check after change some state to <Portal /> Component", () => {
    wrapperForm.setState({
      loading: true,
      color: "#000",
      header: "Test Header",
      message: "Message Test"
    });
    expect(wrapperForm.getElement()).toMatchSnapshot();
  });
});

describe("Test <App /> Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});

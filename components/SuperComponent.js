import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";

class SuperComponent extends Component {
  constructor() {
    super();
    this.someVariable = "some variable";
  }

  alertName(title) {
    alert(title);
  }
  render() {
    return (
      <BaseLayout>
        <h1>Blogs Page</h1>
      </BaseLayout>
    );
  }
}

export default SuperComponent;

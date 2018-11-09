import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Layers extends Component {
  render() {
    return (
      <div>
        <h3>3 - Layers</h3>
        <br />
        <div class="layers">
          <ul>
            <li class="layer">
              <input
                type="checkbox"
                id="layer1"
                name="layer1"
                value="layer1"
                checked
              />
              <label for="layer1">HV Grid</label>
            </li>
            <li class="layer">
              <input
                type="checkbox"
                id="layer2"
                name="layer2"
                value="layer2"
                checked
              />
              <label for="layer2">Transformers</label>
            </li>
            <li class="layer">
              <input type="checkbox" id="layer3" name="layer3" value="layer3" />
              <label for="layer3">Schools</label>
            </li>
            <li class="layer">
              <input type="checkbox" id="layer4" name="layer4" value="layer4" />
              <label for="layer4">Schools</label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layers)
);

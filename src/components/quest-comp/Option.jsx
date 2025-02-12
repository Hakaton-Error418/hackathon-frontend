import { Component } from "react";

export default class Option_card extends Component {
  render() {
    const { name } = this.props;
    return (
      <li className="bg-gray-300 rounded-2xl px-3 py-0.5 cursor-pointer">
        <p>{name}</p>
      </li>
    );
  }
}

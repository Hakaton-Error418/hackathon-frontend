import StarRatings from "react-star-ratings";
import { Component } from "react";

export class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0, 

    };

    this.changeRating = this.changeRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeRating(newRating, name) {
    this.setState({ rating: newRating });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Підтверджений рейтинг:", this.state.rating);
    localStorage.setItem("Обраний рейтинг", this.state.rating)

  }

  render() {
    return (
      <div>
        <StarRatings
          rating={this.state.rating}
          starRatedColor="red"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
        />
        <button type="submit" onClick={this.handleSubmit}>Підвердити</button>
      </div>
    );
  }
}


import { Component } from 'react'
import { useQuery, gql } from "@apollo/client";
import StarRatings from 'react-star-ratings';
const GET_USER1 = gql`
query {
  getUsers {
    rating
  }
}
`;
export const ProfileRating = () => {
    let { loading, error, data } = useQuery(GET_USER1);

    const rating = data?.getUsers?.rating || 0;
  
    return (
      <StarRatings   
        rating={rating}
        starRatedColor="blue"
        numberOfStars={5}
        name="rating"
        starDimension="45px"
      />
    );
  };
  

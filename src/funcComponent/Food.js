import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
    {
        nam: "라면",
        pic: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFjpVP%2FbtqIghtnuT1%2FhSMMXzgdLKdTcneMz5xn3K%2Fimg.jpg",
        rating: 4
    },
    {
        nam: "삼겹살",
        pic: "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
        rating: 4.5
    }
];

function Food() {

    return (
        <div>
            {/* {foodILike.map(function (item) { return <FoodLike foodName={item.nam} picture={item.pic} />; })} */}
            {/* {foodILike.map((item, index) => <FoodLike foodName={item.nam} picture={item.pic} key={index} />)} */}
            {foodILike.map(renderFood)}
        </div>
    );
}

FoodLike.propTypes = {
    foodName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function renderFood(dish, index) {
    console.log(dish);
    return <FoodLike foodName={dish.nam} picture={dish.pic} rating={dish.rating} key={index} />
}

function FoodLike({ foodName, picture, rating }) {

    return (
        <div>
            <h1>{foodName}</h1>
            <h3>{rating}/5</h3>
            <img src={picture} alt={foodName} />
        </div>
    );
}


export default Food;
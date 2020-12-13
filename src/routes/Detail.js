import React from "react";

// function Detail(props) {
//     console.log(props);
//     return <span>hello</span>
// }


class Detail extends React.Component {

    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        console.log(location.state);
        if (location.state === undefined) {
            history.push("/");
        }

    }

    render() {
        const { location: { state } } = this.props;

        if (state) {
            return (
                <div>
                    <h1>{state.title}</h1>
                    <img src={state.poster} alt={state.title} title={state.title} />
                    <div className="movie__data">
                        <h3 className="movie__title">{state.title}</h3>
                        <h3 className="movie__year">{state.year}</h3>
                        <h3 className="movie__summary">{state.summary.slice(0, 140)}...</h3>
                        <ul className="movie__genres">
                            {state.genres.map((genre, index) => (<li key={index} className="genres__genre">{genre}</li>))}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return null;
        }

    }
}

export default Detail;
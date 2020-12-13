import React from "react";
import "./Detail.css";

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
                <div className="detail">
                    <div className="detail__title">
                        <h1 className="movie__title">{state.title}</h1>
                    </div>
                    <div className="detail__container">
                        <div className="left">
                            <img src={state.poster} alt={state.title} title={state.title} />

                        </div>
                        <div className="right">
                            <ul className="movie__genres">
                                <h3 className="movie__year">year : {state.year}</h3>
                                <h3 className="movie__year" style={{ marginBottom: "5px" }}>genre</h3>
                                {state.genres.map((genre, index) => (<li key={index} className="genres__genre">{genre}</li>))}
                            </ul>
                        </div>
                    </div>
                    <div className="detail__content">
                        <h3 className="movie__summary">{state.summary}</h3>
                    </div>
                </div >
            )
        } else {
            return null;
        }

    }
}

export default Detail;
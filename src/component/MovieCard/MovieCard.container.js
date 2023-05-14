import { PureComponent } from 'react';

import MovieCardComponent from './MovieCard.component';

class MovieCard extends PureComponent {

    containerProps() {
        const { 
            movie
        } = this.props;

        return {
            movie
        }
    }

    containerFunctions() {}

    renderMovieCard() {
        return (
            <MovieCardComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderMovieCard();
    }
}

export default MovieCard;
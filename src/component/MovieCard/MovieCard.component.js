import { PureComponent } from 'react';

import SelectVenue from '../SelectVenue';

import './MovieCard.style.scss';

class MovieCard extends PureComponent {

    state = {
        isViewMoreOpen: false,
        selectedVenue: '',
        redirectUrl: ''
    }

    handleSelectChange = (event) => {
        this.setState({ selectedVenue: event.target.value });
    };

    handleViewMore() {
        this.setState({ isViewMoreOpen: true });
    }

    handleViewLess() {
        this.setState({ isViewMoreOpen: false, selectedVenue: '' });
    }

    renderViewMoreButton() {
        return (
            <button 
                className='MovieCard-ViewMoreButton'
                onClick={() => this.handleViewMore() }
            >
                {'View More'}
            </button>
        );
    }

    renderBuyTicketButton() {
        const { movie: { url } } = this.props;
        const { selectedVenue } = this.state;

        let redirectUrl = selectedVenue === 'sterkinekor' ? url.sterkUrl : url.labiaUrl;

        this.setState({ redirectUrl });

        const isDisabled = (selectedVenue.length <= 0 || redirectUrl.length <= 0 ) && "MovieCard-BuyTicketButton_isDisabled";

        if (selectedVenue.length <= 0 || redirectUrl.length <= 0 ) {
            return (
                <button className={`MovieCard-BuyTicketButton ${isDisabled}`}>
                    {'Buy Ticket'}
                </button>
            );
        }

        return (
            <a className='Link' href={redirectUrl} target="_blank" rel="noreferrer">
                <button className={`MovieCard-BuyTicketButton`} onClick={() => this.handleViewLess()}>
                    {'Buy Ticket'}
                </button>
            </a>
        );
    }

    renderGenre(genre) {
        return (
            <div className='MovieCard-Genre' key={genre}>
                { genre }
            </div>
        );
    }

    renderGenreList() {
        const { movie: { genre } } = this.props;
        const { isViewMoreOpen } = this.state;

        if (isViewMoreOpen) {
            return (
                <div></div>
            );
        }

        return (
            <div className='MovieCard-GenreList'>
                { genre.map(this.renderGenre) }
            </div>
        );
    }

    renderPG(pg) {
        let pgColor = "MovieCard-PG_R";

        if (pg === 'PG') {
            pgColor = "MovieCard-PG_PG";
        }

        if (pg === 'PG-13') {
            pgColor = "MovieCard-PG_13";
        }

        return (
            <p className={`MovieCard-PG ${pgColor}`} key={pg}>
                { pg }
            </p>
        );
    }

    renderPGList() {
        const { movie: { pg_rating: pgList } } = this.props;

        return (
            <div className='MovieCard-PGList'>
                { pgList.map(this.renderPG) }
            </div>
        );
    }

    renderTitle() {
        const { movie: { title } } = this.props;
        const { isViewMoreOpen } = this.state;

        const isOpen = isViewMoreOpen && 'MovieCard-Title_isOpen';

        return (
          <h2 className={`MovieCard-Title ${isOpen}`}> {title} </h2>
        );
    }

    renderViewMore() {
        return (
            <div className='MovieCard-ViewMore'>
                <div className='MovieCard-ViewMoreContent'>
                    <div>
                        { this.renderPGList() }
                        { this.renderTitle() }
                        { this.renderGenreList() }
                        { this.renderViewMoreButton() }
                    </div>
                </div>
            </div>
        );
    }

    renderViewLessIcon() {
        const close = `${process.env.PUBLIC_URL}/assets/icons/menu/red-cross.png`;

        return (
            <div
                className='MovieCard-ViewLessIcon'
                onClick={() => this.handleViewLess()}
            >
                <img 
                    className='' 
                    src={close} 
                    alt='close icon'
                />
            </div>
        );
    }

    renderViewLessContainer() {
        return (
            <div className='MovieCard-ViewLessContainer'>
                <div></div>
                { this.renderViewLessIcon() }
            </div>
        );
    }

    renderContentCard(key, value) {
        return (
            <div className='MovieCard-ContentCard'>
                <div className='MovieCard-ContentCardKey'>
                    { key }
                </div>
                <div className='MovieCard-ContentCardValue'>
                    { value }
                </div>
            </div>
        );
    }

    renderMovieInfo() {
        const { movie: { date, length } } = this.props;
        const { selectedVenue } = this.state;

        return (
            <div className='MovieCard-MovieInfo'>
                { this.renderContentCard('date', date) }
                { this.renderContentCard('length', length) }
                { selectedVenue.length > 0 && this.renderContentCard('venue', selectedVenue) }
            </div>
        );
    }

    renderSelectVenue() {
        const { selectedVenue } = this.state;

        return (
            <SelectVenue
                selectedVenue={selectedVenue}
                handleSelectChange={this.handleSelectChange}
            />
        );
    }

    renderViewLess() {
        return (
            <div className='MovieCard-ViewLess'>
                <div className='MovieCard-ViewMoreContent'>
                    <div>
                        { this.renderViewLessContainer()}
                        { this.renderPGList() }
                        { this.renderTitle() }
                        { this.renderGenreList() }
                        { this.renderSelectVenue() }
                        { this.renderMovieInfo() }
                        { this.renderBuyTicketButton() }
                    </div>
                </div>
            </div>
        );
    }

    renderMovie() {
        const { movie: { id, imgUrl } } = this.props;
        const { isViewMoreOpen } = this.state;
        
        return (
            <div className='MovieCard-MoviesImage' key={id}>
                <img 
                    className='MovieCard-MoviesImg' 
                    src={imgUrl} 
                    alt='movie' 
                />
                { isViewMoreOpen === false ? this.renderViewMore() : this.renderViewLess() }
            </div>
        );
    }

    render() {
        return this.renderMovie();
    }
}

export default MovieCard;
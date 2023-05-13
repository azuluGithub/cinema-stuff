import { PureComponent } from 'react';

import './Movies.style.scss';

class MoviesComponent extends PureComponent {

    state = {
        isViewMoreOpen: true,
    }

    handleViewMoreButton(isViewMoreOpen) {
        this.setState({ isViewMoreOpen: !isViewMoreOpen });
    }

    renderViewMoreButton(isViewMoreOpen) {
        return (
            <button 
                className='Movies-ViewMoreButton'
                onClick={() => this.handleViewMoreButton(isViewMoreOpen) }
            >
                {'View More'}
            </button>
        );
    }

    handleBuyTicketButton() {
       //buy ticket
    }

    renderBuyTicketButton() {
        return (
            <button 
                className='Movies-BuyTicketButton'
                onClick={() => this.handleBuyTicketButton() }
            >
                {'Buy Ticket'}
            </button>
        );
    }

    renderGenre(genre) {
        return (
            <div className='Movies-Genre' key={genre}>
                { genre }
            </div>
        );
    }

    renderGenreList(genre) {
        return (
            <div className='Movies-GenreList'>
                { genre.map(this.renderGenre.bind(this)) }
            </div>
        );
    }

    renderPG(pg) {
        let pgColor = "Movies-PG_R";

        if (pg === 'PG') {
            pgColor = "Movies-PG_PG";
        }

        if (pg === 'PG-13') {
            pgColor = "Movies-PG_13";
        }

        return (
            <p className={`Movies-PG ${pgColor}`} key={pg}>
                { pg }
            </p>
        );
    }

    renderPGList(pgList) {
        return (
            <div className='Movies-PGList'>
                { pgList.map(this.renderPG.bind(this)) }
            </div>
        );
    }

    renderTitle(title) {
        return (
          <h2 className='Movies-Title'>
            {title}
          </h2>
        );
      }

    renderViewMore({ pg_rating, title, genre }, isViewMoreOpen) {
        return (
            <div className='Movies-ViewMore'>
                <div className='Movies-ViewMoreContent'>
                    <div>
                        { this.renderPGList(pg_rating) }
                        { this.renderTitle(title) }
                        { this.renderGenreList(genre) }
                        { this.renderViewMoreButton(isViewMoreOpen) }
                    </div>
                </div>
            </div>
        );
    }

    handleViewLessButton(isViewMoreOpen) {
        this.setState({ isViewMoreOpen: isViewMoreOpen });
    }

    renderViewLessIcon(isViewMoreOpen) {
        const close = `${process.env.PUBLIC_URL}/assets/icons/menu/red-cross.png`;

        return (
            <div 
                className='Movies-ViewLessIcon'
                onClick={() => this.handleViewLessButton(isViewMoreOpen)}
            >
                <img 
                    className='' 
                    src={close} 
                    alt='close icon'
                />
            </div>
        );
    }

    renderViewLessContainer(isViewMoreOpen) {
        return (
            <div className='Movies-ViewLessContainer'>
                <div></div>
                { this.renderViewLessIcon(isViewMoreOpen) }
            </div>
        );
    }

    renderViewLess({ pg_rating, title, genre }, isViewMoreOpen) {
        return (
            <div className='Movies-ViewLess'>
                <div className='Movies-ViewMoreContent'>
                    <div>
                        { this.renderViewLessContainer(isViewMoreOpen)}
                        { this.renderPGList(pg_rating) }
                        { this.renderTitle(title) }
                        { this.renderGenreList(genre) }
                        { this.renderBuyTicketButton() }
                    </div>
                </div>
            </div>
        );
    }

    renderMovie(movie, isViewMoreOpen) {
        const { id, imgUrl } = movie;
        
        return (
            <div className='Movies-MoviesImage' key={id}>
                <img 
                    className='Movies-MoviesImg' 
                    src={imgUrl} 
                    alt='movie' 
                />
                { isViewMoreOpen === false ? this.renderViewMore(movie, isViewMoreOpen) : this.renderViewLess(movie, isViewMoreOpen) }
            </div>
        );
    }

    renderContent() {
        const { movies } = this.props;
        const { isViewMoreOpen } = this.state;

        return (
            <div className='Movies-Container'>
                { movies.map((movie) => this.renderMovie(movie, isViewMoreOpen)) }
            </div>
        );
    }

    renderComponents() {
        return (
            <section className='Movies'>
                <div className='ContainerWrapper PaddedContainer'>
                    { this.renderContent() }
                </div>
            </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default MoviesComponent;
import { PureComponent } from 'react';

import MovieCard from '../MovieCard';

import './Movies.style.scss';

class MoviesComponent extends PureComponent {

    renderContent() {
        const { movies } = this.props;

        return (
            <div className='Movies-Container'>
                { movies.map((movie) => {
                    return (
                        <MovieCard 
                            key={movie.id}
                            movie={movie}
                        />)
                    })
                }
            </div>
        );
    }

    renderTopTitle() {
        return (
          <p className='Movies-TopTitle'>
            {'Upcoming Movies'}
          </p>
        );
    }

    renderDivider() {
        return (
            <div className='Movies-Divider'></div>
        );
    }
    
    renderTopSubTitle() {
        return (
            <div className='Movies-TopSubTitle'>
                {'Sep 7, 2023 - Sep 14, 2023'}
            </div>
        );
    }

    renderComponents() {
        return (
            <section className='Movies'>
                <div className='ContainerWrapper PaddedContainer'>
                    { this.renderTopTitle() }
                    { this.renderDivider() }
                    { this.renderTopSubTitle() }
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
import { PureComponent } from 'react';

import MoviesComponent from './Movies.component';

class Movies extends PureComponent {

    movies = [
        {
            id: 'avatar',
            url: '/404-page-not-found',
            title: "avatar 2",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/avatar.jpg`,
            pg_rating: ["PG-13"],
            genre: ["action", "thriller", "fantasy"],
            date: "Sep 7, 2023",
            length: "3h 12min",
        },
        {
            id: 'central-intelligence',
            url: '/404-page-not-found',
            title: "central intelligence",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/central-intelligence.png`,
            pg_rating: ["PG-13"],
            genre: ["comedy", "crime", "buddy", "action"],
            date: "Sep 8, 2023",
            length: "1h 54min"
        },
        {
            id: 'criminal',
            url: '/404-page-not-found',
            title: "criminal",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/criminal.jpg`,
            pg_rating: ["R"],
            genre: ["drama", "mystery", "science fiction"],
            date: "Sep 9, 2023",
            length: "1h 53min"
        },
        {
            id: 'ella-enchanted',
            url: '/404-page-not-found',
            title: "ella enchanted",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/ella-enchanted.jpg`,
            pg_rating: ["PG"],
            genre: ["children", "family"],
            date: "Sep 10, 2023",
            length: "1h 41min"
        },
        {
            id: 'goodfellas',
            url: '/404-page-not-found',
            title: "good fellas",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/goodfellas.jpg`,
            pg_rating: ["R"],
            genre: ["suspense", "crime", "detective"],
            date: "Sep 10, 2023",
            length: "2h 26min"
        },
        {
            id: 'hair-spray',
            title: "hair spray",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/hair-spray.jpg`,
            pg_rating: ["PG"],
            genre: ["musical", "comedy", "drama", "children"],
            date: "Sep 11, 2023",
            length: "1h 56min"
        },
        {
            id: 'hop',
            url: '/404-page-not-found',
            title: "hop",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/hop.jpg`,
            pg_rating: ["PG"],
            genre: ["animation", "fantasy", "children"],
            date: "Sep 12, 2023",
            length: "1h 35min"
        },
        {
            id: 'interstellar',
            title: "interstellar",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/interstellar.jpg`,
            pg_rating: ["PG-13"],
            genre: ["adventure", "mystery", "science fiction"],
            date: "Sep 12, 2023",
            length: "2h 49min"
        },
        {
            id: 'predestination',
            url: '/404-page-not-found',
            title: "predestination",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/predestination.jpg`,
            pg_rating: ["R"],
            genre: ["fantasy", "mystery", "science fiction"],
            date: "Sep 13, 2023",
            length: "1h 37min"
        },
        {
            id: 'the-boss-baby',
            url: '/404-page-not-found',
            title: "the boss baby",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/the-boss-baby.jpg`,
            pg_rating: ["PG"],
            genre: ["buddy", "comedy", "animation", "children"],
            date: "Sep 13, 2023",
            length: "1h 37min"
        },
        {
            id: 'the-girl-next-door',
            title: "the girl nextdoor",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/the-girl-next-door.jpg`,
            pg_rating: ["R"],
            genre: ["teen", "romance", "drama"],
            date: "Sep 13, 2023",
            length: "1h 48min"
        },
        {
            id: 'warm-bodies',
            url: '/404-page-not-found',
            title: "warm bodies",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/warm-bodies.png`,
            pg_rating: ["PG-13"],
            genre: ["zombie", "horror"],
            date: "Sep 14, 2023",
            length: "1h 37min"
        },
        {
            id: 'zootopia',
            url: '/404-page-not-found',
            title: "zootopia",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/zootopia.jpg`,
            pg_rating: ["PG"],
            genre: ["animation", "children", "buddy"],
            date: "Sep 14, 2023",
            length: "1h 48min"
        },
        {
            id: 'john-wick',
            url: 'https://www.sterkinekor.com/details/HO00002615/cinema/the-zone-@-rosebank/john-wick-chapter-four',
            title: "john wick 4",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/john-wick.jpg`,
            pg_rating: ["R"],
            genre: ["action", "thriller", "crime"],
            date: "May 18, 2023",
            length: "2h 49min"
        },
        {
            id: 'hypnotic',
            url: 'https://www.webtickets.co.za/v2/Event.aspx?itemid=1529362143',
            title: "hypnotic",
            imgUrl: `${process.env.PUBLIC_URL}/assets/images/movie-list/hypnotic.jpg`,
            pg_rating: ["R"],
            genre: ["thriller"],
            date: "May 12, 2023",
            length: "1h 32min"
        }
    ];

    containerProps() {
        const { movies } = this;

        return {
            movies
        }
    }

    containerFunctions() {}

    renderComponent() {
        return (
            <MoviesComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default Movies;
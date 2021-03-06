import React from 'react'
import {
  Container,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'
import axios from 'axios'

class ComingSoon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      genres: new Map(),
      page: 1,
      totalPages: 1
    }
  }

  componentDidMount = () => {
    this.fetchMovies()
  }

  // Fetch pages recursively until all the pages were fetched
  fetchMovies = () => axios.get(`https://api.themoviedb.org/3/movie/upcoming?page=${this.state.page}&api_key=f1be4bafe6f7cb0cb84f5948c5b75497`)
    .then((response) => {
      this.setState(prevState => ({
        movies: [...prevState.movies, ...response.data.results],
        page: prevState.page + 1,
        totalPages: response.data.total_pages
      }))
    })
    .then(() => {
      if (this.state.page <= this.state.totalPages) {
        this.fetchMovies()
      }
    })
    .then(() => {
      axios.get('http://api.themoviedb.org/3/genre/movie/list?api_key=f1be4bafe6f7cb0cb84f5948c5b75497')
        .then((response) => {
          response.data.genres.forEach((genre) => {
            this.setState(prevState => ({
              genres: prevState.genres.set(genre.id, genre.name)
            }))
          })
        })
    })

  render() {
    const { movies } = this.state
    return (
      <div>
        <Container>
          <Row>
            {
              movies.filter(movie => movie.genre_ids.includes(28)).map(movie => (
                <Card key={movie.id}>
                  <CardImg top height={200} width="auto" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <CardBody>
                    <CardTitle>{movie.title}</CardTitle>
                    <CardSubtitle>
                      Date de sortie:&nbsp;
                      { new Date(movie.release_date).toLocaleString('fr-ch') }
                      <br />
                      Genres:
                      {' '}
                      {
                        movie.genre_ids.map(id => `${this.state.genres.get(id)} `)
                      }
                    </CardSubtitle>
                  </CardBody>
                </Card>
              ))
            }
          </Row>
        </Container>
      </div>
    )
  }
}

export default ComingSoon

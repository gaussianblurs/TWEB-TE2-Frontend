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

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      genres: new Map(),
      selectedMovies: []
    }
  }

  componentDidMount = () => {
    axios.get('https://api.themoviedb.org/3/movie/popular?page=1&api_key=f1be4bafe6f7cb0cb84f5948c5b75497')
      .then((response) => {
        this.setState({
          movies: response.data.results
        })
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
  }

  selectMovie = (index) => {
    const indexInSelectedMovies = this.state.selectedMovies.indexOf(index)
    const selectedMovies = [...this.state.selectedMovies]
    if (indexInSelectedMovies > -1) {
      selectedMovies.splice(indexInSelectedMovies, 1)
      this.setState({
        selectedMovies
      })
    } else {
      this.setState(prevState => ({
        selectedMovies: [...prevState.selectedMovies, index]
      }))
    }
  }

  render() {
    const { movies } = this.state
    return (
      <div>
        <Container>
          <Row>
            {
              movies.map((movie, index) => (
                <Card key={movie.id} onClick={() => this.selectMovie(index)} style={this.state.selectedMovies.includes(index) ? { border: '2px solid red' } : {}}>
                  <CardImg top height={200} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <CardBody>
                    <CardTitle>{movie.title}</CardTitle>
                    <CardSubtitle>
                      Date de sortie:
                      {' '}
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

export default Home

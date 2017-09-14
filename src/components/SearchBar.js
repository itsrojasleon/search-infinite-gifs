import React, { Component } from 'react';
import api from '../services/api';
import Gif from './Gif';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      term: '',
      limit: 12,
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.scrolling = this.scrolling.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolling);
  }

  handleChange(term) {
    this.setState({
      term: term.target.value,
    })
  }

  async handleSubmit(e) {
    e.preventDefault();

    const response = await api.gifs.getGifs(this.state.term, this.state.limit);
    const gifs = response.data;

    this.setState({
      gifs,
      limit: 12,
      loading: false,
    });
  }

  async scrolling() {

    if(this.state.loading) return null;

    const scrolled = window.scrollY;
    const vhHeigth = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if(!(scrolled + vhHeigth + 450 >= fullHeight)) {
      return null;
    }

    this.setState({ loading: true }, async () => {
      const response = await api.gifs.getGifs(this.state.term, this.state.limit);
      const gifs = response.data;

      this.setState({
        gifs: gifs,
        limit: this.state.limit + 12,
        loading: false,
      });
    })
  }

  render() {
    return (
      <div>
        <div className="container-fluid container-search-bar">
          <div className="row">
            <div className="col s12 l6 offset-l3">
              <form onSubmit={this.handleSubmit}>
                <input className="search-bar" type="text" placeholder="Busca tu Gifs favoritos" onChange={this.handleChange} />
              </form>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {this.state.gifs
              .map((gif) => <Gif key={gif.id} {...gif} />)}
          </div>
        </div>
      </div>
    )
  }
}
export default Home;

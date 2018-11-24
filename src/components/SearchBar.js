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
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolling);
  }

  handleChange = term => {
    this.setState({
      term: term.target.value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.gifs.getGifs(this.state.term, this.state.limit);
    const gifs = response.data;

    this.setState({
      gifs,
      limit: 12,
      loading: false,
    });
  }

  scrolling = async () => {

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
        <div>
          <div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search here!" onChange={this.handleChange} />
              </form>
            </div>
          </div>
        </div>
        <div>
          <div>
            {this.state.gifs
              .map((gif) => <Gif key={gif.id} {...gif} />)}
          </div>
        </div>
      </div>
    )
  }
}
export default Home;

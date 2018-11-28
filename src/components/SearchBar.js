import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchGifs, fetchStickers, cancelGifs, cancelStickers } from '../actions';

const TextInput = styled.input`
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 1em;
  border: none;
  background-color: rgb(80,80,80);
  color: white;
  &:focus {
    outline: none;
  }
`;
const SubmitInput = styled.input`
  display: none;
  @media(max-width: 769px) {
    background-color: black;
    color: white;
    padding: 5px 10px; 
    border: none;
    border-radius: 10px;
    font-size: .8em;
    display: block;
  }
`;

function Home(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     gifs: [],
  //     term: '',
  //     limit: 12,
  //     loading: true,
  //   };
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.scrolling);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.scrolling);
  // }

  const [term, useTerm] = useState('');
  const handleChange = ({ target: { value } }) => {
    return useTerm(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (props.toggle === false) {
      props.fetchGifs(term, 12);
      props.cancelStickers();
    } else {
      props.fetchStickers(term, 12);
      props.cancelGifs();
    }
    
    // const response = await api.gifs.getGifs(this.state.term, this.state.limit);
    // const gifs = response.data;

    // this.setState({
    //   gifs,
    //   limit: 12,
    //   loading: false,
    // });
  }

  // scrolling = async () => {

  //   if(this.state.loading) return null;

  //   const scrolled = window.scrollY;
  //   const vhHeigth = window.innerHeight;
  //   const fullHeight = document.body.clientHeight;

  //   if(!(scrolled + vhHeigth + 450 >= fullHeight)) {
  //     return null;
  //   }

  //   this.setState({ loading: true }, async () => {
  //     const response = await api.gifs.getGifs(this.state.term, this.state.limit);
  //     const gifs = response.data;

  //     this.setState({
  //       gifs: gifs,
  //       limit: this.state.limit + 12,
  //       loading: false,
  //     });
  //   })
  // }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput type="text" placeholder={`Search ${props.toggle ? 'Stickers' : 'Gifs'}`} onChange={handleChange} />
        <SubmitInput type="submit" value="Submit" />
      </form>
      {/* <div>
        {this.state.gifs
          .map((gif) => <Gif key={gif.id} {...gif} />)}
      </div> */}
    </div>
  )
}
function mapStateToProps({ toggle }) {return { toggle }}
export default connect(mapStateToProps, { fetchGifs, fetchStickers, cancelGifs, cancelStickers })(Home);

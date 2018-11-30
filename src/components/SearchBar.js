import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchGifs, fetchStickers, cancelGifs, cancelStickers } from '../actions';

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 30%;
  padding: 10px; 
  @media(max-width: 769px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
  }
`;
const TextInput = styled.input`
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 1em;
  border: 1px solid rgb(236,235,235);
  background-color: white;
  font-family: "Colfax Regular";
  color: black;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid rgb(0,143,255);
  }
`;
const C = styled.div`
  width: 100%;
`;
const Search = styled.i`@media(max-width: 769px){display: none;}`;

const ButtonSubmit = styled.button`
  display: none;
  @media(max-width: 769px) {
    background-color: black;
    color: white;
    padding: 6px 14px;
    border: none;
    border-radius: 3px;
    font-size: .8em;
    display: block;
    width: 15%;
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
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <C>
          <TextInput type="text" placeholder={`Search ${props.toggle ? 'Stickers' : 'Gifs'}`} onChange={handleChange} />
          <Search style={{ fontSize: '1.2em' }} className="fas fa-search"></Search>
        </C>
        <ButtonSubmit type="submit"><i style={{ fontSize: '1.2em' }} className="fas fa-search"></i></ButtonSubmit>
      </Form>
    </FormContainer>
  )
}
function mapStateToProps({ toggle }) {return { toggle }}
export default connect(mapStateToProps, { fetchGifs, fetchStickers, cancelGifs, cancelStickers })(Home);

import React, { useState, useEffect } from 'react';
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
    position: relative;
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
  text-indent: 20px;
  &:focus {
    outline: none;
    border: 1px solid rgb(0,143,255);
  }
  @media(max-width: 769px) {
    text-indent: 0;
  }
`;
const C = styled.div`
  width: 100%;
  position: relative;
`;
const Search = styled.i`
  position: absolute;
  top: 9px;
  left: 7px;
  font-size: .9em;
  color: rgb(187,187,187);
  @media(max-width: 769px){
    display: none;
  }
`;

const ButtonSubmit = styled.button`
  display: none;
  @media(max-width: 769px) {
    position: absolute;
    background-color: rgb(0,143,255);
    color: white;
    padding: 7px 14px;
    border: none;
    border-radius: 3px;
    font-size: .8em;
    display: block;
    width: 15%;
    right: 11px;
  }
`;

function Home(props) {
  const [term, useTerm] = useState('');
  const [count, useCount] = useState(12);
  const handleChange = ({ target: { value } }) => {
    return useTerm(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!props.toggle) {
      props.fetchGifs(term, 12);
      props.cancelStickers();
    } else {
      props.fetchStickers(term, 12);
      props.cancelGifs();
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrolled);
    return () => {
      window.removeEventListener('scroll', scrolled);
    }
  });

  const scrolled = () => {
    const scrolled = window.scrollY;
    const vhHeigth = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if(!(scrolled + vhHeigth + 500 >= fullHeight)) return;
    useCount(count + 12);
    if (!props.toggle) {
      props.fetchGifs(term, count);
      props.cancelStickers();
    } else {
      props.fetchStickers(term, count);
      props.cancelGifs();
    }
  }
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <C>
          <TextInput type="text" placeholder={`Search ${props.toggle ? 'Stickers' : 'Gifs'}`} onChange={handleChange} />
          <Search className="fas fa-search"></Search>
        </C>
        <ButtonSubmit type="submit"><i style={{ fontSize: '1.2em' }} className="fas fa-search"></i></ButtonSubmit>
      </Form>
    </FormContainer>
  )
}
function mapStateToProps({ toggle }) {return { toggle }}
export default connect(mapStateToProps, { fetchGifs, fetchStickers, cancelGifs, cancelStickers })(Home);

import styled from 'styled-components';
import media from "styled-media-query";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #090707ef;

    ${media.lessThan('small')`
    font-size: 1rem;
    `};

  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #151010d8;
  margin: 2rem;

  ${media.lessThan('small')`
  font-size: 1.5rem;
  margin: 1rem 0;
  `};
 
`;

export const Button = styled.button`
  background: #f51f1fd7;
  color: #fff;
  border-radius: 5px;
  border: none;
  width: 8rem;
  height: 3.5rem;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1.5rem;

  ${media.lessThan('small')`
  width: 5rem;
  height: 2rem;
  margin-top: 1.5rem;
  `};
  
  `;

export const InputValue = styled.input`
  width: 30rem;
  height: 3rem;
  border-radius: 0.3rem;
  border: none;
  font-size: 1rem;
  padding: 1rem;

  ${media.lessThan('small')`
  width: 15rem;
  height: 1.5rem;
  margin-top: 1.5rem;
  `};

  `;

export const Card = styled.div`
  margin: 1rem;
  width: 30rem;
  height: 25rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 9px 3px rgba(0,0,0,0.50);

  ${media.lessThan('small')`
  width: 18rem;
  height: 20rem;
  `};
  
  h1{
    text-transform: capitalize;
    text-align: center;

  ${media.lessThan('small')`
    font-size: 1.5rem;  
  `};

  }
  
  img{
    width: 15rem;
    height: 15rem;
  }
  
  `;

export const CartData = styled.div`
    display: flex;
    justify-content:space-evenly ;
    width: 30rem;
    height: 5rem;

    ${media.lessThan('small')`
    font-size: 0.8rem; 
    display: flex;
    justify-content:space-evenly; ;
    width: 15rem;
    height: 5rem;
    `};

  `;

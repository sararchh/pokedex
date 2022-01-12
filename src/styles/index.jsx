import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #090707ef;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #151010d8;
  margin: 2rem;
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
  `;

export const InputValue = styled.input`
  width: 30rem;
  height: 3rem;
  border-radius: 0.3rem;
  border: none;
  font-size: 1rem;
  padding: 1rem;
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
  
  h1{
    text-transform: capitalize;
    text-align: center;
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
  `;

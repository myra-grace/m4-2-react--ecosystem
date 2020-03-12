import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { items } from '../data';
import ListingGrid from './ListingGrid';

let fruitsObj = Object.values(items);
console.log('fruitsObj: ', fruitsObj);

function Homepage(props) {
    return (
      <>
        <Ptag>Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:</Ptag>

        <Productsdiv>
            {fruitsObj.map(item => {
                return <Link to={`/items/${item.id}`}><ListingGrid imageSrc={item.imageSrc} name={item.name} latinName={item.latinName}
                /></Link>})}
        </Productsdiv>
      </>
    )
};

const Ptag = styled.p`
  font-family: arial;
`
const Productsdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-decoration: none;
    font-family: arial;
  }
}
`

export default Homepage;
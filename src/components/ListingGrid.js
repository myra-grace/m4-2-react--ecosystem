import React from 'react';
import styled from 'styled-components';

function ListingGrid(props) {
    return (
        <Productsdiv>
            <ImageContainer src={props.imageSrc} alt='fruit image'/>
            <h2>{props.name}</h2>
            <p><i>{props.latinName}</i></p>
        </Productsdiv>
    );
};

const Productsdiv = styled.div`
  list-style-type: none;
  text-align: left;
  margin: 10px;
  padding: 10px;
  text-align: center;

  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px lightgrey;

  &:hover {
    cursor: pointer;
}
`
const ImageContainer = styled.img`
  height: 200px;
  width: 200px;
}
`

export default ListingGrid;
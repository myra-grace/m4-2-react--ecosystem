import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { items } from '../data';
import { sellers } from'../data';

function ItemDetails() {
    const { itemId } = useParams();

    let objects = Object.values(items);
    function getInfo(object) {
        return object.id === itemId;
    }
    let clickedObject = objects.find(getInfo);

    let sellersObjects = Object.values(sellers);
    function getSeller(object) {
        return object.id === clickedObject.sellerId;
    }
    let theSeller = sellersObjects.find(getSeller);

    return (
      <Container>
        <ImageBox src={clickedObject.imageSrc} alt='product image' />
        <Separator>
            <InfoContainer>
                <div>
                    <h2>{clickedObject.name}</h2>
                    <i>{clickedObject.latinName}</i>
                </div>

                <div>
                    <StyledP>{clickedObject.description}</StyledP>
                    <i>Product of <b>{clickedObject.countryOfOrigin}</b></i>
                </div>

                <StyledButton>${clickedObject.price} - Buy now</StyledButton>

                <SellerContainer>
                    <SellerAvatar src={theSeller.avatarSrc} alt='seller avatar'/>
                    <StyledP>Sold by: <b>{theSeller.description}</b></StyledP>
                </SellerContainer>
            </InfoContainer>
        </Separator>
      </Container>
    );
};


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 80%;
  height: 70%;

  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px lightgrey;
}
`
const StyledP = styled.p`
  font-family: arial;
`
const ImageBox = styled.img`
  width: 40%;
  border-radius: 8px;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto auto auto 20px;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}
`
const Separator = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 50%;
`
const InfoContainer = styled.div`
  margin: 20% 20px;
`
const StyledButton = styled.button`
  background-color: magenta;
  border: none;
  border-radius: 8px;
  margin: 20px 0;
  height: 40px;
  width: 200px
  color: white;
}
`
const SellerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
}
`
const SellerAvatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  margin-right: 10px;
}
`

export default ItemDetails;
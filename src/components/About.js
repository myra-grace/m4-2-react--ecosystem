import React from 'react';
import styled from 'styled-components';

function About(props) {
    return (
        <StyledPtag>Fruit emporium is founded on a very simple principle: Fruit is good.
        We carry the finest selection of produce from around the world, from tart 
        citrus to sweet cherries. Our sellers are world-class, and your fruit is 
        guaranteed to be worthy of auction in Asian markets.</StyledPtag>
    )
};

const StyledPtag = styled.p`
  font-family: arial;
`

export default About;
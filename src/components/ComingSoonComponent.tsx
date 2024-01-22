import React from 'react';
import ComingSoonAnimation from './ComingSoonAnimation';
import {
ComingSoonContainer,
Heading,
SubText
} from './ComingSoonStyles'

const ComingSoonComponent = () => {
  
    return (
      <ComingSoonContainer>
        <ComingSoonAnimation />
        <Heading>Coming Soon!</Heading>
        <SubText>We're doing our best to serve you better.</SubText>
      </ComingSoonContainer>
    );
  };

export default ComingSoonComponent;
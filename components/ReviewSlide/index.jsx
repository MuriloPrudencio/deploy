import React from 'react';
import { Card, Avatar, Info, Name, Profession, Stars, Star, Comment, Details } from './style'

const ReviewSlide = ({ review }) => {
  const { name, profession, rating, comment, details, avatar } = review;

  return (
    <Card>
      <Avatar src={avatar} alt={`${name}'s Avatar`} />
      <Info>
        <Name>{name}</Name>
        <Profession>{profession}</Profession>
      </Info>
      <Stars>
        {Array.from({ length: rating }, (_, index) => (
          <Star key={index} />
        ))}
      </Stars>
      <Comment>{comment}</Comment>
      <Details>{details}</Details>
    </Card>
  );
};

export default ReviewSlide;
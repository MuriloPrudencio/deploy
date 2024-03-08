import React from "react";
import {
  Card,
  CustomerInfo,
  Stars,
  CustommerComment,
  SecondComment,
  StarsIcon,
} from "./style";

const ReviewCard = ({ customer, stars }) => {
  return (
    <Card>
      <CustomerInfo>
        <img src={customer.photo} alt={customer.name} />
        <div>
          <h3>{customer.name}</h3>
          <p>{customer.profession}</p>
        </div>
      </CustomerInfo>
      <Stars>
      {[...Array(stars)].map((_, index) => (
        <StarsIcon key={index}>?</StarsIcon>
      ))}
      </Stars>
      <CustommerComment>{customer.comment}</CustommerComment>
      <SecondComment>{customer.secondComment}</SecondComment>
    </Card>
  );
};

export default ReviewCard;

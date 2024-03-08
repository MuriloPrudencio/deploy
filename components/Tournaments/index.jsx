import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Title,
  Span,
  ContentTitle,
  Buttom,
  ContainerButtom,
} from "./style";
import Link from "next/link";
import Slider from "react-slick";
import CardsTournament from "./CardsTournament";
import { withNamespaces } from 'react-i18next';

import moment from "moment";

function Tournaments({t}) {
  const date = moment().format("YYYY-MM-DD");

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch(`https://api.pokerbyte.com.br/mtt/list/106/all/${date}/guaranteed/desc`)
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data.data);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1701,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1185,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
    ]
  };

  return (
    <Container>
      <ContentTitle>
        <Title>
          1.200 <Span>{t('mesas ativas')}</Span>
        </Title>
      </ContentTitle>
      <Content>
        <Slider {...settings}>
          {categories.map(
            (tournament, index) =>
              index < 3 && <CardsTournament key={index} tournament={tournament} />
          )}
        </Slider>
      </Content>
      <ContainerButtom>
        <Link href="tournament">
          <Buttom>{t('confira a grade')}</Buttom>
        </Link>
      </ContainerButtom>
    </Container>
  );
}

export default withNamespaces()(Tournaments);

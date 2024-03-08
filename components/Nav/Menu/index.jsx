import React from 'react';
import {Ul, Ancora, ContainerLinks, ContainerButton} from './styled';
import Link from 'next/link';
import { useRouter } from "next/router";
import Dropdown from '../Dropdown';
import ButtonDownloadGlobal from '../../DeviceRedirectButton'
import { withNamespaces } from 'react-i18next';

const data = [
  {
    name : 'home',
    link : '/',
    activeLink : ''
  },

  {
    name : 'torneios',
    link : '/tournament',
    activeLink : 'tournament'
  },

  {
    name : 'ranking',
    link : '/ranking',
    activeLink : 'ranking'
  },

  {
    name : 'blog e notícias',
    link : '/blog',
    activeLink : 'blog'
  },

  {
    name : 'sobre',
    link : '/about',
    activeLink : 'about'
  },

  // {
  //   name : 'suprema 5 anos',
  //   link : '/aniversario',
  //   activeLink : 'aniversario'
  // },
  // {
  //   name : 'galeria',
  //   link : '/mavsaGallery',
  //   activeLink : 'mavsaGallery'
  // },
  // {
  //   name : 'você + um acompanhante',
  //   link : '/voceMaisUmAcompanhante',
  //   activeLink : 'voceMaisUmAcompanhante'
  // },
]

function Navigation ({ open, t }) {
  const { asPath } = useRouter();

  function activeLink(path) {
    return asPath === `/${path}` ? "active" : "";
  }
  return (
    <Ul open={open}>
      {data.map((menu, index) => (
        <Link key={index} href={`${menu.link}`}>
          <ContainerLinks>
            <Ancora className={activeLink(`${menu.activeLink}`)}>
              {t(`${menu.name}`)}
            </Ancora>
          </ContainerLinks>
        </Link>
      ))}
      <Dropdown/>
      <ContainerButton>
        <ButtonDownloadGlobal/>
      </ContainerButton>
    </Ul>
  )
}

export default withNamespaces()(Navigation);

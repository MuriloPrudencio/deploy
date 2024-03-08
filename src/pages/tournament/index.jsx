import React, {useEffect, useState} from "react";
import styled from "styled-components";
import moment from "moment";
import DataTable from 'react-data-table-component';
import CookieBanner from "../../../components/Cookies/CookieBanner";
import { withNamespaces } from 'react-i18next';

const Title = styled.h1`
  margin-top: 2em;
  text-transform: uppercase;
  font-size: 40px;

  @media(max-width: 692px) {
    font-size: 35px;
  }

  @media(max-width: 521px) {
    font-size: 25px;
  }


  @media(max-width: 379px) {
    font-size: 20px;
  }
`;

const Span = styled.span`
  color: #EFA144;
`;

const Container = styled.div`
  height: calc(100% - 100px);
`;

const Content = styled.div`
  max-width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2em;
  padding-top: 3em;
  padding-bottom: 5em;

  @media(min-width: 1890px) {
    max-width: 1800px;
  }

  @media(max-width: 521px) {
    max-width: 95%;
  }
`;


const customStyles = {
  rows: {
    style: {
      background: '#1e1e1f',
      color: '#fff',
      textAlign: 'center',
    },
  },
  headCells: {
    style: {
        paddingLeft: '8px', 
        background: '#EFA144',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '15px',
    },
  },
  cells: {
    style: {
      width: '180px',
    }
  },
  pagination: {
    style: {
      background: '#EFA144',
      color: '#fff',
    },
  },
  progress: {
    style: {
      color: '#EFA144',
      backgroundColor: '#000',
    }
  }
};



const convNumber = (value) => { 
  let initial = '';
  value = Number(value);
  if (value >= 1000000) initial = 'M';
  else if (value >= 1000) initial = 'K';
  else return value;
  const response = value / (initial === 'M' ? 1000000 : 1000);
  return `${response.toString().indexOf('.') > -1 ? response.toFixed(1) : response}${initial}`;
};

function Tournament({t}) {

  const columns = [
    {
      name: t('NOME'),
      selector: row => row.name,
      sortable: true,
    },
    {
      name: t('MODALIDADE'),
      selector: row => row.type,
      sortable: true,
    },
    {
      name: t('START'),
      selector: row => moment(row.date).format('HH:mm'),
      sortable: true,
    },
    {
      name: t('BUY-IN'),
      selector: row => convNumber(row.buyin),
      sortable: true,
    },
    {
      name: t('GARANTIDO'),
      selector: row => convNumber(row.guaranteed),
      sortable: true,
    },
    {
      name: t('CHIPS'),
      selector: row => convNumber(row.stack),
      sortable: true,
    },
    {
      name: t('BLINDS'),
      selector: row => row.temponivelmMeta,
      sortable: true,
    },
    {
      name: t('LATE'),
      selector: row => moment(row.late).format('HH:mm'),
      sortable: true,
    },
  ];

  const date = moment().format('YYYY-MM-DD');
  const dateTournament = moment().format('DD/MM');

  const [categories, setCategories] = useState([]);
  const [pending, setPending] = React.useState(true);

  useEffect(() => {
    fetch(`https://api.pokerbyte.com.br/mtt/list/106/all/${date}/guaranteed/asc`)
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data.data);
      setPending(false);
    });
  }, []);

  return (
    <Container>
      <Title>{t('grade de torneios')} <Span>{dateTournament}</Span></Title>
      <Content>
        <DataTable
          columns={columns}
          data={categories}
          customStyles={customStyles}
          progressPending={pending}
          pagination
          responsive='true'
        />
      </Content>
      <CookieBanner />
    </Container>
  );
};

export default withNamespaces()(Tournament);

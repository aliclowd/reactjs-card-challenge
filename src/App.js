import React, { useEffect, useState } from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import CustomCard from './components/cards/CustomCard.comonent';
import './App.scss';
import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';
import { connect } from 'react-redux';
import { fetchData } from './redux/actions/card.action';


const Animation = keyframes`${flipInX}`;
const AnimatedDiv = styled.div`
  animation: 1s ${Animation};
`;
const bgColor = [
  "linear-gradient(to right, #ff00b1 0%, #8628c1 74%)",
  "linear-gradient(to right, #e899dc 0%, #7ea56a 74%)",
  "linear-gradient(to right, #9fbf20 0%, #ef011794 74%)"
];

const App = (props) => {
  const [random, setRandom] = useState(0);
  const { fetchCards } = props;
  const { loading, error, cards } = props;
  // console.log('log props: ',props);  

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);



  const RandomCard = () => {
    setRandom(Math.floor(Math.random() * cards.length));

  }


  let bgBasedOnTag = 0;
  let cardCode = 0;
  if (cards.length) {
    bgBasedOnTag = cards[random].tag === 'sport' ? 0 : cards[random].tag === 'art' ? 1 : 2;
    cardCode = cards[random].code;
  } 

  
  if (loading) {
    return <div style={{ margin: 5 }}>loading...</div>
  }
  if (error) {
    return <div style={{ color: 'red', margin: 5 }}>error: {error.message}</div>
  }
  

  
  return (
    <div className="card-challenge" style={{ background: bgColor[bgBasedOnTag] }}>
      <Row className='card-challenge-row'>
        <Col md={{ size: 12 }}>
          <Jumbotron className="jumbo">
            {
              cardCode === 1 ?
                <AnimatedDiv>
                  <CustomCard try={RandomCard} card={cards[random]} index={random} />
                </AnimatedDiv>
                :
                <CustomCard try={RandomCard} card={cards[random]} index={random} />
            }
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cards: state.card.data,
  loading: state.card.loading,
  error: state.card.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCards: () => {
    dispatch(fetchData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

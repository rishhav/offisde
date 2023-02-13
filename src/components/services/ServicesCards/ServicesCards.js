import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServicesCard from './ServicesCard';
import matchSummaryIcon from '../../../assets/images/match_summary_logo.svg';
import livePredictionsIcon from '../../../assets/images/live_predictions_logo.svg';
import guideChatIcon from '../../../assets/images/guide_chat_logo.svg';

const SERVICES_DATA = [
  {
    title: 'Match Summary',
    subTitle: 'Match details that matter',
    text: 'Express your opinion like a pro! Get complete match analysis and statistics with just a click of a button, you can learn and understand the match situation better. Now you can share your opinion with confidence.',
    icon: matchSummaryIcon
  },
  {
    title: 'Live predictions',
    subTitle: 'Compete with friends',
    text: `It's a free hit! It's everything to gain and nothing to lose. Play for fun. Use your skills and knowledge to make live predictions and show off to your friends. Climb the leaderboard in the groups and win exciting prizes.`,
    icon: livePredictionsIcon
  },
  {
    title: 'Guide Chat',
    subTitle: 'Connect around sports',
    text: `It's just like having your commentary box! Chat with your friends as you watch the match live. Invite your existing friends, and also make new friends. Create your group. Get on the leaderboard. Discuss, compete and show off to your friends!`,
    icon: guideChatIcon
  },
];

const ServicesCards = () => {
  return (
    <React.Fragment>
      <Row>
        {
          SERVICES_DATA.map((data, index) => {
            return (
              <Col key={index} xs={12} sm={6}>
                <ServicesCard {...data} />
              </Col>
            )
          })
        }
      </Row>
    </React.Fragment>
  );
};

export default ServicesCards;
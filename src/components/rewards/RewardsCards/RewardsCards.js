import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RewardsCard from './RewardsCard';
import GiftLogo from '../../../assets/images/gift_logo.svg';
import RewardLogo from '../../../assets/images/rewards_logo.svg';

const REWARDS_DATA = [
    {
        title: 'Referral rewards',
        text: `The bigger it gets the better for you. It's simple. Refer to your friends and widen your group. The more people you refer to, the chances of winning will improve. Offside offers bi-weekly referral rewards for its members.`,
        icon: RewardLogo
    },
    {
        title: `Use the platform & win rewards`,
        text: `With so many events happening along with the matches, there is never a dull moment. Participate in the events simultaneously as you watch the live matches. Enjoy the possibilities with your friends during the live matches and win weekly prizes.`,
        icon: GiftLogo
    },
];

const RewardsCards = () => {
    return (
        <React.Fragment>
            <Row>
                {
                    REWARDS_DATA.map((data, index) => {
                        return (
                            <Col key={index} xs={12} sm={6}>
                                <RewardsCard {...data} />
                            </Col>
                        )
                    })
                }
            </Row>
        </React.Fragment>
    );
};

export default RewardsCards;
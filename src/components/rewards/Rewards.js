import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import InvitationIllustration from '../../assets/images/invitation_illustration.svg';
import RewardsCards from './RewardsCards/RewardsCards';
import MainContainer from '../../util/MainContainer';
import Typography from '../../util/Typography';

const Rewards = () => {
    return (
        <React.Fragment>
            <MainContainer>
                <Typography.HeadingExtraBold>Make endless sports conversations with friends</Typography.HeadingExtraBold>
                <Container>
                    <Row>
                        <Col xs={12} xl={6}>
                            <RewardsCards />
                        </Col>
                        <Col xs={12} xl={6}>
                            <Image src={InvitationIllustration} width="100%" className="rewards-col2" />
                        </Col>
                    </Row>
                </Container>
            </MainContainer>
        </React.Fragment>
    );
};

export default Rewards;
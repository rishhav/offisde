import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Typography from '../../../util/Typography';


const ServicesCard = ({ title, subTitle, text, icon }) => {
  return (
    <React.Fragment>
      <Card style={{ width: '100%', border: 0 }} className='bg-secondary text-white '>
        <Card.Body className='p-0 m-0'>
          <Image variant="left" src={icon} className='services-icon mb-3' />
          <Card.Title>
            <Typography.HeadingBold classes={['text-primary']}>{title}</Typography.HeadingBold>
          </Card.Title>
          <Card.Title>
            <Typography.HeadingRegular>{subTitle}</Typography.HeadingRegular>
          </Card.Title>
          <Card.Text className='text-2'>{text}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default ServicesCard;
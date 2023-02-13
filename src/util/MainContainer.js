import React from 'react';
import Container from 'react-bootstrap/Container';

const MainContainer = ({ children }) => {
    return (
        <React.Fragment>
            <Container className='bg-secondary' fluid>
                <Container className="pt-3 pt-md-5">
                    {children}
                </Container>
            </Container>
        </React.Fragment>
    );
};

export default MainContainer;
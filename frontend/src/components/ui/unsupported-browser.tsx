import * as React from 'react';
import styled from 'styled-components';
import Layout from '../ui/layout';
import { unsupportedText } from '../../constants/is-is';

const UnsupportedBrowserContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

export default class UnsupportedBrowser extends React.Component {

    render() {
        return (
                <Layout>
                    <UnsupportedBrowserContainer>
                            <h1>{unsupportedText.unsupportedBrowserHeading}</h1>
                            <p>{unsupportedText.unsupportedBrowserContent}</p>
                    </UnsupportedBrowserContainer>
                </Layout>
        );
    }
}

import * as React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import TextInput from '../ui/input/text-input';
import Layout from '../ui/layout';
import UnsupportedBrowser from '../ui/unsupported-browser';
import { isChromium } from '../../utilities/utils';

import NewTabLink from '../setup/new-tab-link';

const FrontPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    max-width: 100%;
    gap: 1.5rem;
`;

const SubmitButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #60c197;
    color: white;
    cursor: pointer;
    font-size: 2rem;

    :active {
        transform: translateY(2px);
    }

    & > * {
        padding: 0.5rem 1rem;
    }
`;

const JoinContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`;

const UrlInput = styled(TextInput)`
    gap: 0.5rem;
`;

const WelcomeTextContainer = styled.div``;

type Props = RouteComponentProps;

interface State {
    userUrl: string;
}

class FrontPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        // autogenerate a chatroom name from the timestamp
        this.state = {
            userUrl: (+new Date()).toString(30),
        };
    }

    onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userUrl = e.currentTarget.value;
        this.setState({ userUrl });
    };

    handleJoin = () => {
        const { history } = this.props;
        const { userUrl } = this.state;
        history.push(`/${userUrl}`);
    };

    render() {
        if (isChromium()) {
            return (
                <Layout>
                    <FrontPageContainer>
                        <JoinContainer>
                            <UrlInput
                                label={'Opna spjall'}
                                value={this.state.userUrl}
                                placeholder={'Spjallkóði'}
                                onChange={this.onUrlChange}
                            />
                            <SubmitButton onClick={this.handleJoin}>
                                <span>Opna</span>
                            </SubmitButton>
                        </JoinContainer>
                        <WelcomeTextContainer>
                            <h3>Kæri þátttakandi,</h3>
                            <p>
                                Þátttaka þín í þessu verkefni felst í því að
                                eiga samtal við annan þátttakenda í 15 til 30
                                mínútur. Samtölin munu í kjölfarið vera rituð
                                niður. Afurð þessa verkefnis er opið og
                                aðgengilegt gagnasafn af samræðum á íslensku.
                                Slík gögn koma til nota við þróun máltæknilausna
                                og eru mikilvægur þáttur í að vernda íslenskuna
                                á stafrænum tímum. Þátttakendur verða ekki
                                nafngreindir en kyn og aldur þátttakenda mun
                                fylgja með í gagnasafninu.
                            </p>
                            <h4>Um hvað má spjalla?</h4>
                            <p>
                                Umræðuefnið má vera allt milli himins og jarðar
                                en hafa ber í huga að samtalið og skrifleg
                                útgáfa þess verður opin öllum. Vegna þess biðjum
                                við um að engar persónugreinanlegar upplýsingar
                                verði hluti af samtalinu. Dæmi um slíkar
                                upplýsingar er nafn, kennitala eða heimilisfang
                                þitt og annara. Ef slíkar upplýsingar slæðast
                                með má hafa samband við okkur á netfangið
                                samromur@ru.is og við fjarlægjum þær áður en
                                gögnin verða birt. Stöku slettur úr öðrum
                                tungumálum eru í lagi og það sama á við um
                                lengri þagnir, hikorð og önnur hljóð svo sem
                                ræskingar eða hósta. Það sem skiptir mestu er að
                                talað sé með eðlilegum hætti en þetta er jú allt
                                hluti af eðlilegu talmáli.
                            </p>
                            <h4>Hvernig fer spjallið fram?</h4>
                            <p>
                                Á vefsíðunni spjall.samromur.is geta
                                þátttakendur búið til spjallsvæði sem þeir geta
                                deilt með öðrum þátttakendum. Við þátttöku má
                                notast við síma, tölvu eða spjaldtölvu frá öðrum
                                framleiðendum en Apple einnig þarf að nota
                                Chrome vafrann. Til þess að tryggja góð
                                hljóðgæði er mælt er með því að þátttakendur
                                noti heyrnartól með hljóðnema. Ef þátttakendur
                                taka þátt í sama herberginu er mikilvægt að
                                tryggja að nægileg fjarlægð sé á milli
                                þátttakenda svo framlag hvers þátttakenda
                                haldist hreint af öðru tali.
                            </p>
                            <NewTabLink href="https://www.youtube.com/watch?v=pwi1fD0A6L4&feature=youtu.be">
                                Stutt demo
                            </NewTabLink>
                        </WelcomeTextContainer>
                    </FrontPageContainer>
                </Layout>
            );
        } else {
            return (
                <Layout>
                    <UnsupportedBrowser />
                </Layout>
            );
        }
    }
}

export default withRouter(FrontPage);

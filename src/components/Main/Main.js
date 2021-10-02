import React from 'react';
import { Container, Title } from '../../style';
import {
  GeneralNews,
  HeroSection,
  MainWrapper,
  News,
  NewsSection,
  NewsWrapper,
  OtherNews,
  OtherNewsItem,
  OtherNewsTitle,
  SecondNews,
  SecondNewsItem,
} from './style';
import Img1 from '../../assets/Innovation.png';
import Img2 from '../../assets/Hyundai Motor Seeking to Take over Boston Dynamics for 800 Bil.png';
import Img3 from '../../assets/image.png';
import Img4 from '../../assets/image (1).png';
import Img5 from '../../assets/image (2).png';
import Img6 from '../../assets/Tesla lays out how to join the newly opened Full Self-Driving beta.png';
import WeatherNow from './WeatherNow';
import City from '../City/City';

import { Route } from 'react-router-dom';

function Main() {
  return (
    <>
      <Route path="/cities/:city" component={City} />
      <MainWrapper>
        <HeroSection>
          <h1>TechGUIDE.</h1>
        </HeroSection>
        <Container>
          <NewsWrapper>
            <Title>Latest tech news</Title>
            <NewsSection>
              <News>
                <GeneralNews>
                  <img src={Img1} alt="Logo" />
                  <h4>Title</h4>
                  <p>
                    “They figured out a way to become capital efficient, almost
                    like a dealer’s sales rep,” Novak tells Forbes. “They don’t
                    own any inventory, so they’re able to essentially bid for
                    keywords online that just aren’t as competitive, because
                    they don’t have to sell and move immediately. They’re just
                    trying to find people who are interested in the car.”
                  </p>
                </GeneralNews>
                <SecondNews>
                  <SecondNewsItem href="#">
                    <img src={Img2} alt="Logo" />
                    <h4>
                      Hyundai Motor Seeking to Take over Boston Dynamics for 800
                      Bil. Won
                    </h4>
                    <small>
                      By <span>Abram Brown</span> Boston Dynamics
                    </small>
                  </SecondNewsItem>
                  <SecondNewsItem>
                    <img src={Img3} alt="Logo" />
                    <h4>
                      IBM Research Says Analog AI Will Be 100X More Efficient.
                      Yes, 100X.
                    </h4>
                    <small>
                      By <span>Abram Brown</span> Boston Dynamics
                    </small>
                  </SecondNewsItem>
                </SecondNews>
              </News>
              <OtherNews>
                <OtherNewsItem>
                  <img src={Img4} alt="Logo" />
                  <OtherNewsTitle>
                    <h4>
                      IBM Research Says Analog AI Will Be 100X More Efficient.
                      Yes, 100X.
                    </h4>
                    <small>
                      By <span>Abram Brown</span> Boston Dynamics
                    </small>
                  </OtherNewsTitle>
                </OtherNewsItem>
                <OtherNewsItem>
                  <img src={Img5} alt="Logo" />
                  <OtherNewsTitle>
                    <h4>
                      IBM Research Says Analog AI Will Be 100X More Efficient.
                      Yes, 100X.
                    </h4>
                    <small>
                      By <span>Abram Brown</span> Boston Dynamics
                    </small>
                  </OtherNewsTitle>
                </OtherNewsItem>
                <OtherNewsItem>
                  <img src={Img6} alt="Logo" />
                  <OtherNewsTitle>
                    <h4>
                      IBM Research Says Analog AI Will Be 100X More Efficient.
                      Yes, 100X.
                    </h4>
                    <p>
                      By <span>Abram Brown</span> Boston Dynamics
                    </p>
                  </OtherNewsTitle>
                </OtherNewsItem>
              </OtherNews>
            </NewsSection>
          </NewsWrapper>
        </Container>
        <WeatherNow />
      </MainWrapper>
    </>
  );
}

export default Main;

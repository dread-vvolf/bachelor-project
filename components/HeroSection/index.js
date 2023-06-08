import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';
import {Button} from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBackground>
            <HeroContent>
                <HeroH1>
                A Slice of History in Every Bite
                </HeroH1>
                <HeroP>
                We believe that every pizza tells a story, and our commitment to using traditional recipes and quality ingredients ensures that each slice is a flavorful journey through our history.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    big="true"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

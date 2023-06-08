import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logo1 from '../../images/logo2.png';

export const FooterContainer = styled.footer`
    background-color: #44372B;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;    
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;  
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 16px;
    text-algin: left;
    width: 100%;
    box-sizing: border-box;
    color: #fff;    

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`



export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 10px;
    margin-bottom: 0.5rem;
    font-size: 14px;
    
    &:hover {
        color: #F9EEC9;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto 0 auto;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const Logo = styled.img`
    height: 50px;
    margin: 5px 0 10px 0;
`
Logo.defaultProps = {
    src: Logo1
}

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`
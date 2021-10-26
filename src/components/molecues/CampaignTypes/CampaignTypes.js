import React from 'react';
import SocialIcon from 'components/atoms/SocialIcon/SocialIcon';
import { ReactComponent as LikeIcon } from 'assets/icons/small/small-like-icon.svg';
import { ReactComponent as IncreaseIcon } from 'assets/icons/small/increase-icon.svg';
import { ReactComponent as StarsIcon } from 'assets/icons/small/small-star-icon.svg';
import { ReactComponent as LikesIcon } from 'assets/icons/small/likes-icon.svg';
import { ReactComponent as CartIcon } from 'assets/icons/small/cart-icon.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/small/play-icon.svg';
import { ReactComponent as LaptopIcon } from 'assets/icons/small/laptop-icon.svg';
import { ReactComponent as PeopleIcon } from 'assets/icons/small/people-icon.svg';
import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 128rem;
  margin-bottom: 13.3rem;
  ${Title} {
    font-size: 3.2rem;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    margin: 2rem;
  }
`;
const CampaignTypes = () => {
  return (
    <Wrapper>
      <Title>Jaki typ kampani na facebooku mogę wybrać?</Title>
      <IconWrapper>
        <SocialIcon Icon={LikeIcon}>Polubienia</SocialIcon>
        <SocialIcon Icon={IncreaseIcon}>Zasięg</SocialIcon>
        <SocialIcon Icon={StarsIcon}>Świadomość marki</SocialIcon>
        <SocialIcon Icon={LikesIcon}>Zaangażowanie</SocialIcon>
        <SocialIcon Icon={CartIcon}>Konwersje</SocialIcon>
        <SocialIcon Icon={PlayIcon}>Wyświetlenia wideo</SocialIcon>
        <SocialIcon Icon={LaptopIcon}>Ruch na stronę internetową</SocialIcon>
        <SocialIcon Icon={PeopleIcon}>Generowanie leadów</SocialIcon>
      </IconWrapper>
    </Wrapper>
  );
};

export default CampaignTypes;

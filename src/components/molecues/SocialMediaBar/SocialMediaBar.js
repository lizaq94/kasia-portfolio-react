import React from 'react';
import SocialIcon from 'components/atoms/SocialIcon/SocialIcon';
import { ReactComponent as FacebookIcon } from 'assets/icons/fb.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/insta.svg';
import { ReactComponent as MessengerIcon } from 'assets/icons/messenger.svg';
import { ReactComponent as AudienceNetworkIcon } from 'assets/icons/an.svg';
import { Wrapper, IconWrapper } from './SocialMediaBar.styles.js';
import { Title } from 'components/atoms/Title/Title';

const SocialMediaBar = () => {
  return (
    <Wrapper>
      <Title>Platformy na których możesz wyświetlać swoje reklamy</Title>
      <IconWrapper>
        <SocialIcon Icon={FacebookIcon}>Facebook</SocialIcon>
        <SocialIcon Icon={InstagramIcon}>Instagram</SocialIcon>
        <SocialIcon Icon={MessengerIcon}>Messenger</SocialIcon>
        <SocialIcon Icon={AudienceNetworkIcon}>Audience Network</SocialIcon>
      </IconWrapper>
    </Wrapper>
  );
};

export default SocialMediaBar;

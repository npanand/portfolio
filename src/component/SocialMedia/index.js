import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../../data/constants';
import styled from 'styled-components';

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;
const SocialMediaContainer = styled.div``;
const SocialMedia = () => {
    return <SocialMediaContainer>
        <Title>Social Media Connects</Title>

        <SocialMediaIcons >
            <SocialMediaIcon href={Bio.linkedin} target="display">Linkedin - <LinkedInIcon /></SocialMediaIcon>
            <SocialMediaIcon href={Bio.github} target="display" >Github - <GitHubIcon /></SocialMediaIcon>
        </SocialMediaIcons>
    </SocialMediaContainer>
}

export default SocialMedia;
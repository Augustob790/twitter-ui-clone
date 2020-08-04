import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Guibson Arcebispo</h1>
        <h2>@guibsonarc</h2>

        <p>
          Software Developer <a href="https://github.com/guibsonarc">@guibsonarc</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Tocantins, Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 28 de Outubro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>62</strong>
          </span>
          <span>
            <strong>45 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;

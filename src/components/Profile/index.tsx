import {
  Avatar,
  Description,
  Details,
  Infos,
  Name,
  ProfileContainer,
  ProfileInfo,
} from './styles'

import avatar from '../../assets/avatar.svg'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar>
        <img src={avatar} alt="" />
      </Avatar>
      <Infos>
        <ProfileInfo>
          <Name>
            <p>Cameron Williamson</p>
            <a href="">githubpp</a>
          </Name>
          <Description>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </Description>
        </ProfileInfo>
        <Details>
          <span>cameronwll</span>
          <span>Rocketseat</span>
          <span>32 seguidores</span>
        </Details>
      </Infos>
    </ProfileContainer>
  )
}

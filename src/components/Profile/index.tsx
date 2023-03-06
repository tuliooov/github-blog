import {
  Avatar,
  Description,
  Details,
  Infos,
  Name,
  ProfileContainer,
  ProfileInfo,
} from './styles'

import { FiExternalLink } from 'react-icons/fi'
import { BsGithub, BsFillBuildingFill, BsPeopleFill } from 'react-icons/bs'

import { IProfile } from '../../pages/Home'

interface ProfileProps {
  profile: IProfile
}

export function Profile({
  profile: { avatar_url: avatarUrl, name, bio, login, company, followers },
}: ProfileProps) {
  return (
    <ProfileContainer>
      <Avatar>
        <img src={avatarUrl} alt={`picture ${name}`} />
      </Avatar>
      <Infos>
        <ProfileInfo>
          <Name>
            <p>{name}</p>
            <a href="">
              GITHUB <FiExternalLink size={12} />
            </a>
          </Name>
          <Description>
            <p>{bio}</p>
          </Description>
        </ProfileInfo>
        <Details>
          <span>
            <BsGithub /> {login}
          </span>
          <span>
            <BsFillBuildingFill /> {company}
          </span>
          <span>
            <BsPeopleFill /> {followers} seguidores
          </span>
        </Details>
      </Infos>
    </ProfileContainer>
  )
}

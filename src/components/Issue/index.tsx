import { Details, Infos, Name, IssueContainer, IssueInfo } from './styles'

import { FiExternalLink, FiChevronLeft } from 'react-icons/fi'
import { BsGithub, BsFillBuildingFill, BsPeopleFill } from 'react-icons/bs'
import { IIssue } from '../Issues/type'
import { Link } from 'react-router-dom'

interface IssueProps {
  issue: IIssue
}

export function Issue({ issue }: IssueProps) {
  return (
    <IssueContainer>
      <Infos>
        <IssueInfo>
          <Name>
            <div>
              <Link
                to={{
                  pathname: '/',
                }}
              >
                <FiChevronLeft size={18} /> VOLTAR
              </Link>
              <a href={issue.html_url}>
                VER NO GITHUB <FiExternalLink size={18} />
              </a>
            </div>
            <p>{issue.title}</p>
          </Name>
        </IssueInfo>
        <Details>
          <span>
            <BsGithub /> {issue.user.login}
          </span>
          <span>
            <BsFillBuildingFill /> {issue.updated_at}
          </span>
          <span>
            <BsPeopleFill /> {issue.comments} seguidores
          </span>
        </Details>
      </Infos>
    </IssueContainer>
  )
}

import Header from '../Header/Header.component';
import MainContent from '../MainContent/MainContent.component';
import { NovelatePageContainer } from './NovelateContainerPage.styles';

interface HeaderProps {
  title: string;
  children: React.ReactNode;
}

const NovelatePage: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <NovelatePageContainer>
      <Header title={title} />
      <MainContent>{children}</MainContent>
    </NovelatePageContainer>
  );
};

export default NovelatePage;

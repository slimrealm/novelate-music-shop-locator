import { MainContentContainer } from './MainContent.styles';

interface HeaderProps {
  children: React.ReactNode;
}

const MainContent: React.FC<HeaderProps> = ({ children }) => {
  return <MainContentContainer>{children}</MainContentContainer>;
};

export default MainContent;

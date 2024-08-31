import ResizableHeaderText from '../ResizableHeaderText/ResizableHeaderText.component';
import { HeaderContainer } from './Header.styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <ResizableHeaderText text={title} />
    </HeaderContainer>
  );
};

export default Header;

import { useEffect, useRef, useState } from 'react';
import { TextWrapper } from './ResizableHeaderText.styles';

interface ResizableHeaderTextProps {
  text: string;
}

const ResizableHeaderText: React.FC<ResizableHeaderTextProps> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<number>(1); // font size in em

  useEffect(() => {
    const checkOverflow = () => {
      const element = textRef.current;
      if (element) {
        const initialHeight = element.clientHeight;
        element.style.whiteSpace = 'nowrap';
        const singleLineHeight = element.clientHeight;
        element.style.whiteSpace = 'normal';
        if (initialHeight > singleLineHeight) {
          setFontSize((prevFontSize) => prevFontSize - 0.1); // font size in em
        }
      }
    };

    checkOverflow(); // Initial check
    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [fontSize]);

  return (
    <TextWrapper ref={textRef} fontSize={fontSize.toString()}>
      {text}
    </TextWrapper>
  );
};

export default ResizableHeaderText;

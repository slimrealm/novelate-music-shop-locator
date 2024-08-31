import styled from 'styled-components';

export const TextWrapper = styled.div<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize}em;
  margin: 0 10px 0 10px;
`;

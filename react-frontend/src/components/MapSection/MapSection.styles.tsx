import styled from 'styled-components';

export const MapSectionOuterContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;//center;
margin-top: 15px;
`;

export const MapSectionInnerContainer = styled.div`
  width: 160px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #3a7d6f;;
  //background-color:  #3a7d6f;//white;
  padding: 0 10px 0 10px;
`;

export const MapSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.1;
`;

export const MapSectionRight = styled.div`
  display: flex;
`;

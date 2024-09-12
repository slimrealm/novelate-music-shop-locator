import styled from 'styled-components';

export const ShopsListItemContainer = styled.div`
  width: 360px;
  height: 115px;
  margin: 10px 0 0 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to right, #200C30, #3D165C);
  border-radius: 10px;
  border: solid #7A29A3 2px;
`;

export const LinkContainer = styled.div`
  width: 360px;
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShopListTextContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #ddddff;
`;

export const ShopListLargeLine = styled.span`
  width: 100%;
  font-size: 1.3em;
  font-weight: 600;
`;

export const ShopListSmallLine = styled.span`
  width: 100%;
  font-size: 1em;
`;

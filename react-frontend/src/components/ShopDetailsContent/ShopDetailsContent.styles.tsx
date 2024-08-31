import styled from 'styled-components';

export const ShopDetailsContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 900px;
  background-color: #f1f9f7;
`;

export const ShopDetailsMainSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ShopDetailsLeftSection = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 640px) {
    width: 50%;
  }
`;

export const ShopDetailsRightSection = styled.div`
  width: 45%;
  margin: 0 5px 0 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  @media screen and (max-width: 640px) {
    width: 50%;
    margin: 0;
    line-height: 1.3em;
  }
`;

export const ShopDetailsBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 5px;
`;

interface ShopDetailsLineProps {
  $weight?: string;
  $marginTop?: string;
}

export const ShopDetailsLargeLine = styled.span<ShopDetailsLineProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-weight: ${({ $weight }) => $weight};
  margin-top: ${({ $marginTop }) => $marginTop};
`;

export const ShopDetailsSmallLine = styled.span<ShopDetailsLineProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: ${({ $weight }) => $weight};
  margin-top: ${({ $marginTop }) => $marginTop};
`;

export const ShopImageWrapper = styled.div``;

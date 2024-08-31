import styled from 'styled-components';

interface MapViewProps {
  $width: number;
  $height: number;
}

export const MapViewContainer = styled.div<MapViewProps>`
  width: ${({ $width }) => $width}px;
  height:${({ $height }) => $height}px;
  `;

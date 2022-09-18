import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ Theme }) => Theme === 'Light' ? '#fff' : '#000a1f'};
  color: ${({ Theme }) => Theme === 'Light' ? '#000a1f' : '#fff'};
`;
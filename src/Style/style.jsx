import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ Theme }) => Theme === 'Light' ? '#fff' : '#000a1f'};
  color: ${({ Theme }) => Theme === 'Light' ? '#000a1f' : '#fff'};

  img{
    width: 100%;
    max-width: 400px;
  }
`;
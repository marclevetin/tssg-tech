import styled from 'styled-components';

const Text = styled.p`
  font-size: 1em;
  color: gray;
`;

export const ItalicsText = Text.extend`
  font-style: italic;
`;

export default Text;

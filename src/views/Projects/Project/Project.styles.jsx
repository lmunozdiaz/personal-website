import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const Header = styled.div``;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.p`
  font-style: italic;
  font-weight: 200;
  text-transform: capitalize;
`;

const Description = styled.p``;

const Buttons = styled.div``;

const ButtonLink = styled.a`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 50px;
  border: 1px solid #b3b3b3;
  color: #b3b3b3;
  font-size: 1.4rem;
  font-weight: 500;
  margin-right: 1rem;
  outline: none;
  padding: 0.6rem 3rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  &.prominent {
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    color: #141414;
  }
`;

const ImagePlaceholder = styled.span`
  background-color: #3b3b3b;
  border-radius: 1.5rem;
  display: inline-block;
  width: 30rem;
  height: 20rem;
  min-width: 20rem;
  min-height: 20rem;
`;

export default {
  ButtonLink,
  Buttons,
  Container,
  Description,
  Header,
  Tag,
  Tags,
};

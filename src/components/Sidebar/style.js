import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  height: 100%;
  width: 400px;
  background-color: white;
  border: 1px solid #cdcdcd;
  box-shadow: 0px 2px 1px rgba(118, 118, 118, 0.25);
  /* border-left: 1px solid black; */
  display: flex;
  flex-direction: column;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  @media (max-width: 768px) {
  transform: ${({ open }) => (open ? 'translateX(50%)' : 'translateX(100%)')};
  }
`;

export const Cities = styled.ul`
  a {
    font-weight: 300;
    font-size: 24px;
    text-decoration: none;
    color: black;
    &:hover{
      opacity: 0.7;
    }
  }
  li {
    list-style: none;
    margin: 24px 0;
  }
`;

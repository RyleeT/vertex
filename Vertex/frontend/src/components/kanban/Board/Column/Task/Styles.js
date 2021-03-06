import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const TaskLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
  color: inherit;
  text-decoration: inherit;
  user-select: none;
  &:hover,
  &:visited,
  &:active {
    cursor: pointer;
    color: inherit;
    text-decoration: inherit;
  }
`;

export const Card = styled.div`
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  :hover {
    background: #ebecf0;
  }
  ${(props) =>
    props.isBeingDragged &&
    css`
      transform: rotate(3deg);
      box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    `}
`;

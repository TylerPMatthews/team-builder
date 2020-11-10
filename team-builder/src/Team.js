import React from "react";
import styled from 'styled-components';
const StyledTeam = styled.div`

background-color:black;
padding:1.5%;
margin-top:5%;
border-radius:20px;
color:white;

h2{
    color:yellow;
}
p{
    text-align:center;
    font-size:1.3rem;
    color:yellow;
}

`
export default function Team(props) {
  const {details} = props;

  if (!details) {
    return <h3>Working on getting your Team Members</h3>
  }
  return (
    <StyledTeam>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
      </StyledTeam>
  );
}

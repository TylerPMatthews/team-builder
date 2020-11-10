import React from "react";
import styled from 'styled-components';

const StyledForm = styled.div`

form{
    background-color:black;
    display:flex;
    flex-direction:column;
    align-items:center;

    label{
        color:red;
        font-size:1.5rem;
        margin-top:2%;
    
    }
    input{
        margin-left:1%;
    }
    select{
        margin-left:1%;
    }
    button{
        margin-top:25%;
        margin-bottom:25%;
    }
   
}
`
export default function Form(props) {
  const { values, update, submit, key } = props;

  //pass the update through props
  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };
  //pass the submit through props
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <StyledForm>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name ..."
            maxLength="25"
            onChange={onChange}
            value={values.name}
          ></input>
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={onChange}
            value={values.email}
          ></input>
        </label>
        <label>
          Role
          <select name="role" onChange={onChange} value={values.role}>
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
        </label>
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
      </StyledForm>
  );
}

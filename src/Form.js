import { render } from '@testing-library/react';
import React from 'react';



class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
      <label>Amount</label>
      <input type="number"></input>
      </>
    )
  }
}

export default Form;
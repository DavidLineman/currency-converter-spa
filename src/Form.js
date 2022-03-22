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
        <button type='submit' className='btn btn-success'>Convert!</button>
      </>
    )
  }
}

export default Form;
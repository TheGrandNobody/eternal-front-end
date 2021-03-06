import React from 'react';

function CustomSelectDropdown(props) {
    const { handleOnChange } = props;
  return (
    <div className='d-flex' style={{justifyContent: 'flex-end'}}>
      Display&nbsp; &nbsp;
      <select onChange={handleOnChange} name='cars' id='cars'>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
      </select>
      &nbsp; &nbsp; gages
    </div>
  );
}

export default CustomSelectDropdown;

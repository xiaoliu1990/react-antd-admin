import React from 'react';
function Field({ label, value }) {
  return (
    <div className='field'>
      <span className='field-label'>{label}</span>
      <span className='field-number'>{value}</span>
    </div>
  )
};
export default Field;

import React from 'react';
 
function archivebutton({ id, onArchive }) {
  return <button className='note-item__archive-button' onClick={() => onArchive(id)}>archive</button>
}
 
export default archivebutton;
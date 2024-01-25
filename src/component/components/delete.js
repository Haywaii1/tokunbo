import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function Delete(props) {
  const handleDeleteClick = () => {
    // Add code here to handle the delete action, such as removing the item from a list
    // For this example, let's assume props.onDelete is a callback function passed from the parent component.
    if (props.onDelete) {
      props.onDelete();
    }
  };

  return (
    <button onClick={handleDeleteClick} className='delete-button'>
      <FontAwesomeIcon icon={faTrash} style={{marginRight:"3px"}} />Delete
    </button>
  );
}
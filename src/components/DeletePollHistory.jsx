import React from 'react'

const DeletePollHistory = async () => {
  try {
    const res = await fetch('http://localhost:4000/polls', {
      method: 'DELETE'
    });
    const data = await res.json();
    alert(data.message); // shows: ✅ All poll history deleted

    // Optional: refresh poll history UI
    fetchPollHistory(); // call your history re-fetch logic
  } catch (error) {
    console.error('Error deleting poll history:', error);
    alert('Something went wrong while deleting history');
  }
};


export default DeletePollHistory;

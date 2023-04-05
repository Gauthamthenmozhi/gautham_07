import React, { useState } from 'react';

const Details = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  return(
    <div>
      {!showPreview && <form onSubmit={e => e.preventDefault()}>
         Name: {" "}
        <input type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} /><br />
        Contact No.: {" "}
        <input type="number" placeholder="Enter contact number" onChange={e => setNumber(e.target.value)} />
        <br />
        <input type="button" value="submit" onClick={() => setShowPreview(!showPreview)}/>
      </form>}
      {showPreview && (<div>
        <p>{name}</p>
        <p>{number}</p>
      </div>)}
    </div>
  );
}


export default Details;
import React from 'react';
import './App.css';
import Rating from '@material-ui/lab/Rating';

function App() {
  return (
    <div className="coffee-rater">
      Smak: <Rating name="smak" defaultValue={0} precision={0.5} />
      Aromat: <Rating name="aromat" defaultValue={0} precision={0.5} />
      Moc: <Rating name="moc" defaultValue={0} precision={0.5} />
      
    </div>
  );
}

export default App;

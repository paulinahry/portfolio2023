import { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

const override = {
  display: 'block',
  margin: '0 auto',
};

function Spinner() {
  const [color, setColor] = useState('#4ff7b2');

  return (
    <div>
      <PulseLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
    </div>
  );
}

export default Spinner;


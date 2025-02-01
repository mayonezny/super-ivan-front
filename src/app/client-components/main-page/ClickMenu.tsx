
'use client';

import { useState } from 'react';
import CheeseMadnessIMG from './CheeseMadnessIMG';
import PizdukTextField from './PizdukTextField';
import axios from 'axios';

const ClickMenu = () => {
  const [data, setData] = useState(null);

  const receiveData = async () => {
    const response = await axios.get('/api/privet');
    setData(response.data.message);
  };

  return (
    <div>
      <CheeseMadnessIMG click={receiveData} />
      <PizdukTextField data={data} />
    </div>
  );
};
export default ClickMenu;

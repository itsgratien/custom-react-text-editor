import React, { useState } from 'react';
import './LinkAction.scss';
import { Close } from '../Close';

interface Props {
  handleClose: () => void;
}

const LinkAction = (props: Props) => {
  const [link, setLink] = useState<string>('');

  const { handleClose } = props;

  return (
    <div className='linkAction absolute -inset-0 w-full h-full z-50'>
      <Close handleClose={handleClose} />
      <div className='flex items-center h-full'>
        <div className='linkInput flex-grow'>
          <input
            type='text'
            placeholder='Enter link'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between linkButton'>
          <button
            type='button'
            className='outline-none focus:outline-none font-bold'
          >
            Link
          </button>
          <button
            type='button'
            className='outline-none focus:outline-none font-bold'
          >
            Unlink
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkAction;

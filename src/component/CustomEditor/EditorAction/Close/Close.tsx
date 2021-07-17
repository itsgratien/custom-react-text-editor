import React from 'react';
import './Close.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

interface Props {
  handleClose: () => void;
}

const Close = (props: Props) => {
  const { handleClose } = props;
  return (
    <button
      className='outline-none focus:outline-none font-bold absolute right-0 closeChildAction flex items-center justify-center'
      onClick={handleClose}
    >
      <FontAwesomeIcon icon={['fas', 'times']} />
    </button>
  );
};

export default Close;

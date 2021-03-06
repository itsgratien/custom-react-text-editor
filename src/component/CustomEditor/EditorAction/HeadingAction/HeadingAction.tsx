import React, { useState } from 'react';
import './HeadingAction.scss';
import { Close } from '../Close';

const items = [
  { name: 'H1', command: 'header-one' },
  { name: 'H2', command: 'header-two' },
  { name: 'H3', command: 'header-three' },
  { name: 'H4', command: 'header-four' },
  { name: 'H5', command: 'header-five' },
  { name: 'H6', command: 'header-six' },
];

interface Props {
  handleActiveAction: (name: string, command?: string) => void;
  handleBlockType: (command: string) => void;
  handleClose: () => void;
}

const HeadingAction = (props: Props) => {
  const [activeHeading, setActiveHeading] = useState<string>();

  const { handleActiveAction, handleBlockType, handleClose } = props;

  const handleActiveHeading = (value: string, command: string) => {
    setActiveHeading(value);

    handleActiveAction('heading');

    handleBlockType(command);

    return undefined;
  };
  return (
    <div className='headingAction absolute w-full h-full inset-0 z-50'>
      <Close handleClose={handleClose} />
      <ul className='flex items-center justify-center'>
        {items.map((item, index) => (
          <li key={index}>
            <button
              type='button'
              className={`outline-none focus:outline-none font-bold ${
                activeHeading === item.name ? 'activeAction' : ''
              }`}
              onClick={() => handleActiveHeading(item.name, item.command)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeadingAction;

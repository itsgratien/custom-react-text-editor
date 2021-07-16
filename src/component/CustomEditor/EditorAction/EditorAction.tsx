import React, { useState } from 'react';
import './EditorAction.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Props {
  items: IconName[];
}

const EditorAction = (props: Props) => {
  const [activeAction, setActiveAction] = useState<IconName>();

  const { items } = props;

  const handleActiveAction = (value: IconName) => {
    setActiveAction(value);
  };

  return (
    <ul className='relative flex items-center editorAction'>
      {items.map((item) => (
        <li key={item}>
          <button
            type='button'
            className={`outline-none focus:outline-none ${
              activeAction === item ? 'activeAction' : ''
            }`}
            onClick={() => handleActiveAction(item)}
          >
            <FontAwesomeIcon icon={['fas', item]} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EditorAction;

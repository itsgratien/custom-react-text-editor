import React, { useState } from 'react';
import './EditorAction.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { DraftEditorCommand } from 'draft-js';

interface Props {
  items: {
    name: IconName;
    command?: DraftEditorCommand | string;
  }[];
  handleKeyCommand: (command?: string) => void;
}

const EditorAction = (props: Props) => {
  const [activeAction, setActiveAction] = useState<IconName>();

  const { items, handleKeyCommand } = props;

  const handleActiveAction = (value: IconName, command?: string) => {
    setActiveAction(value);

    handleKeyCommand(command);
  };

  return (
    <ul className='relative flex items-center editorAction'>
      {items.map((item) => (
        <li key={item.name}>
          <button
            type='button'
            className={`outline-none focus:outline-none ${
              activeAction === item.name ? 'activeAction' : ''
            }`}
            onClick={() => handleActiveAction(item.name, item.command)}
          >
            <FontAwesomeIcon icon={['fas', item.name]} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EditorAction;

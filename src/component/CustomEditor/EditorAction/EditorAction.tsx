import React, { useState } from 'react';
import './EditorAction.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faItalic,
  faBold,
  faHeading,
  faParagraph,
  faLink,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { HeadingAction } from './HeadingAction';

library.add(faItalic);
library.add(faBold);
library.add(faHeading);
library.add(faParagraph);
library.add(faLink);
library.add(faCode);

interface Props {
  handleKeyCommand: (command?: string) => void;
  handleBlockType?: (command: string) => void;
}

enum Action {
  Heading = 'heading',
  Paragraph = 'paragraph',
  Italic = 'italic',
  Bold = 'bold',
  Link = 'link',
  Code = 'code',
}

enum Command {
  Bold = 'bold',
  Paragraph = 'paragraph',
  Italic = 'italic',
  Code = 'code',
}

const EditorAction = (props: Props) => {
  const [activeAction, setActiveAction] = useState<IconName>();

  const [openSubAction, setOpenSubAction] = useState<boolean>(false);

  const { handleKeyCommand, handleBlockType } = props;

  const handleActiveAction = (value: IconName | string, command?: string) => {
    setActiveAction(value as IconName);

    handleKeyCommand(command);

    switch (value) {
      case Action.Heading:
        setOpenSubAction(true);
        break;
      default:
        setOpenSubAction(false);
    }
  };

  return (
    <ul className='relative flex items-center editorAction'>
      {activeAction === Action.Heading && handleBlockType && openSubAction && (
        <HeadingAction
          handleActiveAction={handleActiveAction}
          handleBlockType={handleBlockType}
          handleClose={() => setOpenSubAction(false)}
        />
      )}
      <li>
        <button
          type='button'
          className={`outline-none focus:outline-none ${
            activeAction === Action.Heading ? 'activeAction' : ''
          }`}
          onClick={() => handleActiveAction(Action.Heading)}
        >
          <FontAwesomeIcon icon={['fas', Action.Heading]} />
        </button>
      </li>
      <li>
        <button
          type='button'
          className={`outline-none focus:outline-none ${
            activeAction === Action.Paragraph ? 'activeAction' : ''
          }`}
          onClick={() =>
            handleActiveAction(Action.Paragraph, Command.Paragraph)
          }
        >
          <FontAwesomeIcon icon={['fas', Action.Paragraph]} />
        </button>
      </li>
      <li>
        <button
          type='button'
          className={`outline-none focus:outline-none ${
            activeAction === Action.Bold ? 'activeAction' : ''
          }`}
          onClick={() => handleActiveAction(Action.Bold, Command.Bold)}
        >
          <FontAwesomeIcon icon={['fas', Action.Bold]} />
        </button>
      </li>
      <li>
        <button
          type='button'
          className={`outline-none focus:outline-none ${
            activeAction === Action.Italic ? 'activeAction' : ''
          }`}
          onClick={() => handleActiveAction(Action.Italic, Command.Italic)}
        >
          <FontAwesomeIcon icon={['fas', Action.Italic]} />
        </button>
      </li>
      <li>
        <button
          type='button'
          className={`outline-none focus:outline-none ${
            activeAction === Action.Link ? 'activeAction' : ''
          }`}
          onClick={() => handleActiveAction(Action.Link)}
        >
          <FontAwesomeIcon icon={['fas', Action.Link]} />
        </button>
      </li>
      <li>
        <button
          type='button'
          className={`outline-none focus:outline-none ${
            activeAction === Action.Code ? 'activeAction' : ''
          }`}
          onClick={() => handleActiveAction(Action.Code)}
        >
          <FontAwesomeIcon icon={['fas', Action.Code]} />
        </button>
      </li>
    </ul>
  );
};

export default EditorAction;

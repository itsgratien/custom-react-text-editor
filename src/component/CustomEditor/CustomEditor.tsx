import React, { useState } from 'react';
import './CustomEditor.scss';
import { Editor, EditorState, RichUtils } from 'draft-js';
import {
  faItalic,
  faBold,
  faHeading,
  faParagraph,
  faLink,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { EditorAction } from './EditorAction';

library.add(faItalic);
library.add(faBold);
library.add(faHeading);
library.add(faParagraph);
library.add(faLink);
library.add(faCode);

interface Props {
  height?: string;
}

const CustomEditor = (props: Props) => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const { height } = props;

  const handleOnChange = (value: EditorState) => {
    setEditorState(value);
  };

  const handleKeyCommand = (command: string, value: EditorState): any => {
    const newState = RichUtils.handleKeyCommand(value, command);

    if (newState) {
      setEditorState(newState);
    }

    return undefined;
  };

  return (
    <div
      className='customTextEditor relative w-full h-full flex flex-col items-center justify-center'
      style={{ height: height || '500px' }}
    >
      <EditorAction
        items={[
          {
            name: 'heading',
            command: '',
          },
          {
            name: 'paragraph',
            command: 'paragraph',
          },
          { name: 'bold', command: 'bold' },
          { name: 'italic', command: 'italic' },
          { name: 'link', command: '' },
          { name: 'code', command: 'code' },
        ]}
        handleKeyCommand={(command) =>
          command && handleKeyCommand(command, editorState)
        }
      />
      <div
        className={`editorContent relative w-full flex-1 mt-10 pl-10 pr-10 ${
          !editorState.getCurrentContent().hasText() ? 'text-center' : ''
        }`}
      >
        <Editor
          editorState={editorState}
          onChange={handleOnChange}
          placeholder='Start typing anything'
          spellCheck
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
};

export default CustomEditor;

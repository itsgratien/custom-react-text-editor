import React, { useState } from 'react';
import './CustomEditor.scss';
import { Editor, EditorState } from 'draft-js';
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

  return (
    <div
      className='customTextEditor relative w-full h-full flex flex-col items-center justify-center'
      style={{ height: height || '500px' }}
    >
      <EditorAction
        items={['heading', 'paragraph', 'bold', 'italic', 'link', 'code']}
      />
      <div
        className={`editorContent relative w-full flex-1 mt-8 ${
          editorState ? 'text-center' : ''
        }`}
      >
        <Editor
          editorState={editorState}
          onChange={handleOnChange}
          placeholder='Start typing anything'
        />
      </div>
    </div>
  );
};

export default CustomEditor;

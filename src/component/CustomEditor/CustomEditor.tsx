import React, { useState } from 'react';
import './CustomEditor.scss';
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';
import { EditorAction } from './EditorAction';

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

  const handleBlockType = (command: string) => {
    const newState = RichUtils.toggleBlockType(editorState, command);

    if (newState) {
      setEditorState(newState);
    }

    return undefined;
  };

  const handleToggleLink = (url: string) => {
    const contentState = editorState.getCurrentContent();

    const selectionState = editorState.getSelection();

    console.log(selectionState.getAnchorKey());

    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'IMMUTABLE',
      {
        url,
      }
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    const contentStateWithLink = Modifier.applyEntity(
      contentStateWithEntity,
      selectionState,
      entityKey
    );

    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithLink,
    });

    if (newEditorState) {
      setEditorState(newEditorState);
    }

    return undefined;
  };

  return (
    <div
      className='customTextEditor relative w-full h-full flex flex-col items-center justify-center'
      style={{ height: height || '500px' }}
    >
      <EditorAction
        handleKeyCommand={(command) =>
          command && handleKeyCommand(command, editorState)
        }
        handleBlockType={handleBlockType}
        handleToggleLink={handleToggleLink}
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

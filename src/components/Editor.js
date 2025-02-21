import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';


const myTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#20242C', // Dark background (VS Code Dark)
    backgroundImage: '',
    foreground: '#D4D4D4', // Light text for contrast
    caret: '#FFFFFF', // White caret
    selection: '#264F78', // Dark blue selection (VS Code style)
    selectionMatch: '#3A3D41', // Slightly lighter selection match
    gutterBackground: '#252526', // Darker background for line numbers
    gutterForeground: '#858585', // Grey gutter text
    gutterBorder: '#3E3E3E', // Dark border
    gutterActiveForeground: '#FFFFFF', // Highlight active line number
    lineHighlight: '#2A2D2E', // Slight highlight for current line
  },
  styles: [
    { tag: t.comment, color: '#787b80' },
    { tag: t.definition(t.typeName), color: '#194a7b' },
    { tag: t.typeName, color: '#194a7b' },
    { tag: t.tagName, color: '#008a02' },
    { tag: t.variableName, color: '#1a00db' },
  ],
});

const Editor = () => {

   const [code, setCode] = useState("")
   
  return (
    <CodeMirror
    value="console.log('hello world!');"
    height="100vh"
    theme={myTheme}
    extensions={[javascript({ jsx: true })]}
    onChange={(value, viewUpdate) => {
      console.log('value:', value);
    }}
  />

  );
};

export default Editor;
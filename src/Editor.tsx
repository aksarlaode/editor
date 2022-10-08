import React, { useCallback, useEffect } from 'react';
import useCodeMirror from './useCodemirror';

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor: React.FC<Props> = props => {
  const { onChange, initialDoc } = props;
  const handleChange = useCallback(
    (state: { doc: { toString: () => string } }) =>
      onChange(state.doc.toString()),
    [onChange]
  );
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView]);

  return <div ref={refContainer}></div>;
};

export default Editor;

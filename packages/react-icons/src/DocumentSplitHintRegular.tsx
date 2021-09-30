import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V9.5a.5.5 0 01-1 0V8h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1v5.5a.5.5 0 01-1 0V4zm7-.8v3.3c0 .28.22.5.5.5h3.3L11 3.2zm-6.5 8.3c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm11 0c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zM4.5 15c.28 0 .5.22.5.5v.5a1 1 0 001 1h.5a.5.5 0 010 1H6a2 2 0 01-2-2v-.5c0-.28.22-.5.5-.5zm11 0c.28 0 .5.22.5.5v.5a2 2 0 01-2 2h-.5a.5.5 0 010-1h.5a1 1 0 001-1v-.5c0-.28.22-.5.5-.5zm-7 2.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1H9a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentSplitHintRegular = wrapIcon(rawSvg({}), 'DocumentSplitHintRegular');
export default DocumentSplitHintRegular;
      
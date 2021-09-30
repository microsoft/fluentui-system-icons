import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 7.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM7 13.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm-1-11a.5.5 0 011 0V3h2.5v-.5a.5.5 0 011 0V3H13v-.5a.5.5 0 011 0V3h.5c.83 0 1.5.67 1.5 1.5v4.73c-.33.14-.63.34-.9.61l-.1.1V4.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h3.72l-.16.65L9 18H5.5A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3H6v-.5zm9.8 8.05l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" fill={primaryFill} /></svg>;
}

const NotepadEditRegular = wrapIcon(rawSvg({}), 'NotepadEditRegular');
export default NotepadEditRegular;
      
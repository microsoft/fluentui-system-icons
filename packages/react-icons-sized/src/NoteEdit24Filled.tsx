import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 17.75C3 19.55 4.46 21 6.25 21h4.92l.35-1.42c.16-.65.5-1.24.97-1.72l5.9-5.9a3.28 3.28 0 012.61-.95V6.25C21 4.45 19.54 3 17.75 3H11v4.75C11 9.55 9.54 11 7.75 11H3v6.75zM9.5 3.44L3.44 9.5h4.31c.97 0 1.75-.78 1.75-1.75V3.44zm9.6 9.23l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const NoteEdit24Filled = wrapIcon(rawSvg({}), 'NoteEdit24Filled');
export default NoteEdit24Filled;
      
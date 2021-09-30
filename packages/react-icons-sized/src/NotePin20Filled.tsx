import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 9.02v5.16A3 3 0 006 17h4v-4.18a3 3 0 012.82-2.81L13 10h4V5.82A3 3 0 0014 3H9.46c.95 1.12.6 2.85-.74 3.51l-1.89.92-.44 1.28a1.82 1.82 0 01-3 .7L3 9zm13.54 2.63a2 2 0 00.36-.65h-4.06a2 2 0 00-1.83 1.85L11 13v3.9a2 2 0 00.8-.49l4.61-4.62.13-.14zm-8-8.26L6.6 1.46a1.5 1.5 0 00-2.4.4L3.4 3.51a1 1 0 01-.57.5l-1.1.39a1 1 0 00-.39 1.65L2.3 7 1 8.3V9h.7L3 7.7l.95.95a1 1 0 001.65-.38l.38-1.1a1 1 0 01.5-.57l1.65-.8a1.5 1.5 0 00.4-2.41z" fill={primaryFill} /></svg>;
}

const NotePin20Filled = wrapIcon(rawSvg({}), 'NotePin20Filled');
export default NotePin20Filled;
      
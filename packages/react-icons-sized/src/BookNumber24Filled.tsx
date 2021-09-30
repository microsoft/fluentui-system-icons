import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.98 9.98h1.49l-.36 1.59h-1.52l.39-1.59z" fill={primaryFill} /><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zm7.02 3.07l-.22.91H9.63a.75.75 0 00-.65.75v.1c.06.37.37.65.75.65h.7l-.38 1.59h-.9a.75.75 0 00-.65.75v.1c.06.36.37.65.75.65h.43l-.12.5-.02.1c-.04.37.2.72.57.81l.1.02c.36.04.71-.2.8-.57l.21-.86h1.54l-.12.51-.01.1c-.04.37.2.72.58.8l.1.02c.37.03.71-.21.8-.58l.2-.85h.93l.1-.01a.75.75 0 00.65-.74v-.1a.75.75 0 00-.75-.65h-.6l.37-1.59h.82a.75.75 0 00.65-.75v-.1a.75.75 0 00-.75-.65h-.38l.13-.56.02-.1a.75.75 0 00-.58-.8l-.1-.02a.75.75 0 00-.8.58l-.2.9h-1.48l.14-.55.02-.1a.75.75 0 00-1.48-.26z" fill={primaryFill} /></svg>;
}

const BookNumber24Filled = wrapIcon(rawSvg({}), 'BookNumber24Filled');
export default BookNumber24Filled;
      
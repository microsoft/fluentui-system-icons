import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 12.02c0 1.06.2 2.1.6 3.08l.6 1.42c.22.55.64 1.01 1.17 1.29.27.14.56.21.86.21h2.55c.77 0 1.49-.41 1.87-1.08.5-.87 1.02-1.7 1.72-2.43l1.32-1.39c.44-.46.97-.84 1.49-1.23l.59-.45a.6.6 0 00.23-.47c0-.75-.54-1.57-1.22-1.79a3.34 3.34 0 00-2.78.29V4.5a1.5 1.5 0 00-2.05-1.4 1.5 1.5 0 00-2.9 0A1.5 1.5 0 006 4.5v.09A1.5 1.5 0 004 6v6.02zM8 4.5v4a.5.5 0 001 0v-5a.5.5 0 011 0v5a.5.5 0 001 0v-4a.5.5 0 011 0v6a.5.5 0 00.85.37h.01c.22-.22.44-.44.72-.58.7-.35 2.22-.57 2.4.5l-.53.4c-.52.4-1.04.78-1.48 1.24l-1.33 1.38c-.75.79-1.31 1.7-1.85 2.63-.21.36-.6.58-1.01.58H7.23a.87.87 0 01-.4-.1 1.55 1.55 0 01-.71-.78l-.59-1.42a7.09 7.09 0 01-.53-2.7V6a.5.5 0 011 0v3.5a.5.5 0 001 0v-5a.5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const HandRightRegular = wrapIcon(rawSvg({}), 'HandRightRegular');
export default HandRightRegular;
      
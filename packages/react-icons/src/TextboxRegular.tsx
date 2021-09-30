import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 6a.5.5 0 000 1h7a.5.5 0 000-1h-7z" fill={primaryFill} /><path d="M6 9.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M6.5 12a.5.5 0 000 1h7a.5.5 0 000-1h-7z" fill={primaryFill} /><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5v-9C4 4.67 4.67 4 5.5 4z" fill={primaryFill} /></svg>;
}

const TextboxRegular = wrapIcon(rawSvg({}), 'TextboxRegular');
export default TextboxRegular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 2A2.5 2.5 0 0010 4.5v3a2.5 2.5 0 005 0v-3A2.5 2.5 0 0012.5 2zm0 7A1.5 1.5 0 0111 7.5v-3a1.5 1.5 0 013 0v3c0 .83-.67 1.5-1.5 1.5z" fill={primaryFill} /><path d="M3.5 12a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1.5a.5.5 0 000-1H4v-2h2.5a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M8.5 12a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1a2 2 0 100-4H8.5zm1.5 3H9v-2h1a1 1 0 110 2z" fill={primaryFill} /><path d="M13 13.75c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 01-1 0v-.01a.49.49 0 00-.49-.49h-.76a.75.75 0 000 1.5h.5a1.75 1.75 0 110 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 011 0v.01c0 .27.22.49.49.49h.76a.75.75 0 000-1.5h-.5c-.97 0-1.75-.78-1.75-1.75z" fill={primaryFill} /><path d="M4 4.5v3a2.5 2.5 0 101-2v-1a1.5 1.5 0 113 0 .5.5 0 001 0 2.5 2.5 0 00-5 0zM6.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /></svg>;
}

const Fps6020Regular = wrapIcon(rawSvg({}), 'Fps6020Regular');
export default Fps6020Regular;
      
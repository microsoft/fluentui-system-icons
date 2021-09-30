import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 00-2.24-2zm-3.5 1.5h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5zm2.25 6.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zm.75 4.75h3.5a.75.75 0 110 1.5h-3.5a.75.75 0 110-1.5zm-2.47-5.22l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.47-1.47a.75.75 0 111.06 1.06zm0 4.44c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const ClipboardTaskListLtr24Filled = wrapIcon(rawSvg({}), 'ClipboardTaskListLtr24Filled');
export default ClipboardTaskListLtr24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4v6c0 1.1.9 2 2 2h1v-1H4a1 1 0 01-1-1V5.5h2.75a.5.5 0 00.34-.13L7.59 4H12a1 1 0 011 1v2h.5c.17 0 .34.02.5.05V5a2 2 0 00-2-2H7.18l-1.12-.89A.5.5 0 005.75 2H4a2 2 0 00-2 2zm1 0a1 1 0 011-1h1.57l.87.7-.88.8H3V4zm3.01 5.3l4.5 2.63L15 9.5V9.5c0-.83-.67-1.5-1.5-1.5h-6c-.76 0-1.4.57-1.49 1.3zM15 10.64l-4.26 2.3a.5.5 0 01-.5 0L6 10.44v3.05c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-2.86z" fill={primaryFill} /></svg>;
}

const FolderMail16Regular = wrapIcon(rawSvg({}), 'FolderMail16Regular');
export default FolderMail16Regular;
      
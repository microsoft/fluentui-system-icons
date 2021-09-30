import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.39 4.29L8.07 3.3a1.5 1.5 0 00-.9-.3H4.5A2.5 2.5 0 002 5.5v1h5.07a.5.5 0 00.36-.16L9.4 4.3zm1.17.21l-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 004.5 17h5.1a5.5 5.5 0 018.4-6.74V6.84a2.5 2.5 0 00-2.5-2.34h-4.94zM14.5 19a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.5-7v.15a3.01 3.01 0 00-3.62.48.5.5 0 00.7.7 2 2 0 012.39-.33H15a.5.5 0 000 1h1.5a.5.5 0 00.5-.5V12a.5.5 0 00-1 0zm-1.55 5.25a3 3 0 002.17-.88.5.5 0 00-.7-.7 2 2 0 01-2.39.33H14a.5.5 0 000-1h-1.5a.5.5 0 00-.5.5V17a.5.5 0 001 0v-.15a3.01 3.01 0 001.45.4z" fill={primaryFill} /></svg>;
}

const FolderSyncFilled = wrapIcon(rawSvg({}), 'FolderSyncFilled');
export default FolderSyncFilled;
      
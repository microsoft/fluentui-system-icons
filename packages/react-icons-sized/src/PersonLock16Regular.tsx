import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 14v-1c-2.57 0-4-1.56-4-3v-.5c0-.28.22-.5.5-.5h3.72c.26-.48.72-.85 1.28-.96V8h-5C2.67 8 2 8.67 2 9.5v.5c0 1.97 1.86 4 5 4zm2.75-9.75a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0zm-4.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM9.5 8v1h-.63C8.4 9 8 9.4 8 9.9v4.2c0 .5.4.9.88.9h5.24c.49 0 .88-.4.88-.9V9.9c0-.5-.4-.9-.88-.9h-.62V8a2 2 0 10-4 0zm2-1a1 1 0 011 1v1h-2V8a1 1 0 011-1zm0 5.75a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /></svg>;
}

const PersonLock16Regular = wrapIcon(rawSvg({}), 'PersonLock16Regular');
export default PersonLock16Regular;
      
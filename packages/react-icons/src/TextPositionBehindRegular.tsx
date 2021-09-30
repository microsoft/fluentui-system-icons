import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /><path d="M16.5 10h-2V9h2a.5.5 0 010 1z" fill={primaryFill} /><path d="M3.5 9h2v1h-2a.5.5 0 010-1z" fill={primaryFill} /><path d="M8.5 9h3v1h-3V9z" fill={primaryFill} /><path d="M3 15.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M7.5 8.5a2.5 2.5 0 015 0v5a.5.5 0 001 0v-5a3.5 3.5 0 10-7 0v5a.5.5 0 001 0v-5z" fill={primaryFill} /></svg>;
}

const TextPositionBehindRegular = wrapIcon(rawSvg({}), 'TextPositionBehindRegular');
export default TextPositionBehindRegular;
      
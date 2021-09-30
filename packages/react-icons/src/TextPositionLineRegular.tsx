import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /><path d="M3.5 15a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /><path d="M11 12.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4 8.5a2.5 2.5 0 015 0v5a.5.5 0 001 0v-5a3.5 3.5 0 10-7 0v5a.5.5 0 001 0v-5z" fill={primaryFill} /></svg>;
}

const TextPositionLineRegular = wrapIcon(rawSvg({}), 'TextPositionLineRegular');
export default TextPositionLineRegular;
      
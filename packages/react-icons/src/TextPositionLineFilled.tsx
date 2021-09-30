import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" fill={primaryFill} /><path d="M3.5 14.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" fill={primaryFill} /><path d="M10.75 12.5c0-.41.34-.75.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M4.25 8.5a2.25 2.25 0 014.5 0v5a.75.75 0 001.5 0v-5a3.75 3.75 0 10-7.5 0v5a.75.75 0 001.5 0v-5z" fill={primaryFill} /></svg>;
}

const TextPositionLineFilled = wrapIcon(rawSvg({}), 'TextPositionLineFilled');
export default TextPositionLineFilled;
      
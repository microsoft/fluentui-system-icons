import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2a1 1 0 100 2H8L3.95 9.4a1 1 0 00.8 1.6H10a1 1 0 100-2H6.75l4.05-5.4A1 1 0 0010 2H4.75zm2.28 10a1 1 0 01.95.67l2.8 8.07a1 1 0 01-1.9.66l-.4-1.2H5.6l-.41 1.2a1 1 0 01-1.9-.66l2.8-8.07a1 1 0 01.94-.67zm0 4.06L6.3 18.2h1.49l-.75-2.15zm5.26.23a1 1 0 011.42 0L16 18.6V3a1 1 0 112 0v15.59l2.3-2.3a1 1 0 011.4 1.42l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.42z" fill={primaryFill} /></svg>;
}

const TextSortDescending24Filled = wrapIcon(rawSvg({}), 'TextSortDescending24Filled');
export default TextSortDescending24Filled;
      
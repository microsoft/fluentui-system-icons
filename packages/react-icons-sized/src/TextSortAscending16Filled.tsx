import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 12.65l1.77-1.48a.75.75 0 01.96 1.16l-3 2.5a.75.75 0 01-.96 0l-3-2.5a.75.75 0 11.96-1.16l1.77 1.48V1.75a.75.75 0 011.5 0v10.9zM4.5 1c.32 0 .6.2.7.5l2 5.5a.75.75 0 11-1.4.5L5.6 7H3.4l-.19.5A.75.75 0 111.8 7l2-5.5c.1-.3.38-.5.7-.5zm0 2.94L3.93 5.5h1.14L4.5 3.94zM2.75 9a.75.75 0 100 1.5h1.97l-2.56 3.29A.75.75 0 002.75 15h3.5a.75.75 0 000-1.5H4.28l2.56-3.29A.75.75 0 006.25 9h-3.5z" fill={primaryFill} /></svg>;
}

const TextSortAscending16Filled = wrapIcon(rawSvg({}), 'TextSortAscending16Filled');
export default TextSortAscending16Filled;
      
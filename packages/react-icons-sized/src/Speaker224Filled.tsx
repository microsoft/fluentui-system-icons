import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 4.25v15.5a1.25 1.25 0 01-2.08.93l-4.5-4a.75.75 0 00-.49-.18H4.25C3.01 16.5 2 15.49 2 14.25v-4.5C2 8.5 3 7.5 4.25 7.5h3.68c.18 0 .36-.07.5-.2l4.49-3.98c.8-.72 2.08-.15 2.08.93zm4 1.65a.75.75 0 011.04.15 9.96 9.96 0 010 11.9.75.75 0 01-1.2-.9 8.46 8.46 0 000-10.1.75.75 0 01.15-1.05zm-1.86 2.47a.75.75 0 011.02.3 6.97 6.97 0 010 6.66.75.75 0 01-1.32-.72 5.47 5.47 0 000-5.22.75.75 0 01.3-1.02z" fill={primaryFill} /></svg>;
}

const Speaker224Filled = wrapIcon(rawSvg({}), 'Speaker224Filled');
export default Speaker224Filled;
      
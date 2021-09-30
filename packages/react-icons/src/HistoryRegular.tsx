import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2h.09c.2.04.36.2.4.4l.01.1v2.2a8 8 0 11-2 4.77.5.5 0 011 .05 7 7 0 101.26-3.53H7.5l.09.01a.5.5 0 010 .99H3.41a.5.5 0 01-.4-.4L3 6.49V2.42a.5.5 0 01.41-.4L3.5 2zm6 4h.09c.2.04.36.2.4.4l.01.1v4h2.09a.5.5 0 010 1H9.41a.5.5 0 01-.4-.41l-.01-.1V6.42a.5.5 0 01.41-.4L9.5 6z" fill={primaryFill} /></svg>;
}

const HistoryRegular = wrapIcon(rawSvg({}), 'HistoryRegular');
export default HistoryRegular;
      
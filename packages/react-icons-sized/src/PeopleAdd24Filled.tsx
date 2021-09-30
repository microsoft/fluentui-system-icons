import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM4 13h8.8a6.48 6.48 0 00-1.06 7.51c-1.05.35-2.2.49-3.24.49-2.72 0-6.34-.96-6.5-4.27V15c0-1.1.9-2 2-2zm13.5 1l-.09.01a.5.5 0 00-.4.4l-.01.1V17h-2.59a.5.5 0 00-.4.41l-.01.09v.09c.05.2.2.36.41.4l.09.01H17v2.59c.05.2.2.36.41.4l.09.01h.09a.5.5 0 00.4-.41l.01-.09V18h2.59a.5.5 0 00.4-.41l.01-.09v-.09a.5.5 0 00-.41-.4L20.5 17H18v-2.59a.5.5 0 00-.41-.4h-.09zm-9-12a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm9 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /></svg>;
}

const PeopleAdd24Filled = wrapIcon(rawSvg({}), 'PeopleAdd24Filled');
export default PeopleAdd24Filled;
      
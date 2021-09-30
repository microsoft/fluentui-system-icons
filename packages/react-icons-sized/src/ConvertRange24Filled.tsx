import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3C5.01 3 4 4 4 5.25v2.5C4 8.99 5 10 6.25 10h9.5C16.99 10 18 9 18 7.75v-2.5C18 4.01 17 3 15.75 3h-9.5z" fill={primaryFill} /><path d="M17.35 16.45l-.07.08a.75.75 0 01-.98.07l-.08-.07-2-2a.75.75 0 01-.07-.98l.07-.08 2-2a.75.75 0 011.13.98l-.07.08-.72.72h1.5c.65 0 1.18-.5 1.24-1.12l.01-.13V9.75a.75.75 0 011.5-.1V12a2.75 2.75 0 01-2.58 2.74l-.17.01h-1.5l.72.72c.27.26.3.68.07.98z" fill={primaryFill} /><path d="M14.27 12l-.78.79-.12.14-.03.03c-.5.68-.45 1.65.17 2.28l2.03 2.02.14.12.03.03c.68.5 1.66.45 2.28-.17l.01-.02v2.03c0 1.24-1 2.25-2.25 2.25h-9.5c-1.24 0-2.25-1-2.25-2.25v-5C4 13.01 5 12 6.25 12h8.02zM8 16.75c0 .41.31.75.7.75h4.6c.39 0 .7-.34.7-.75s-.31-.75-.7-.75H8.7c-.39 0-.7.34-.7.75z" fill={primaryFill} /></svg>;
}

const ConvertRange24Filled = wrapIcon(rawSvg({}), 'ConvertRange24Filled');
export default ConvertRange24Filled;
      
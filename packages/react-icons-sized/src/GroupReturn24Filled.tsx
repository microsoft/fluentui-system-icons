import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5a2 2 0 11-4 0 2 2 0 014 0zm14 0a2 2 0 11-4 0 2 2 0 014 0zM7 19a2 2 0 11-4 0 2 2 0 014 0zM8 5a3 3 0 01-.17 1h4.67c.28 0 .5.22.5.5V9h-1.5A2.5 2.5 0 009 11.5V13H6.5a.5.5 0 01-.5-.5V7.83a3 3 0 01-2 0v4.67A2.5 2.5 0 006.5 15H9v2.5a2.5 2.5 0 002.5 2.5 6.48 6.48 0 01-.5-2.5v-6c0-.28.22-.5.5-.5h6c.89 0 1.73.18 2.5.5A2.5 2.5 0 0017.5 9H15V6.5A2.5 2.5 0 0012.5 4H7.83A3 3 0 018 5zm15 12.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM15.7 16l.65-.65a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7l-.64-.65h2.04c1.24 0 2.25 1 2.25 2.25v.25a.5.5 0 001 0v-.25c0-1.8-1.46-3.25-3.25-3.25h-2.04z" fill={primaryFill} /></svg>;
}

const GroupReturn24Filled = wrapIcon(rawSvg({}), 'GroupReturn24Filled');
export default GroupReturn24Filled;
      
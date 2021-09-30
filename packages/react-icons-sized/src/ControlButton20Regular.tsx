import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 7a2 2 0 00-2 2v2c0 1.1.9 2 2 2h.5a.5.5 0 000-1H6a1 1 0 01-1-1V9a1 1 0 011-1h.5a.5.5 0 000-1H6zm3 .5a.5.5 0 00-1 0V9h-.5a.5.5 0 000 1H8v1.75c0 .69.56 1.25 1.25 1.25h.25a.5.5 0 000-1h-.25a.25.25 0 01-.25-.25V10h.5a.5.5 0 000-1H9V7.5zm7 0a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zm-4 3c0-.28.22-.5.5-.5h1a.5.5 0 000-1h-1c-.83 0-1.5.67-1.5 1.5v2a.5.5 0 001 0v-2zM4.75 4A2.75 2.75 0 002 6.75v6.5A2.75 2.75 0 004.75 16h10.5A2.75 2.75 0 0018 13.25v-6.5A2.75 2.75 0 0015.25 4H4.75zM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 15 3 14.22 3 13.25v-6.5z" fill={primaryFill} /></svg>;
}

const ControlButton20Regular = wrapIcon(rawSvg({}), 'ControlButton20Regular');
export default ControlButton20Regular;
      
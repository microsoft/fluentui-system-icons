import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 13h9.3a6.48 6.48 0 00-1.06 7.51c-1.05.35-2.2.49-3.24.49-2.72 0-6.34-.96-6.5-4.27V14.5c0-.78.6-1.42 1.36-1.5h.14zM21 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM8.5 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm5.78 11.98a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 000 1.8l.55.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.73 5.73 0 00-.01-1.8l-.54-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
}

const PeopleSettings24Filled = wrapIcon(rawSvg({}), 'PeopleSettings24Filled');
export default PeopleSettings24Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.63V3.75a.75.75 0 00-1.5 0v3.5c0 .41.34.75.75.75h4a.75.75 0 000-1.5H5.23A6.3 6.3 0 0110 4.25c2.4 0 4.53 1.41 5.65 3.54.15.28.43.46.73.46.54 0 .91-.53.67-1.01A7.93 7.93 0 0010 2.75a7.77 7.77 0 00-6 2.88zm4.25 5.12a.75.75 0 00-1.24-.57l-1.75 1.5a.75.75 0 10.98 1.14l.51-.44v3.87a.75.75 0 001.5 0v-5.5zM15 13.5c0 1.93-.63 3.5-2.5 3.5-1.88 0-2.5-1.57-2.5-3.5s.63-3.5 2.5-3.5c1.88 0 2.5 1.57 2.5 3.5zm-1.5 0c0-.85-.15-1.4-.32-1.69a.59.59 0 00-.22-.22.94.94 0 00-.46-.09.94.94 0 00-.46.09.59.59 0 00-.22.22c-.17.3-.32.84-.32 1.69s.15 1.4.32 1.69c.08.12.15.18.22.22.07.04.2.09.46.09s.39-.05.46-.09c.07-.04.14-.1.22-.22.17-.3.32-.84.32-1.69z" fill={primaryFill} /></svg>;
}

const SkipBack10Filled = wrapIcon(rawSvg({}), 'SkipBack10Filled');
export default SkipBack10Filled;
      
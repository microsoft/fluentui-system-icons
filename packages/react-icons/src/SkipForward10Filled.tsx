import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.73 5.63V3.75a.75.75 0 011.5 0v3.5c0 .41-.33.75-.75.75h-4a.75.75 0 010-1.5h2.03a6.3 6.3 0 00-4.78-2.25 6.45 6.45 0 00-5.65 3.54.83.83 0 01-.73.46c-.54 0-.91-.53-.67-1.01a7.93 7.93 0 017.05-4.49c2.4 0 4.54 1.12 6 2.88zM12.5 17c1.88 0 2.5-1.57 2.5-3.5s-.63-3.5-2.5-3.5c-1.88 0-2.5 1.57-2.5 3.5s.63 3.5 2.5 3.5zm.68-1.81a.59.59 0 01-.22.22.94.94 0 01-.46.09.94.94 0 01-.46-.09.59.59 0 01-.22-.22 3.38 3.38 0 01-.32-1.69c0-.85.15-1.4.32-1.69a.59.59 0 01.22-.22c.07-.04.2-.09.46-.09s.39.05.46.09c.07.04.14.1.22.22.17.3.32.84.32 1.69s-.15 1.4-.32 1.69zm-4.93-4.44a.75.75 0 00-1.24-.57l-1.75 1.5a.75.75 0 10.98 1.14l.51-.44v3.87a.75.75 0 001.5 0v-5.5z" fill={primaryFill} /></svg>;
}

const SkipForward10Filled = wrapIcon(rawSvg({}), 'SkipForward10Filled');
export default SkipForward10Filled;
      
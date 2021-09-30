import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 9.25a5.75 5.75 0 015.75-5.75h.5a.75.75 0 000-1.5h-.5C9.25 2 6 5.25 6 9.25v1c0 .41-.34.75-.75.75h-2.5a.75.75 0 000 1.5h2.5c1.24 0 2.25-1 2.25-2.25v-1zm6.25-3A3.25 3.25 0 0010.5 9.5v1a4.75 4.75 0 01-4.75 4.75h-3a.75.75 0 010-1.5h3c1.8 0 3.25-1.46 3.25-3.25v-1a4.75 4.75 0 014.75-4.75h3.5a.75.75 0 010 1.5h-3.5zm.5 2.75a.75.75 0 00-.75.75v1c0 4-3.25 7.25-7.25 7.25h-.5a.75.75 0 010-1.5h.5A5.75 5.75 0 0012 10.75v-1c0-1.24 1-2.25 2.25-2.25h3a.75.75 0 010 1.5h-3z" fill={primaryFill} /></svg>;
}

const StreamFilled = wrapIcon(rawSvg({}), 'StreamFilled');
export default StreamFilled;
      
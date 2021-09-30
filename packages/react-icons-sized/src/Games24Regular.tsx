import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5a7 7 0 01.24 14H9a7 7 0 01-.24-14H15zm0 1.5H9a5.5 5.5 0 00-.22 11H15a5.5 5.5 0 00.22-11H15zM8 9c.41 0 .75.34.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 110-1.5h1.5v-1.5c0-.41.34-.75.75-.75zm6.75 3.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm2-3.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const Games24Regular = wrapIcon(rawSvg({}), 'Games24Regular');
export default Games24Regular;
      
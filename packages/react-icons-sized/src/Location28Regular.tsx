import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2.25A9.75 9.75 0 0123.75 12c0 4.12-2.9 8.6-8.61 13.52-.66.56-1.62.56-2.28 0l-.38-.33C7.02 20.4 4.25 16.03 4.25 12A9.75 9.75 0 0114 2.25zm0 1.5A8.25 8.25 0 005.75 12c0 3.5 2.55 7.54 7.71 12.06l.38.32c.1.08.23.08.32 0 5.42-4.65 8.09-8.8 8.09-12.38 0-4.56-3.7-8.25-8.25-8.25zm0 4.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm0 1.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" fill={primaryFill} /></svg>;
}

const Location28Regular = wrapIcon(rawSvg({}), 'Location28Regular');
export default Location28Regular;
      
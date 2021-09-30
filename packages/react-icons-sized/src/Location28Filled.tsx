import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2.25A9.75 9.75 0 0123.75 12c0 4.12-2.9 8.6-8.61 13.52-.66.56-1.62.56-2.28 0l-.38-.33C7.02 20.4 4.25 16.03 4.25 12A9.75 9.75 0 0114 2.25zm0 6a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" fill={primaryFill} /></svg>;
}

const Location28Filled = wrapIcon(rawSvg({}), 'Location28Filled');
export default Location28Filled;
      
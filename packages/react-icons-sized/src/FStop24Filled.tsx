import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.44 6.57a3 3 0 013.94-2.33l.6.2a1 1 0 00.65-1.88l-.6-.21a5 5 0 00-6.56 3.88l-.73 4.27H7a1 1 0 000 2h3.4l-.69 4.04a3 3 0 01-4.4 2.13l-.08-.05a1 1 0 00-.96 1.76l.07.04a5 5 0 007.34-3.54l.75-4.38H16a1 1 0 100-2h-3.23l.67-3.93z" fill={primaryFill} /></svg>;
}

const FStop24Filled = wrapIcon(rawSvg({}), 'FStop24Filled');
export default FStop24Filled;
      
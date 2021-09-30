import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5.27V4c0-1.1.9-2 2-2h4a2 2 0 012 2v1.27c.6.34 1 .99 1 1.73v1a1 1 0 011 1v1a1 1 0 01-1 1v2a2 2 0 01-1 1.73V16a2 2 0 01-2 2H8a2 2 0 01-2-2v-1.27A2 2 0 015 13V7a2 2 0 011-1.73zM8 3a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1H8zm6 10V7a1 1 0 00-1-1H7a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1zm-7 3a1 1 0 001 1h4a1 1 0 001-1v-1H7v1z" fill={primaryFill} /></svg>;
}

const SmartwatchRegular = wrapIcon(rawSvg({}), 'SmartwatchRegular');
export default SmartwatchRegular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 9h3c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 017 13.5v-3C7 9.67 7.67 9 8.5 9zM8 10.5v.5h2v-1H8.5a.5.5 0 00-.5.5zM8 12v1.5c0 .28.22.5.5.5H10v-2H8zm3.5 2a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H11v4h.5z" fill={primaryFill} /><path d="M7 2a3 3 0 00-3 3v10a3 3 0 003 3h6a3 3 0 003-3V7.54a3 3 0 00-.88-2.13L12.6 2.88A3 3 0 0010.46 2H7zM5 5c0-1.1.9-2 2-2h3.46a2 2 0 011.42.59l2.53 2.53A2 2 0 0115 7.54V15a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" fill={primaryFill} /></svg>;
}

const SimRegular = wrapIcon(rawSvg({}), 'SimRegular');
export default SimRegular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 13.5a.5.5 0 111 0 .5.5 0 01-1 0zM7.5 13a.5.5 0 100 1 .5.5 0 000-1zM3 4.5A2.5 2.5 0 015.5 2h8A2.5 2.5 0 0116 4.5v11a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 013 15.5v-11zm7 1a.5.5 0 00-1 0V6H7.5a.5.5 0 000 1H9v1H6.5a.5.5 0 000 1H9v1H6.5a.5.5 0 000 1H9v1H7.5a1.5 1.5 0 101.41 1h1.18a1.5 1.5 0 101.41-1H10v-1h2.5a.5.5 0 000-1H10V9h2.5a.5.5 0 000-1H10V7h1.5a.5.5 0 000-1H10v-.5z" fill={primaryFill} /></svg>;
}

const XrayFilled = wrapIcon(rawSvg({}), 'XrayFilled');
export default XrayFilled;
      
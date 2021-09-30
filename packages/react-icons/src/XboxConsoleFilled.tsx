import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2a.5.5 0 00-.5.5v15c0 .28.22.5.5.5H7V9.5a.5.5 0 011 0V18h7.5a.5.5 0 00.5-.5v-15a.5.5 0 00-.5-.5h-11zm3 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /></svg>;
}

const XboxConsoleFilled = wrapIcon(rawSvg({}), 'XboxConsoleFilled');
export default XboxConsoleFilled;
      
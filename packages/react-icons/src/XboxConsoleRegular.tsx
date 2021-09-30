import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 6.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M4 2.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v15a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-15zm4 7V17h7V3H5v14h2V9.5a.5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const XboxConsoleRegular = wrapIcon(rawSvg({}), 'XboxConsoleRegular');
export default XboxConsoleRegular;
      
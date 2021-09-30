import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.88 7.92a.5.5 0 01-.05.7l-1 .88H8.5a.5.5 0 010 1H5.83l1 .87a.5.5 0 11-.66.76l-2-1.75a.5.5 0 010-.76l2-1.75a.5.5 0 01.7.05z" fill={primaryFill} /><path d="M14.17 10.5l-1 .87a.5.5 0 00.66.76l2-1.75a.5.5 0 000-.76l-2-1.75a.5.5 0 00-.66.76l1 .87H11.5a.5.5 0 000 1h2.67z" fill={primaryFill} /><path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2-1a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H4z" fill={primaryFill} /></svg>;
}

const ScaleFitRegular = wrapIcon(rawSvg({}), 'ScaleFitRegular');
export default ScaleFitRegular;
      
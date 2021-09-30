import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" fill={primaryFill} /><path d="M4 16c0 1.1.9 2 2 2h8a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2z" fill={primaryFill} /><path d="M2.5 9.5a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /></svg>;
}

const InsertFilled = wrapIcon(rawSvg({}), 'InsertFilled');
export default InsertFilled;
      
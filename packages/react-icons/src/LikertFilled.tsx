import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 16v-5.5H2V13a3 3 0 003 3h1z" fill={primaryFill} /><path d="M7 16h8a3 3 0 003-3v-2.5H7V16zm2-2a.75.75 0 110-1.5.75.75 0 010 1.5zm2.25 0a.75.75 0 110-1.5.75.75 0 010 1.5zm2.25 0a.75.75 0 110-1.5.75.75 0 010 1.5zm2.25 0a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /><path d="M18 9.5V7a3 3 0 00-3-3H7v5.5h11zM9.75 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M6 4H5a3 3 0 00-3 3v2.5h4V4z" fill={primaryFill} /></svg>;
}

const LikertFilled = wrapIcon(rawSvg({}), 'LikertFilled');
export default LikertFilled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M11.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M14 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M16.25 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M8.75 8a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M11 8a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M13.25 8a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M15.5 8a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-2a2 2 0 00-2 2v2.5h3V5H5zm1 5.5H3V13c0 1.1.9 2 2 2h1v-4.5zm1 0V15h8a2 2 0 002-2v-2.5H7zm10-1V7a2 2 0 00-2-2H7v4.5h10z" fill={primaryFill} /></svg>;
}

const LikertRegular = wrapIcon(rawSvg({}), 'LikertRegular');
export default LikertRegular;
      
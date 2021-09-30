import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H5zm10 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM12 10a1 1 0 00-1 1v1c0 1.1.9 2 2 2h1a2 2 0 002-2v-1a1 1 0 00-1-1h-3z" fill={primaryFill} /></svg>;
}

const ShareScreenPersonOverlayInsideFilled = wrapIcon(rawSvg({}), 'ShareScreenPersonOverlayInsideFilled');
export default ShareScreenPersonOverlayInsideFilled;
      
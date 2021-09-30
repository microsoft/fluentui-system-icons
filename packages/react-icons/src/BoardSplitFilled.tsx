import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a3 3 0 00-3 3v3h8V3H6zm5 7H3v4a3 3 0 003 3h5v-7zm3 7h-2v-4h5v1a3 3 0 01-3 3zm3-5h-5V8h5v4zm0-5h-5V3h2a3 3 0 013 3v1z" fill={primaryFill} /></svg>;
}

const BoardSplitFilled = wrapIcon(rawSvg({}), 'BoardSplitFilled');
export default BoardSplitFilled;
      
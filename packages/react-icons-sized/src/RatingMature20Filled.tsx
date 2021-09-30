import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.92 1.24A.5.5 0 007 7.5v5a.5.5 0 101 0V9.24l1.58 2.53a.5.5 0 00.84 0L12 9.24v3.26a.5.5 0 101 0v-5a.5.5 0 00-.92-.26L10 10.56 7.92 7.24z" fill={primaryFill} /></svg>;
}

const RatingMature20Filled = wrapIcon(rawSvg({}), 'RatingMature20Filled');
export default RatingMature20Filled;
      
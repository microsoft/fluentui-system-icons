import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10.5v-6A2.5 2.5 0 014.5 2h6A2.5 2.5 0 0113 4.5V7H9.5A2.5 2.5 0 007 9.5V13H4.5A2.5 2.5 0 012 10.5zM7 13v2.5A2.5 2.5 0 009.5 18h6a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0015.5 7H13v3.5a2.5 2.5 0 01-2.5 2.5H7z" fill={primaryFill} /></svg>;
}

const ShapeExcludeFilled = wrapIcon(rawSvg({}), 'ShapeExcludeFilled');
export default ShapeExcludeFilled;
      
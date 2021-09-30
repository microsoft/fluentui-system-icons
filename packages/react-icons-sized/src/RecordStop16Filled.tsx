import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 8a7 7 0 1114 0A7 7 0 011 8zm5-3a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1H6z" fill={primaryFill} /></svg>;
}

const RecordStop16Filled = wrapIcon(rawSvg({}), 'RecordStop16Filled');
export default RecordStop16Filled;
      
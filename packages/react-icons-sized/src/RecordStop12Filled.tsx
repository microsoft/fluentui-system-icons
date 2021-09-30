import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11A5 5 0 106 1a5 5 0 000 10zM5 4h2a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const RecordStop12Filled = wrapIcon(rawSvg({}), 'RecordStop12Filled');
export default RecordStop12Filled;
      
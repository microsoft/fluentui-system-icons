import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7h4a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const RecordStop20Filled = wrapIcon(rawSvg({}), 'RecordStop20Filled');
export default RecordStop20Filled;
      
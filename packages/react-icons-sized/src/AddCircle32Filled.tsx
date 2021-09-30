import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 30a14 14 0 100-28 14 14 0 000 28zm-1-19a1 1 0 112 0v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4h-4a1 1 0 110-2h4v-4z" fill={primaryFill} /></svg>;
}

const AddCircle32Filled = wrapIcon(rawSvg({}), 'AddCircle32Filled');
export default AddCircle32Filled;
      
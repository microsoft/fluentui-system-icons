import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 11a1 1 0 112 0v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4h-4a1 1 0 110-2h4v-4zm15 5a14 14 0 11-28 0 14 14 0 0128 0zm-2 0a12 12 0 10-24 0 12 12 0 0024 0z" fill={primaryFill} /></svg>;
}

const AddCircle32Regular = wrapIcon(rawSvg({}), 'AddCircle32Regular');
export default AddCircle32Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 4a12 12 0 100 24 12 12 0 000-24zM2 16a14 14 0 1128 0 14 14 0 01-28 0zm8-4c0-1.1.9-2 2-2h8a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-8z" fill={primaryFill} /></svg>;
}

const RecordStop32Regular = wrapIcon(rawSvg({}), 'RecordStop32Regular');
export default RecordStop32Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 7a1 1 0 000 2h5.5a1 1 0 100-2h-5.5z" fill={primaryFill} /><path d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6a6 6 0 100 12A6 6 0 008 2z" fill={primaryFill} /></svg>;
}

const PresenceDnd16Regular = wrapIcon(rawSvg({}), 'PresenceDnd16Regular');
export default PresenceDnd16Regular;
      
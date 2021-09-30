import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 16A8 8 0 108 0a8 8 0 000 16zM5.25 7h5.5a1 1 0 110 2h-5.5a1 1 0 110-2z" fill={primaryFill} /></svg>;
}

const PresenceDnd16Filled = wrapIcon(rawSvg({}), 'PresenceDnd16Filled');
export default PresenceDnd16Filled;
      
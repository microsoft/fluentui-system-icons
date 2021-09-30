import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12A6 6 0 106 0a6 6 0 000 12zM3.75 5.25h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const PresenceDnd12Filled = wrapIcon(rawSvg({}), 'PresenceDnd12Filled');
export default PresenceDnd12Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 10A5 5 0 105 0a5 5 0 000 10zM3.5 4.5h3a.5.5 0 010 1h-3a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const PresenceDnd10Filled = wrapIcon(rawSvg({}), 'PresenceDnd10Filled');
export default PresenceDnd10Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3a2 2 0 00-2 2v10a2 2 0 104 0V5a2 2 0 00-2-2z" fill={primaryFill} /><path d="M10 6a2 2 0 00-2 2v7a2 2 0 104 0V8a2 2 0 00-2-2z" fill={primaryFill} /><path d="M15 9a2 2 0 00-2 2v4a2 2 0 104 0v-4a2 2 0 00-2-2z" fill={primaryFill} /></svg>;
}

const DataBarVertical20Filled = wrapIcon(rawSvg({}), 'DataBarVertical20Filled');
export default DataBarVertical20Filled;
      
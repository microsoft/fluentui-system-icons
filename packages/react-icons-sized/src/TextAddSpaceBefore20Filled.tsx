import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.03 5.78a.75.75 0 00-1.06-1.06l-.97.97-.97-.97a.75.75 0 00-1.06 1.06l1.5 1.5c.3.3.77.3 1.06 0l1.5-1.5z" fill={primaryFill} /><path d="M3 10.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3 14.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextAddSpaceBefore20Filled = wrapIcon(rawSvg({}), 'TextAddSpaceBefore20Filled');
export default TextAddSpaceBefore20Filled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 3a.5.5 0 00-.47.32l-3 8a.5.5 0 00.94.36l1-2.68h3.06l1 2.68a.5.5 0 00.94-.36l-3-8A.5.5 0 0013.5 3zm0 1.92L14.65 8h-2.3l1.15-3.08zm-8.35-.77a.5.5 0 11.7.7L4.71 6H9.5a.5.5 0 010 1H4.7l1.15 1.15a.5.5 0 11-.7.7l-2-2a.5.5 0 010-.7l2-2zm0 8a.5.5 0 01.7.7L4.71 14H16.5a.5.5 0 010 1H4.7l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2z" fill={primaryFill} /></svg>;
}

const TextDirectionHorizontalLeft20Regular = wrapIcon(rawSvg({}), 'TextDirectionHorizontalLeft20Regular');
export default TextDirectionHorizontalLeft20Regular;
      
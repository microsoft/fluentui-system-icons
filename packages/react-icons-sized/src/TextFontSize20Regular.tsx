import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 3.5c.2 0 .4.13.47.32l3 8v.02l1.5 3.98a.5.5 0 11-.94.36l-1.38-3.68h-5.3l-1.38 3.68a.5.5 0 01-.93 0L6.96 13.5H4.04l-1.08 2.69a.5.5 0 11-.92-.38l1.2-2.98v-.03l1.8-4.49a.5.5 0 01.92 0l1.8 4.5v.02l.73 1.79 1.04-2.78v-.03l3-7.99A.5.5 0 0113 3.5zm-2.28 8h4.56L13 5.42l-2.28 6.08zm-4.16 1L5.5 9.85 4.44 12.5h2.12z" fill={primaryFill} /></svg>;
}

const TextFontSize20Regular = wrapIcon(rawSvg({}), 'TextFontSize20Regular');
export default TextFontSize20Regular;
      
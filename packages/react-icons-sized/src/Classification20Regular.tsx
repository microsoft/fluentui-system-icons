import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.31 2.85a2.42 2.42 0 01-.02 4.18l-2.43 1.42 1.3 1.3a2.5 2.5 0 010 3.54l-1.77 1.77a1 1 0 01-1.41 0l-1.42 1.42a1 1 0 01-1.41 0l-5.66-5.66a1 1 0 010-1.42L4.91 8l-.09-.1a1 1 0 01.09-1.31L6.68 4.8a2.5 2.5 0 013.53 0l1.31 1.31 1.44-2.42a2.44 2.44 0 013.35-.85zM5.61 8.7L4.2 10.1l5.66 5.66 1.41-1.42L5.61 8.7zm1.77-3.18L5.61 7.28l7.08 7.07 1.76-1.76a1.5 1.5 0 000-2.12l-1.7-1.71-.04-.03-1.44-1.44-.05-.06L9.5 5.52a1.5 1.5 0 00-2.12 0zm6.44-1.3l-1.57 2.63.87.87 2.67-1.55a1.43 1.43 0 00.01-2.46 1.44 1.44 0 00-1.98.5z" fill={primaryFill} /></svg>;
}

const Classification20Regular = wrapIcon(rawSvg({}), 'Classification20Regular');
export default Classification20Regular;
      
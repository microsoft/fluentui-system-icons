import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 01-.7-.7L12.8 10 7.65 4.85a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const ChevronRight20Regular = wrapIcon(rawSvg({}), 'ChevronRight20Regular');
export default ChevronRight20Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.8 3.04c.26.12.37.41.26.66l-4 9a.5.5 0 11-.92-.4l4-9a.5.5 0 01.66-.26zM4.33 5.38c.2.18.23.5.04.7L2.67 8l1.7 1.92a.5.5 0 01-.74.66l-2-2.25a.5.5 0 010-.66l2-2.25a.5.5 0 01.7-.04zm7.34 0a.5.5 0 01.7.04l2 2.25a.5.5 0 010 .66l-2 2.25a.5.5 0 11-.74-.66L13.33 8l-1.7-1.92a.5.5 0 01.04-.7z" fill={primaryFill} /></svg>;
}

const Code16Regular = wrapIcon(rawSvg({}), 'Code16Regular');
export default Code16Regular;
      
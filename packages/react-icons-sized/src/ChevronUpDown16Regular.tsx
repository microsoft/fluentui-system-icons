import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.15 6.35c.2.2.5.2.7 0L8 3.21l3.15 3.14a.5.5 0 00.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7zm0 3.3c.2-.2.5-.2.7 0L8 12.79l3.15-3.14a.5.5 0 01.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const ChevronUpDown16Regular = wrapIcon(rawSvg({}), 'ChevronUpDown16Regular');
export default ChevronUpDown16Regular;
      
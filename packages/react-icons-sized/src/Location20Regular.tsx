import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 9a3 3 0 11-6 0 3 3 0 016 0zm-1 0a2 2 0 10-4 0 2 2 0 004 0z" fill={primaryFill} /><path d="M14.95 13.96a7 7 0 10-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 002.64-.12l2.43-2.37 1.13-1.12zm-9.2-9.2a6 6 0 018.67 8.3l-.18.19-1.32 1.3-2.23 2.17-.09.08a1 1 0 01-1.2 0l-.1-.08-2.97-2.9-.58-.57-.17-.18a6 6 0 01.17-8.31z" fill={primaryFill} /></svg>;
}

const Location20Regular = wrapIcon(rawSvg({}), 'Location20Regular');
export default Location20Regular;
      
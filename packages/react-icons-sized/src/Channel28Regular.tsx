import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8.75a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0z" fill={primaryFill} /><path d="M3 11.4v9.35C3 23.1 4.9 25 7.25 25h13.5C23.1 25 25 23.1 25 20.75V7.25C25 4.9 23.1 3 20.75 3H7.25a4.25 4.25 0 00-4.08 3.06 2.76 2.76 0 011.55.12A2.75 2.75 0 017.25 4.5h13.5a2.75 2.75 0 012.75 2.75v13.5a2.75 2.75 0 01-2.75 2.75H7.25a2.75 2.75 0 01-2.75-2.75V11.4a2.75 2.75 0 01-1.5 0z" fill={primaryFill} /><path d="M9.75 11a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill={primaryFill} /><path d="M9 15.75c0-.41.34-.75.75-.75h5.75a.75.75 0 010 1.5H9.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Channel28Regular = wrapIcon(rawSvg({}), 'Channel28Regular');
export default Channel28Regular;
      
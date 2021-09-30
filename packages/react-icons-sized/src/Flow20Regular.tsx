import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5a2 2 0 100 4 2 2 0 000-4zm-2.96 1.5a3 3 0 110 1 1.5 1.5 0 00-1.33 1.25l-.44 2.66a2.5 2.5 0 01-2.31 2.09 3 3 0 110-1 1.5 1.5 0 001.33-1.25l.44-2.66a2.5 2.5 0 012.31-2.09zM5 11a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /></svg>;
}

const Flow20Regular = wrapIcon(rawSvg({}), 'Flow20Regular');
export default Flow20Regular;
      
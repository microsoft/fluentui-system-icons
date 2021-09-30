import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 14.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /><path d="M22 12a5 5 0 00-5-5H7a5 5 0 000 10h10a5 5 0 005-5zm-5-3.5a3.5 3.5 0 110 7H7a3.5 3.5 0 110-7h10z" fill={primaryFill} /></svg>;
}

const ToggleLeft24Regular = wrapIcon(rawSvg({}), 'ToggleLeft24Regular');
export default ToggleLeft24Regular;
      
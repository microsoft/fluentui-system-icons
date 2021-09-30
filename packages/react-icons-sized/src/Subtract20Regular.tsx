import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 10c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13A.5.5 0 013 10z" fill={primaryFill} /></svg>;
}

const Subtract20Regular = wrapIcon(rawSvg({}), 'Subtract20Regular');
export default Subtract20Regular;
      
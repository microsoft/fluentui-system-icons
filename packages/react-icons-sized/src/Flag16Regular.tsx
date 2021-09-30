import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 9V3h8.03l-1.94 2.7a.5.5 0 000 .6L12.03 9H4zm0 1h9a.5.5 0 00.4-.8L11.12 6l2.3-3.2A.5.5 0 0013 2H3.5a.5.5 0 00-.5.5v11a.5.5 0 001 0V10z" fill={primaryFill} /></svg>;
}

const Flag16Regular = wrapIcon(rawSvg({}), 'Flag16Regular');
export default Flag16Regular;
      
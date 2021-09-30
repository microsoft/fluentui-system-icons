import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 4c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 4c0-.28.22-.5.5-.5h11a.5.5 0 110 1h-11a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const Navigation16Regular = wrapIcon(rawSvg({}), 'Navigation16Regular');
export default Navigation16Regular;
      
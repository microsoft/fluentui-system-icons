import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm0 1a5 5 0 100 10A5 5 0 008 3zM5.5 7.5h5a.5.5 0 01.1 1H5.5a.5.5 0 01-.09-1h5.09-5z" fill={primaryFill} /></svg>;
}

const Block16Regular = wrapIcon(rawSvg({}), 'Block16Regular');
export default Block16Regular;
      
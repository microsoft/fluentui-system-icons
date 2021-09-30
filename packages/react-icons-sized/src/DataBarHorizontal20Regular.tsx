import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h5a2 2 0 110 4H4a2 2 0 01-2-2zm2-1a1 1 0 000 2h5a1 1 0 000-2H4zm-2 7c0-1.1.9-2 2-2h8a2 2 0 110 4H4a2 2 0 01-2-2zm2-1a1 1 0 000 2h8a1 1 0 100-2H4zm-2 7c0-1.1.9-2 2-2h12a2 2 0 110 4H4a2 2 0 01-2-2zm2-1a1 1 0 100 2h12a1 1 0 100-2H4z" fill={primaryFill} /></svg>;
}

const DataBarHorizontal20Regular = wrapIcon(rawSvg({}), 'DataBarHorizontal20Regular');
export default DataBarHorizontal20Regular;
      
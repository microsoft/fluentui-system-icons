import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 13h5a.5.5 0 01.09 1H7.5a.5.5 0 01-.09-1h5.09-5zm-2-4h9a.5.5 0 01.09 1H5.5a.5.5 0 01-.09-1h9.09-9zm-2-4h13a.5.5 0 01.09 1H3.5a.5.5 0 01-.09-1H16.5h-13z" fill={primaryFill} /></svg>;
}

const Filter20Regular = wrapIcon(rawSvg({}), 'Filter20Regular');
export default Filter20Regular;
      
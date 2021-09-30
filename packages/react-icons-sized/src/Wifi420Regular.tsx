import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.96 13.79a1.3 1.3 0 11-1.83 1.83 1.3 1.3 0 011.83-1.83z" fill={primaryFill} /></svg>;
}

const Wifi420Regular = wrapIcon(rawSvg({}), 'Wifi420Regular');
export default Wifi420Regular;
      
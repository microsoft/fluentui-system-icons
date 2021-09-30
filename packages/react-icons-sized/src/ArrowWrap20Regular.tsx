import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4a3 3 0 110 6H6a2 2 0 100 4h10.3l-.65-.65a.5.5 0 01.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7l.64-.65H6a3 3 0 110-6h8a2 2 0 100-4H3.5a.5.5 0 010-1H14z" fill={primaryFill} /></svg>;
}

const ArrowWrap20Regular = wrapIcon(rawSvg({}), 'ArrowWrap20Regular');
export default ArrowWrap20Regular;
      
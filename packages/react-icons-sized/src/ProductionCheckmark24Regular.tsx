import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3.5c-.97 0-1.75.78-1.75 1.75v2.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75h-2.5zm7.25 1.75c0-.97.78-1.75 1.75-1.75h2.5c.97 0 1.75.78 1.75 1.75v2.5c0 .97-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75v-2.5zM15.25 5a.25.25 0 00-.25.25v2.5c0 .14.11.25.25.25h2.5c.14 0 .25-.11.25-.25v-2.5a.25.25 0 00-.25-.25h-2.5zM7 17.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6.5 13h6.31A6.51 6.51 0 0115 11.5H6.5a4.5 4.5 0 100 9h5.23a6.46 6.46 0 01-.56-1.5H6.5a3 3 0 110-6zm4 3c0 .45.2.85.51 1.13.05-.94.3-1.82.7-2.6A1.5 1.5 0 0010.5 16zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const ProductionCheckmark24Regular = wrapIcon(rawSvg({}), 'ProductionCheckmark24Regular');
export default ProductionCheckmark24Regular;
      
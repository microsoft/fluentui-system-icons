import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M44 24c0 .69-.56 1.25-1.25 1.25H10.3l12.83 12.6a1.25 1.25 0 11-1.76 1.8L6.4 24.9l-.03-.02a1.24 1.24 0 01.04-1.8L21.37 8.36a1.25 1.25 0 111.76 1.78L10.3 22.75h32.45c.69 0 1.25.56 1.25 1.25z" fill={primaryFill} /></svg>;
}

const ArrowLeft48Regular = wrapIcon(rawSvg({}), 'ArrowLeft48Regular');
export default ArrowLeft48Regular;
      
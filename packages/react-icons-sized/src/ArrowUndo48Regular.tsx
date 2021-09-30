import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M35.8 9.84c-4.18-4.6-11.3-4.5-15.86.67l-.02.02-8.56 8.96h12.38a1.25 1.25 0 010 2.5H8.2c-.7 0-1.25-.56-1.25-1.25V5.27a1.25 1.25 0 012.5 0v12.6l8.63-9.03c5.45-6.18 14.3-6.48 19.57-.68 5.24 5.78 3.62 13.32-.02 17.2l-8.99 9.18-8.75 8.84-.26.25a1.25 1.25 0 11-1.76-1.76l.24-.25 8.75-8.83 8.96-9.15a10.21 10.21 0 00-.03-13.8z" fill={primaryFill} /></svg>;
}

const ArrowUndo48Regular = wrapIcon(rawSvg({}), 'ArrowUndo48Regular');
export default ArrowUndo48Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 24c0-.69.56-1.25 1.25-1.25H37.7l-12.83-12.6a1.25 1.25 0 111.76-1.8L41.6 23.1l.03.02a1.25 1.25 0 01-.04 1.8L26.63 39.64a1.25 1.25 0 11-1.76-1.78L37.7 25.25H5.25C4.56 25.25 4 24.69 4 24z" fill={primaryFill} /></svg>;
}

const ArrowRight48Regular = wrapIcon(rawSvg({}), 'ArrowRight48Regular');
export default ArrowRight48Regular;
      
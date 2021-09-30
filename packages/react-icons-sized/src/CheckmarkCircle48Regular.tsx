import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a20 20 0 110 40 20 20 0 010-40zm0 2.5a17.5 17.5 0 100 35 17.5 17.5 0 000-35zm8.63 11.12c.5.48.5 1.28 0 1.76l-11 11c-.48.5-1.28.5-1.76 0l-4.5-4.5a1.25 1.25 0 011.76-1.76l3.62 3.61 10.12-10.11a1.25 1.25 0 011.76 0z" fill={primaryFill} /></svg>;
}

const CheckmarkCircle48Regular = wrapIcon(rawSvg({}), 'CheckmarkCircle48Regular');
export default CheckmarkCircle48Regular;
      
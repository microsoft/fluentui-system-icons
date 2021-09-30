import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a.5.5 0 01.35.15c.26.25 1.04 1.03 1.75 2.07A6.99 6.99 0 019.5 7c0 1.34-.36 2.35-1.02 3.03-.66.69-1.55.97-2.48.97-.93 0-1.82-.28-2.48-.97C2.86 9.35 2.5 8.33 2.5 7c0-1.4.7-2.76 1.4-3.78a14.9 14.9 0 011.75-2.07A.5.5 0 016 1zm0 1.22c-.34.35-.82.9-1.28 1.56A6.02 6.02 0 003.5 7c0 1.16.31 1.9.74 2.34.42.44 1.03.66 1.76.66s1.34-.22 1.76-.66C8.2 8.9 8.5 8.16 8.5 7c0-1.1-.56-2.24-1.22-3.22-.46-.66-.94-1.2-1.28-1.56z" fill={primaryFill} /></svg>;
}

const Drop12Regular = wrapIcon(rawSvg({}), 'Drop12Regular');
export default Drop12Regular;
      
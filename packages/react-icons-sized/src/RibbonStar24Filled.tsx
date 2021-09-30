import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 21.25v-6a7.97 7.97 0 01-10 0v6c0 .6.69.96 1.18.6L12 19.18l3.82 2.69c.5.35 1.18 0 1.18-.61z" fill={primaryFill} /><path d="M19 9A7 7 0 105 9a7 7 0 0014 0zm-6.77-3.36l.91 1.86 2.05.29c.2.03.29.29.14.44l-1.48 1.44.35 2.03c.03.21-.19.37-.37.27L12 11.01l-1.83.96a.25.25 0 01-.37-.27l.35-2.03-1.48-1.44a.26.26 0 01.14-.44l2.05-.3.91-1.85c.1-.19.37-.19.46 0z" fill={primaryFill} /></svg>;
}

const RibbonStar24Filled = wrapIcon(rawSvg({}), 'RibbonStar24Filled');
export default RibbonStar24Filled;
      
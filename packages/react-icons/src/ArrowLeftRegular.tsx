import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.16 16.87a.5.5 0 10.68-.74L3.67 10.5H17.5a.5.5 0 000-1H3.67l6.17-5.63a.5.5 0 00-.68-.74L2.25 9.45a.75.75 0 000 1.1l6.91 6.32z" fill={primaryFill} /></svg>;
}

const ArrowLeftRegular = wrapIcon(rawSvg({}), 'ArrowLeftRegular');
export default ArrowLeftRegular;
      
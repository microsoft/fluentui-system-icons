import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.74 2.93a.5.5 0 11.52-.86 6.95 6.95 0 012.88 3.03c.6 1.28.86 2.86.86 4.9v6.3l3.15-3.15a.5.5 0 01.7.7l-4 4a.5.5 0 01-.7 0l-4-4a.5.5 0 11.7-.7L10 16.29V10c0-1.96-.25-3.38-.76-4.47a5.96 5.96 0 00-2.5-2.6z" fill={primaryFill} /></svg>;
}

const ArrowCurveDownRightRegular = wrapIcon(rawSvg({}), 'ArrowCurveDownRightRegular');
export default ArrowCurveDownRightRegular;
      
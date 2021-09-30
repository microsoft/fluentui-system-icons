import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 7.04A3.25 3.25 0 0110.53 5h17.16c2.3 0 3.87 2.32 3.01 4.46l-6.2 15.5A3.25 3.25 0 0121.48 27H4.32a3.25 3.25 0 01-3.01-4.46l6.2-15.5zM10.53 7c-.5 0-.97.31-1.16.79l-6.2 15.5c-.33.82.28 1.71 1.16 1.71h17.16c.5 0 .97-.31 1.16-.79l6.2-15.5A1.25 1.25 0 0027.68 7H10.52z" fill={primaryFill} /></svg>;
}

const Rhombus32Regular = wrapIcon(rawSvg({}), 'Rhombus32Regular');
export default Rhombus32Regular;
      
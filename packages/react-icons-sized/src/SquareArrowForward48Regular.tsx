import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11.25C6 8.35 8.35 6 11.25 6h25.5C39.65 6 42 8.35 42 11.25v12.8c-.78-.5-1.62-.92-2.5-1.25V11.25a2.75 2.75 0 00-2.75-2.75h-25.5a2.75 2.75 0 00-2.75 2.75v25.5a2.75 2.75 0 002.75 2.75H22.8c.33.88.74 1.72 1.24 2.5H11.25A5.25 5.25 0 016 36.75v-25.5zM24 35a11 11 0 1022 0 11 11 0 00-22 0zm14.3-3.3a1 1 0 011.4-1.4l3 3a1 1 0 010 1.4l-3 3a1 1 0 01-1.4-1.4l1.29-1.3H34a4 4 0 00-4 4 1 1 0 11-2 0 6 6 0 016-6h5.59l-1.3-1.3z" fill={primaryFill} /></svg>;
}

const SquareArrowForward48Regular = wrapIcon(rawSvg({}), 'SquareArrowForward48Regular');
export default SquareArrowForward48Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.07 18.84c-.8.7-2.07.13-2.07-.94V6.1a1.25 1.25 0 012.07-.94l6.31 5.52c.8.7.8 1.94 0 2.64l-6.3 5.52zm-.57-1.5l5.9-5.15a.25.25 0 000-.38l-5.9-5.16v10.7z" fill={primaryFill} /></svg>;
}

const CaretRight24Regular = wrapIcon(rawSvg({}), 'CaretRight24Regular');
export default CaretRight24Regular;
      
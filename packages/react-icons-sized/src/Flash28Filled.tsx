import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.29 2.52c.1-.3.38-.52.71-.52h8.75a.75.75 0 01.7 1.02L17.1 9h5.15a.75.75 0 01.55 1.26L8.55 25.76a.75.75 0 01-1.28-.7L9.54 16H6a.75.75 0 01-.71-.98l4-12.5z" fill={primaryFill} /></svg>;
}

const Flash28Filled = wrapIcon(rawSvg({}), 'Flash28Filled');
export default Flash28Filled;
      
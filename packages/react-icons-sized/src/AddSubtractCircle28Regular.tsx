import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.2 18.05c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM10.99 7.7a.75.75 0 10-1.5 0v1.8H7.75a.75.75 0 000 1.5H9.5v1.75a.75.75 0 001.5 0V11h1.75a.75.75 0 000-1.5h-1.76V7.7zM14 26a12 12 0 110-24 12 12 0 010 24zm0-1.5a10.5 10.5 0 007.94-17.38L7.12 21.94A10.46 10.46 0 0014 24.5zm-7.94-3.62L20.88 6.06A10.5 10.5 0 006.07 20.87z" fill={primaryFill} /></svg>;
}

const AddSubtractCircle28Regular = wrapIcon(rawSvg({}), 'AddSubtractCircle28Regular');
export default AddSubtractCircle28Regular;
      
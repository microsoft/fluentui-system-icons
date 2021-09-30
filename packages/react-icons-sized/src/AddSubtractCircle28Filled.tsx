import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.95 17.3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM14 26a12 12 0 100-24 12 12 0 000 24zm0-1.5c-2.63 0-5.03-.97-6.88-2.56L21.94 7.12A10.5 10.5 0 0114 24.5zM7 10.25c0-.41.34-.75.75-.75h1.74V7.7a.75.75 0 111.5 0v1.8h1.76a.75.75 0 010 1.5H11v1.75a.75.75 0 11-1.5 0V11H7.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const AddSubtractCircle28Filled = wrapIcon(rawSvg({}), 'AddSubtractCircle28Filled');
export default AddSubtractCircle28Filled;
      
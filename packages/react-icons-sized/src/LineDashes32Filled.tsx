import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M28.63 3.37c.5.48.5 1.28 0 1.76l-.98.98a1.25 1.25 0 11-1.76-1.76l.98-.98a1.25 1.25 0 011.76 0zm-4.9 4.9c.5.48.5 1.27 0 1.76l-1.95 1.96a1.25 1.25 0 11-1.77-1.77l1.96-1.96a1.25 1.25 0 011.77 0zm-5.87 5.87c.5.49.5 1.28 0 1.76l-1.96 1.96a1.25 1.25 0 11-1.76-1.76l1.96-1.96a1.25 1.25 0 011.76 0zM12 20c.49.49.49 1.28 0 1.77l-1.96 1.96a1.25 1.25 0 01-1.77-1.77l1.96-1.96a1.25 1.25 0 011.77 0zM6.1 25.9c.5.49.5 1.28 0 1.76l-.98.98a1.25 1.25 0 01-1.76-1.76l.98-.98a1.25 1.25 0 011.76 0z" fill={primaryFill} /></svg>;
}

const LineDashes32Filled = wrapIcon(rawSvg({}), 'LineDashes32Filled');
export default LineDashes32Filled;
      
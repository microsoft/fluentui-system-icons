import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 10a.5.5 0 000 1H12a.5.5 0 000-1H9.5zM8 15A7 7 0 108 1a7 7 0 000 14zm0-1a5.98 5.98 0 01-3.87-1.42l8.45-8.45A6 6 0 018 14zM3.5 6c0-.28.22-.5.5-.5h1v-1a.5.5 0 011 0v1h1a.5.5 0 110 1H6v.8a.5.5 0 01-1 0v-.8H4a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const AddSubtractCircle16Filled = wrapIcon(rawSvg({}), 'AddSubtractCircle16Filled');
export default AddSubtractCircle16Filled;
      
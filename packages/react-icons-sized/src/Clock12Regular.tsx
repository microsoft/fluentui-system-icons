import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a5 5 0 110 10A5 5 0 016 1zm0 1a4 4 0 100 8 4 4 0 000-8zm-.5 1.5a.5.5 0 01.5.41V6h1.5a.5.5 0 01.09 1H5.5a.5.5 0 01-.5-.41V4c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const Clock12Regular = wrapIcon(rawSvg({}), 'Clock12Regular');
export default Clock12Regular;
      
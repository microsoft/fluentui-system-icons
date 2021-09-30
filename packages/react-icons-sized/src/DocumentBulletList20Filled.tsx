import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zm-4 4a.5.5 0 111 0 .5.5 0 01-1 0zm0 2a.5.5 0 111 0 .5.5 0 01-1 0zm0 2a.5.5 0 111 0 .5.5 0 01-1 0zm2-4c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm3-8V2.25L15.75 7H11.5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentBulletList20Filled = wrapIcon(rawSvg({}), 'DocumentBulletList20Filled');
export default DocumentBulletList20Filled;
      
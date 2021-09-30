import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8.5V4h-2v12h6a2 2 0 002-2v-4h-4.5A1.5 1.5 0 0112 8.5z" fill={primaryFill} /><path d="M9 16H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h5v12z" fill={primaryFill} /><path d="M13 8.5V4.06c.24.07.47.2.65.38l3.91 3.91c.18.18.31.4.38.65H13.5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentLandscapeSplit20Filled = wrapIcon(rawSvg({}), 'DocumentLandscapeSplit20Filled');
export default DocumentLandscapeSplit20Filled;
      
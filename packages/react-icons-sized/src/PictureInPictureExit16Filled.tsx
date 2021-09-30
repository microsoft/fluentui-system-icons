import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 7a1 1 0 001-1V3a1 1 0 00-1-1H2a1 1 0 00-1 1v3a1 1 0 001 1h5zm-5 4.5V8h5a2 2 0 002-2V4h3.5A2.5 2.5 0 0115 6.5v5a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 012 11.5zm8.5-.5a.5.5 0 000 1h2a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v.8l-1.65-1.65a.5.5 0 00-.7.7L11.29 11h-.79z" fill={primaryFill} /></svg>;
}

const PictureInPictureExit16Filled = wrapIcon(rawSvg({}), 'PictureInPictureExit16Filled');
export default PictureInPictureExit16Filled;
      
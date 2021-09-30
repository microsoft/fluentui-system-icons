import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 4a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-5z" fill={primaryFill} /><path d="M7 8.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5z" fill={primaryFill} /><path d="M9.5 15a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M7 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4z" fill={primaryFill} /></svg>;
}

const ViewDesktopMobile20Regular = wrapIcon(rawSvg({}), 'ViewDesktopMobile20Regular');
export default ViewDesktopMobile20Regular;
      
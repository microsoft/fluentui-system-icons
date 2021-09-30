import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 11a2 2 0 002-2V4a2 2 0 00-2-2H3a2 2 0 00-2 2v5a2 2 0 002 2h7zm8.75-4.5H13V5h5.75C20.55 5 22 6.46 22 8.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 17.75v-5.92A3 3 0 003 12h.5v5.75c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75zM15.94 16h-1.69a.75.75 0 000 1.5h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-1.5 0v1.69l-2.72-2.72a.75.75 0 10-1.06 1.06L15.94 16z" fill={primaryFill} /></svg>;
}

const PictureInPictureExit24Regular = wrapIcon(rawSvg({}), 'PictureInPictureExit24Regular');
export default PictureInPictureExit24Regular;
      
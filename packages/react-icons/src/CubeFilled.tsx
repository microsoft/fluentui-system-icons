import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.7 2.48a3.5 3.5 0 012.6 0l5.76 2.3c.57.23.94.78.94 1.4v7.64a1.5 1.5 0 01-.94 1.4l-5.76 2.3a3.5 3.5 0 01-2.6 0l-5.76-2.3a1.5 1.5 0 01-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3zm-3 3.56a.5.5 0 10-.4.92l4.2 1.87v4.67a.5.5 0 001 0V8.83l4.2-1.87a.5.5 0 10-.4-.92L10 7.95l-4.3-1.9z" fill={primaryFill} /></svg>;
}

const CubeFilled = wrapIcon(rawSvg({}), 'CubeFilled');
export default CubeFilled;
      
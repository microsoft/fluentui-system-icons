import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.4 2.51a3.75 3.75 0 00-2.8 0L3.1 5.55c-.67.27-1.1.91-1.1 1.62v9.66c0 .7.43 1.35 1.1 1.62l7.5 3.04c.62.25 1.3.33 1.96.23a6.47 6.47 0 01-1.31-6.01v-4.95l-4.77-1.8a.75.75 0 11.54-1.41L12 9.44l4.98-1.9a.75.75 0 11.54 1.41l-4.77 1.8v2.31a6.48 6.48 0 019.25-.25V7.17c0-.7-.43-1.35-1.1-1.62l-7.5-3.04zM12 17.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm8.5-3.5c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h1a2.5 2.5 0 00-4.03.04.5.5 0 01-.8-.59 3.5 3.5 0 015.33-.4v-.55c0-.28.22-.5.5-.5zM15 19.95v.55a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-1a2.5 2.5 0 003.91.11.5.5 0 01.77.65 3.5 3.5 0 01-5.18.19z" fill={primaryFill} /></svg>;
}

const CubeSync24Filled = wrapIcon(rawSvg({}), 'CubeSync24Filled');
export default CubeSync24Filled;
      
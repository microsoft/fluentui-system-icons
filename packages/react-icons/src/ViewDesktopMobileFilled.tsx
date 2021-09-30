import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4c0-1.1.9-2 2-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm2.5 0a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-5zm0 4a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5zM9 15.5c0 .28.22.5.5.5h1a.5.5 0 000-1h-1a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const ViewDesktopMobileFilled = wrapIcon(rawSvg({}), 'ViewDesktopMobileFilled');
export default ViewDesktopMobileFilled;
      
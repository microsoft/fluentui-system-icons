import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.46 11.68a.5.5 0 01-.93 0l-3.51-9.02a.5.5 0 11.93-.36l3.04 7.82 3.04-7.82a.5.5 0 01.94.36l-3.51 9.02z" fill={primaryFill} /><path d="M6 1.98c.21 0 .4.13.47.32l2.32 5.96a.5.5 0 01.04.11l1.15 2.95a.5.5 0 11-.93.36L8 9H4l-1.04 2.68a.5.5 0 01-.93-.36l1.16-3 .01-.02 2.34-6A.5.5 0 016 1.98zM4.4 8H7.6l-1.6-4.14L4.4 8z" fill={primaryFill} /><path d="M14.79 13.18a.5.5 0 01.7-.06l2.33 2a.5.5 0 010 .76l-2.33 2a.5.5 0 01-.65-.76l1.3-1.12H3.85l1.31 1.12a.5.5 0 11-.65.76l-2.33-2a.5.5 0 010-.76l2.33-2a.5.5 0 11.65.76L3.85 15h12.3l-1.3-1.12a.5.5 0 01-.06-.7z" fill={primaryFill} /></svg>;
}

const FontSpaceTrackingOutRegular = wrapIcon(rawSvg({}), 'FontSpaceTrackingOutRegular');
export default FontSpaceTrackingOutRegular;
      
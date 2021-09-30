import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2H6a2 2 0 00-2 2v8h.6l1.3-2.95a1.75 1.75 0 013.1-.2l.02.04.09.18 1.73 4.31.34-.5c.27-.47.73-.78 1.24-.86h.06l.18-.02h2.04a1.75 1.75 0 01.26 3.48h-.05l-.18.02H13.7l-1.66 2.6a1.75 1.75 0 01-3.03.05l-.03-.05-.08-.17-1.46-3.65-.08.17a1.75 1.75 0 01-1.32 1.03h-.06l-.19.02H4V20c0 1.1.9 2 2 2h12a2 2 0 002-2V10h-6a2 2 0 01-2-2V2z" fill={primaryFill} /><path d="M14 8.5a.5.5 0 01-.5-.5V2.5l6 6H14z" fill={primaryFill} /><path d="M5.26 13H2.64a.75.75 0 00.11 1.5h3.1l.02-.01h.04a.75.75 0 00.52-.44l1.04-2.36 2.33 5.83.05.1v.01a.75.75 0 001.31-.04l1.98-3.09H14.81a.75.75 0 00-.11-1.5h-2.12a.75.75 0 00-.55.4l-1.42 2.1-2.42-6.03-.05-.1v-.01a.75.75 0 00-1.33.09L5.26 13z" fill={primaryFill} /></svg>;
}

const DocumentCatchUp24Filled = wrapIcon(rawSvg({}), 'DocumentCatchUp24Filled');
export default DocumentCatchUp24Filled;
      
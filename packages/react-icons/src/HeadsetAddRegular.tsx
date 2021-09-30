import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5zm0 7.5v-.02c.34-.03.68-.1 1-.19V11a2 2 0 01-2 2h-1a1 1 0 01-1-1v-1.6c.32.16.65.3 1 .4V12h1a1 1 0 001-1zm-4.75-9a5.5 5.5 0 00-.66 1.02A5 5 0 005 8h2a1 1 0 011 1v3a1 1 0 01-1 1H5v1c0 1.1.9 2 2 2h1a2 2 0 11.27 1H7a3 3 0 01-3-3V8a6 6 0 016.25-6zM5 12h2V9H5v3zm4 4a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
}

const HeadsetAddRegular = wrapIcon(rawSvg({}), 'HeadsetAddRegular');
export default HeadsetAddRegular;
      
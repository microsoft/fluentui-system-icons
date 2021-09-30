import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 41.07a3 3 0 003 3h10.13a3 3 0 003-3v-.87l3.55 2.3A1.5 1.5 0 0045 41.24V27.76a1.5 1.5 0 00-2.32-1.26l-3.55 2.3V28a3 3 0 00-3-3H26a3 3 0 00-3 3v13.07zm-3.5 0V32.5h-3.22a29.9 29.9 0 001.93 6.4c.42.92.85 1.72 1.3 2.4l-.01-.23zM26 21.5h4.44a45.71 45.71 0 00-.26-3H15.82a47 47 0 00.06 11.5h3.62v-2a6.5 6.5 0 016.5-6.5zm14.84 2.02c.68-.42 1.4-.66 2.12-.74-.09-1.48-.33-2.9-.73-4.28H32.7c.1.98.19 1.98.24 3h3.2c1.85 0 3.52.78 4.7 2.02zM17.9 43.34a20.05 20.05 0 01-13-10.84h8.85c.82 4.55 2.3 8.35 4.15 10.84zM3.92 30h9.44a49.4 49.4 0 01-.06-11.5H3.77A20.01 20.01 0 003.92 30zm.74-14h9c.8-4.77 2.3-8.76 4.23-11.34A20.05 20.05 0 004.66 16zM23 4c-.57 0-1.3.25-2.17 1.08a12.7 12.7 0 00-2.62 4.03A30.47 30.47 0 0016.2 16H29.8a30.47 30.47 0 00-2.02-6.9 12.7 12.7 0 00-2.62-4.02C24.3 4.25 23.57 4 23 4zm5.11.66A20.05 20.05 0 0141.34 16h-9c-.8-4.77-2.3-8.76-4.23-11.34z" fill={primaryFill} /></svg>;
}

const GlobeVideo48Filled = wrapIcon(rawSvg({}), 'GlobeVideo48Filled');
export default GlobeVideo48Filled;
      
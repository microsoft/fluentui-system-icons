import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.26 2.2a.75.75 0 00-1.04.02l-1.7 1.7a19.93 19.93 0 01-3.84 3c-.4.23-.66.63-.72 1.09L3.6 17.5h-.85a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5h-.85l-1.35-9.45a1.56 1.56 0 00-.8-1.15 20.82 20.82 0 01-4.23-3.06L12.26 2.2zm1.84 12.92a18.4 18.4 0 001.65 2.38H8.28c.54-.66 1.18-1.52 1.64-2.4a43.26 43.26 0 002.06-5.02l.19.53a32.4 32.4 0 001.93 4.5z" fill={primaryFill} /></svg>;
}

const Tent24Filled = wrapIcon(rawSvg({}), 'Tent24Filled');
export default Tent24Filled;
      
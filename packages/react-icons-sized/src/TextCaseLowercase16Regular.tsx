import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 2.5c.28 0 .5.22.5.5v4.6c.42-.38.94-.6 1.5-.6 1.38 0 2.5 1.34 2.5 3s-1.12 3-2.5 3c-.56 0-1.08-.22-1.5-.6v.1a.5.5 0 01-1 0V3c0-.28.22-.5.5-.5zm2 9.5c.67 0 1.5-.72 1.5-2s-.83-2-1.5-2-1.5.72-1.5 2 .83 2 1.5 2zM7 8.7v3.81a.5.5 0 01-.43.49H6.5a.5.5 0 01-.5-.43v-.14c-.66.38-1.27.57-1.83.57A2.09 2.09 0 012 10.83c0-1.15.8-2 2.1-2.16a5.02 5.02 0 011.9.14c0-.74-.37-1.1-1.2-1.14-.63-.04-1.08.05-1.35.24a.5.5 0 01-.57-.82c.44-.3 1.03-.44 1.79-.43h.19c1.3.07 2.08.83 2.14 2.04zM5.8 9.82a4.04 4.04 0 00-1.57-.13c-.82.1-1.23.53-1.23 1.17 0 .73.47 1.16 1.17 1.16a3.2 3.2 0 001.66-.64l.17-.11v-1.4l-.2-.05z" fill={primaryFill} /></svg>;
}

const TextCaseLowercase16Regular = wrapIcon(rawSvg({}), 'TextCaseLowercase16Regular');
export default TextCaseLowercase16Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75V9h-.76a3 3 0 00-.24-.24V6.75C17 5.78 16.22 5 15.25 5H4.75C3.78 5 3 5.78 3 6.75v6.5c0 .97.78 1.75 1.75 1.75h5.3a4.88 4.88 0 00-.02 1H4.75A2.75 2.75 0 012 13.25v-6.5zm15.88 7.3a1.5 1.5 0 00-.38-.05h-5a1.5 1.5 0 00-1.5 1.5 3.83 3.83 0 00.32 1.5c.21.44.52.81.9 1.11.73.6 1.73.89 2.78.89 1.05 0 2.05-.29 2.79-.89.75-.6 1.21-1.5 1.21-2.61 0-.7-.47-1.28-1.12-1.45zM4 7a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V7zm13 4a2 2 0 10-4 0 2 2 0 004 0z" fill={primaryFill} /></svg>;
}

const ShareScreenPersonOverlayRegular = wrapIcon(rawSvg({}), 'ShareScreenPersonOverlayRegular');
export default ShareScreenPersonOverlayRegular;
      
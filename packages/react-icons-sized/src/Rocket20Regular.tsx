import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 6.43a2 2 0 112.83 2.82 2 2 0 01-2.83-2.82zm2.12.7a1 1 0 10-1.4 1.42 1 1 0 001.4-1.42z" fill={primaryFill} /><path d="M11.75 14.5a1.5 1.5 0 01-1.7-.29l-.61-.6-.74 1.21a.5.5 0 01-.78.1L5.1 12.09a.5.5 0 01.1-.79l1.22-.73-.61-.6a1.5 1.5 0 01-.3-1.71L4.38 7.14a.5.5 0 010-.7l1.06-1.07a3 3 0 013.42-.59l.93-.93a6.3 6.3 0 016.33-1.56c.76.24 1.36.83 1.6 1.6a6.3 6.3 0 01-1.56 6.32l-.94.94a3 3 0 01-.58 3.41l-1.06 1.06a.5.5 0 01-.71 0l-1.12-1.11zm4.08-11.26a5.3 5.3 0 00-5.33 1.31l-.82.82-.7.71L6.86 8.2l-.4.4a.5.5 0 00.05.66l4.24 4.24c.18.18.46.2.66.05l.4-.4 2.12-2.12.7-.71.82-.81a5.3 5.3 0 001.31-5.33c-.14-.44-.49-.8-.93-.94zm-3.31 10.62l.7.7.7-.7a2 2 0 00.53-1.93l-1.93 1.93zm-4.44-8.3a2 2 0 00-1.93.52l-.7.7.7.71 1.93-1.93zm.63 7.31L7.14 11.3l-.89.53 1.93 1.93.53-.89z" fill={primaryFill} /><path d="M5.8 14.91a.5.5 0 00-.7-.7l-1.77 1.76a.5.5 0 10.7.71l1.77-1.77z" fill={primaryFill} /><path d="M4.39 12.79c.2.2.2.51 0 .7l-.71.72a.5.5 0 11-.7-.71l.7-.71c.2-.2.51-.2.7 0z" fill={primaryFill} /><path d="M7.22 16.33a.5.5 0 10-.7-.7l-.72.7a.5.5 0 10.7.7l.72-.7z" fill={primaryFill} /></svg>;
}

const Rocket20Regular = wrapIcon(rawSvg({}), 'Rocket20Regular');
export default Rocket20Regular;
      
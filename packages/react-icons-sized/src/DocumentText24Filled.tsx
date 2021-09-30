import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8V2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V10h-6a2 2 0 01-2-2zm-3.75 3.5h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5zm0 2.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5zm0 2.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5zm5.25-9V2.5l6 6H14a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentText24Filled = wrapIcon(rawSvg({}), 'DocumentText24Filled');
export default DocumentText24Filled;
      
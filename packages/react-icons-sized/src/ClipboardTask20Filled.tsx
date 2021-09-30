import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3zM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm4.85 6.35l-3.5 3.5a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 01.7-.7L9 12.29l3.15-3.14a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const ClipboardTask20Filled = wrapIcon(rawSvg({}), 'ClipboardTask20Filled');
export default ClipboardTask20Filled;
      
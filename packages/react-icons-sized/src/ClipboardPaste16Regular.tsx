import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.09 2H3.5A1.5 1.5 0 002 3.5v10A1.5 1.5 0 003.5 15h2.61v-1H3.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h.59a.5.5 0 01.5.5V5h1V3.5A1.5 1.5 0 0010.5 2h-.59c-.2-.58-.76-1-1.41-1h-3c-.65 0-1.2.42-1.41 1zm.91.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M8.5 6C7.67 6 7 6.67 7 7.5v6c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-4zM8 7.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v6a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-6z" fill={primaryFill} /></svg>;
}

const ClipboardPaste16Regular = wrapIcon(rawSvg({}), 'ClipboardPaste16Regular');
export default ClipboardPaste16Regular;
      
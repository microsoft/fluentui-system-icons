import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2c-.65 0-1.2.42-1.41 1H3.5C2.67 3 2 3.67 2 4.5v12c0 .83.67 1.5 1.5 1.5h6.76A5.5 5.5 0 0114 9.02V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3zM6 3.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm4.85 6.35l-3.5 3.5a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 01.7-.7L7 12.29l3.15-3.14a.5.5 0 01.7.7zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const ClipboardTaskAdd20Filled = wrapIcon(rawSvg({}), 'ClipboardTaskAdd20Filled');
export default ClipboardTaskAdd20Filled;
      
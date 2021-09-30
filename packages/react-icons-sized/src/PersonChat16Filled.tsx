import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.6 13.27l-.21.7C4.62 13.73 3 11.84 3 10v-.5C3 8.67 3.67 8 4.5 8h4.54a4.27 4.27 0 00-1.44 5.27zM8 1.5A2.75 2.75 0 118 7a2.75 2.75 0 010-5.5zm7 10a3.5 3.5 0 01-5.2 3.06L8.41 15a.32.32 0 01-.4-.4l.43-1.4A3.5 3.5 0 1115 11.5zM10.5 10a.5.5 0 000 1h2a.5.5 0 000-1h-2zm-.5 2.5c0 .28.22.5.5.5h1a.5.5 0 000-1h-1a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const PersonChat16Filled = wrapIcon(rawSvg({}), 'PersonChat16Filled');
export default PersonChat16Filled;
      
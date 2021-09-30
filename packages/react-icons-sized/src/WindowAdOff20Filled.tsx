import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15l15 15a.5.5 0 01-.7.7l-1.27-1.26c-.4.26-.87.41-1.38.41h-9A2.5 2.5 0 013 14.5v-9c0-.51.15-.98.41-1.38L2.15 2.85a.5.5 0 11.7-.7zM14.71 15.4L11 11.71v.79a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5h.8l-1-1H4.5v7.25c0 .69.56 1.25 1.25 1.25h8.5c.16 0 .32-.03.46-.09zM8.29 9H7v3h3v-1.3L8.3 9zm7.21 4.38V7H9.12L5.15 3.02 5.5 3h9A2.5 2.5 0 0117 5.5v9c0 .12 0 .24-.02.35l-1.48-1.47z" fill={primaryFill} /></svg>;
}

const WindowAdOff20Filled = wrapIcon(rawSvg({}), 'WindowAdOff20Filled');
export default WindowAdOff20Filled;
      
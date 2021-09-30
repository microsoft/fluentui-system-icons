import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.41 3.12C2.15 3.52 2 4 2 4.5v2a.5.5 0 001 0v-2c0-.23.05-.45.15-.65l4.57 4.58a1.42 1.42 0 01-.06.05l-1.24.7a1.76 1.76 0 00-.8 2.18l.35.9c.2.51.65.9 1.18 1.06l3.61 1.08c.85.26 1.75-.01 2.3-.63l3.09 3.08c-.2.1-.42.15-.65.15h-2a.5.5 0 000 1h2c.5 0 .98-.15 1.38-.41l.27.26a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7l.26.27zm6.45 3.62l5.02 5.02.54-1.76c.36-1.17-.56-2.3-1.77-2.3h-.28c.08-.34.14-.74.14-1.1-.01-.34-.04-.76-.23-1.15a1.68 1.68 0 00-1.13-.9c-.83-.23-1.43.38-1.63.85-.15.36-.28.61-.45.94a37 37 0 00-.21.4zM17 14.88l.98.97.02-.35v-2a.5.5 0 00-1 0v1.38zM4.15 2.02l.97.98H6.5a.5.5 0 000-1h-2c-.12 0-.24 0-.35.02zM15.5 3c.83 0 1.5.67 1.5 1.5v2a.5.5 0 001 0v-2A2.5 2.5 0 0015.5 2h-2a.5.5 0 000 1h2zM3 15.5c0 .83.67 1.5 1.5 1.5h2a.5.5 0 010 1h-2A2.5 2.5 0 012 15.5v-2a.5.5 0 011 0v2z" fill={primaryFill} /></svg>;
}

const ScanThumbUpOff20Filled = wrapIcon(rawSvg({}), 'ScanThumbUpOff20Filled');
export default ScanThumbUpOff20Filled;
      
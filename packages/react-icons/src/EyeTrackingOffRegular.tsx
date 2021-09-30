import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.41 3.12C2.15 3.52 2 4 2 4.5v3a.5.5 0 001 0v-3c0-.23.05-.45.15-.65L6.29 7a6.6 6.6 0 00-2.23 2.27v.01l.44.23-.45-.22a.5.5 0 00.9.44v-.01a2.39 2.39 0 01.25-.39 5.49 5.49 0 011.82-1.6l1.3 1.3a3 3 0 104.16 4.17l3.67 3.66c-.2.1-.42.15-.65.15h-3a.5.5 0 000 1h3c.5 0 .98-.15 1.38-.41l.27.26a.5.5 0 00.7-.7l-.26-.27-.74-.73-3.93-3.94-3.63-3.63L8.01 7.3l-.78-.78-3.38-3.37-.73-.74-.27-.26a.5.5 0 10-.7.7l.26.27zm9.34 9.34a2 2 0 11-2.71-2.71l2.71 2.71z" fill={primaryFill} /><path d="M17.98 15.85l.02-.35v-3a.5.5 0 00-1 0v2.38l.98.97z" fill={primaryFill} /><path d="M9.17 7.05A7 7 0 0110 7a5.86 5.86 0 014.8 2.32 4.13 4.13 0 01.24.39l.01.01a.5.5 0 00.9-.44v-.01l-.01-.01a1.7 1.7 0 00-.08-.14l-.25-.38A6.85 6.85 0 0010 6c-.63 0-1.2.07-1.7.18l.86.87zm6.78 2.23l-.06.03-.39.19.45-.22z" fill={primaryFill} /><path d="M5.12 3H7.5a.5.5 0 000-1h-3c-.12 0-.24 0-.35.02l.97.98z" fill={primaryFill} /><path d="M4.5 17A1.5 1.5 0 013 15.5v-3a.5.5 0 00-1 0v3A2.5 2.5 0 004.5 18h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M15.5 3c.83 0 1.5.67 1.5 1.5v3a.5.5 0 001 0v-3A2.5 2.5 0 0015.5 2h-3a.5.5 0 000 1h3z" fill={primaryFill} /></svg>;
}

const EyeTrackingOffRegular = wrapIcon(rawSvg({}), 'EyeTrackingOffRegular');
export default EyeTrackingOffRegular;
      
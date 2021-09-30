import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.44 4.35l-.01.02.95.32c.15-.35.36-.69.6-1l6.33 6.33c-.3.24-.63.44-.98.59.13.33.23.65.32.95l.03-.01a5.5 5.5 0 10-7.24-7.2zm9.3.66a2 2 0 01-2.07.03l1.35-1.35c.32.4.56.85.73 1.32zm-2.8.75a3 3 0 003.04.27 4.5 4.5 0 01-.96 3.28L10.2 6.5l.73-.74zm-.7-.7l-.74.73L6.7 3a4.5 4.5 0 013.27-.97 3 3 0 00.27 3.04zm.72-.73a2 2 0 01.03-2.08c.47.17.91.41 1.32.73l-1.35 1.35zM4.9 8.9c.2-.2.5-.2.7 0l1.5 1.5a.5.5 0 11-.7.7L4.9 9.6a.5.5 0 010-.7zM1.07 7.02a1.63 1.63 0 011.95-1.97c1.5.31 3.77 1.02 5.36 2.61 1.6 1.6 2.3 3.87 2.6 5.35.24 1.2-.77 2.2-1.96 1.95-1.48-.32-3.72-1.03-5.32-2.62-1.58-1.59-2.3-3.83-2.63-5.32zm1.74-1c-.49-.1-.87.3-.77.79.32 1.42.99 3.44 2.37 4.82 1.39 1.39 3.4 2.05 4.82 2.35.49.1.87-.28.77-.77-.3-1.42-.94-3.45-2.33-4.84C6.3 7 4.25 6.33 2.81 6.03z" fill={primaryFill} /></svg>;
}

const Sport16Regular = wrapIcon(rawSvg({}), 'Sport16Regular');
export default Sport16Regular;
      
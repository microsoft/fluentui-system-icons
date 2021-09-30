import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.2 4.15l.22.97a2 2 0 001.63 1.54l.7.12a1.9 1.9 0 002.16-1.46c.32-1.36-.18-2.9-1.6-3.5a11.51 11.51 0 00-8.59 0c-1.43.6-1.94 2.14-1.62 3.51a1.9 1.9 0 002.16 1.45l.7-.12A2 2 0 006.6 5.12l.21-.97A5.47 5.47 0 018 4a5.14 5.14 0 011.2.15zm2.73-1.4c.85.35 1.25 1.32 1.01 2.35a.9.9 0 01-1.03.69l-.7-.12a1 1 0 01-.81-.77l-.28-1.26a.5.5 0 00-.33-.36h-.02l-.03-.02a4.4 4.4 0 00-.5-.12 6.14 6.14 0 00-2.97.12l-.03.01h-.01a.5.5 0 00-.34.37L5.61 4.9a1 1 0 01-.81.77l-.7.12a.9.9 0 01-1.03-.69c-.24-1.02.17-2 1.02-2.34a10.51 10.51 0 017.84 0z" fill={primaryFill} /><path d="M8 15a4 4 0 110-8 4 4 0 010 8zm0-1a3 3 0 002.45-4.74l-4.19 4.19c.5.34 1.1.55 1.74.55zm-2.45-1.26l4.19-4.19a3 3 0 00-4.18 4.18z" fill={primaryFill} /></svg>;
}

const CallProhibited16Regular = wrapIcon(rawSvg({}), 'CallProhibited16Regular');
export default CallProhibited16Regular;
      
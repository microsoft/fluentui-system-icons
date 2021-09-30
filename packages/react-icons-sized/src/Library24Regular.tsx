import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3h1a2 2 0 012 1.85V19a2 2 0 01-1.85 2H4a2 2 0 01-2-1.85V5a2 2 0 011.85-2H5 4zm6 0h1a2 2 0 012 1.85V19a2 2 0 01-1.85 2H10a2 2 0 01-2-1.85V5a2 2 0 011.85-2H11h-1zm6.97 2a2 2 0 011.9 1.35l.04.15 3.02 11.75a2 2 0 01-1.3 2.39l-.14.04-.97.25a2 2 0 01-2.39-1.28l-.05-.16-3.01-11.74a2 2 0 011.3-2.4l.14-.04.97-.25c.16-.04.33-.06.5-.06zM5 4.5H4a.5.5 0 00-.5.41V19c0 .24.18.45.41.5H5a.5.5 0 00.5-.41V5a.5.5 0 00-.41-.5H5zm6 0h-1a.5.5 0 00-.5.41V19c0 .24.18.45.41.5H11a.5.5 0 00.5-.41V5a.5.5 0 00-.41-.5H11zm5.98 2h-.07l-.06.02-.97.24a.5.5 0 00-.38.51l.02.1 3.02 11.75c.06.26.3.37.48.37h.06l.06-.01.97-.25a.5.5 0 00.38-.52l-.02-.09-3.01-11.74a.5.5 0 00-.48-.38z" fill={primaryFill} /></svg>;
}

const Library24Regular = wrapIcon(rawSvg({}), 'Library24Regular');
export default Library24Regular;
      
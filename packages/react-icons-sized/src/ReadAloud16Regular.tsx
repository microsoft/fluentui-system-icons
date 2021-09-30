import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.03 1.32a.5.5 0 01.65-.29l.02.01a2.25 2.25 0 01.19.08l.5.27c.4.25.94.63 1.47 1.2A8.3 8.3 0 0115 8.5a.5.5 0 01-1 0c0-2.61-.95-4.24-1.86-5.22a6.07 6.07 0 00-1.81-1.31.5.5 0 01-.3-.65zm-3.07 2a.5.5 0 00-.92 0l-4 10a.5.5 0 10.92.37L4.04 11h4.92l1.08 2.69a.5.5 0 10.92-.38l-4-10zM8.56 10H4.44L6.5 4.85 8.56 10zm1.66-6.45a.5.5 0 00-.45.9h.01a1.54 1.54 0 01.24.15 3.45 3.45 0 011.48 2.9.5.5 0 001 0 4.45 4.45 0 00-2.24-3.93l-.02-.01h-.01s.15.08 0 0zm-.45.9z" fill={primaryFill} /></svg>;
}

const ReadAloud16Regular = wrapIcon(rawSvg({}), 'ReadAloud16Regular');
export default ReadAloud16Regular;
      
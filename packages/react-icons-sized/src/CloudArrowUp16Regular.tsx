import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.7 4c-.48.6-.7 1.35-.7 2a.5.5 0 01-.5.5C2.69 6.5 2 7.76 2 8.5c0 .43.1.92.44 1.3.32.36.91.7 2.06.7H5c0 .34.03.68.1 1h-.6c-1.35 0-2.26-.41-2.81-1.05A2.95 2.95 0 011 8.5c0-1.18.97-2.77 3.03-2.98.08-.72.37-1.5.9-2.15A3.82 3.82 0 018 2c.85 0 1.84.28 2.63.93a3.68 3.68 0 011.3 2.26c-.34-.1-.7-.15-1.07-.18-.17-.57-.48-1-.86-1.31A3.23 3.23 0 008 3c-1.1 0-1.83.43-2.3 1zm9.3 6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.15-2.35A.5.5 0 0010.5 8a.5.5 0 00-.35.15l-2 2a.5.5 0 00.7.7L10 9.71v2.79a.5.5 0 001 0V9.7l1.15 1.15a.5.5 0 00.7-.7l-2-2z" fill={primaryFill} /></svg>;
}

const CloudArrowUp16Regular = wrapIcon(rawSvg({}), 'CloudArrowUp16Regular');
export default CloudArrowUp16Regular;
      
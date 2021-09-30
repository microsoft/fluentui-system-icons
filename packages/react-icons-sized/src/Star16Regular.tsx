import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.2 2.1a.9.9 0 011.6 0l1.53 3.08 3.4.5a.9.9 0 01.5 1.53l-2.46 2.4.58 3.39a.9.9 0 01-1.3.95L8 12.35l-3.04 1.6a.9.9 0 01-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 01.5-1.53l3.4-.5L7.2 2.1zm.8.63L6.55 5.67a.9.9 0 01-.68.5l-3.25.47 2.35 2.3c.21.2.3.5.26.79l-.56 3.24 2.91-1.53a.9.9 0 01.84 0l2.9 1.53-.55-3.24a.9.9 0 01.26-.8l2.36-2.3-3.26-.46a.9.9 0 01-.67-.5L8 2.73z" fill={primaryFill} /></svg>;
}

const Star16Regular = wrapIcon(rawSvg({}), 'Star16Regular');
export default Star16Regular;
      
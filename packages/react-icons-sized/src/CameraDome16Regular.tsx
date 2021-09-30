import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 9a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4zM1 3.5C1 2.67 1.67 2 2.5 2h11c.83 0 1.5.67 1.5 1.5v1c0 .65-.42 1.2-1 1.41V9A6 6 0 012 9V5.91c-.58-.2-1-.76-1-1.41v-1zM2.5 5h11a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v1c0 .28.22.5.5.5zM3 6v3a5 5 0 0010 0V6H3z" fill={primaryFill} /></svg>;
}

const CameraDome16Regular = wrapIcon(rawSvg({}), 'CameraDome16Regular');
export default CameraDome16Regular;
      
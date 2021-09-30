import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 4h-.1a.75.75 0 00-.65.75v12.7l-3.22-3.23-.08-.07a.75.75 0 00-.98 1.14l4.5 4.5.09.07c.3.22.7.2.97-.07l4.5-4.5.07-.09c.22-.3.2-.7-.07-.98l-.08-.07a.75.75 0 00-.98.07L18 17.45V4.65a.75.75 0 00-.75-.65zm-11.04.22l-4.49 4.5-.07.08c-.22.3-.2.7.07.98l.08.07c.3.22.71.2.98-.07L6 6.56V19.36c.05.36.37.64.75.64h.1a.75.75 0 00.65-.75V6.55l3.22 3.23.08.07a.75.75 0 00.98-1.14l-4.5-4.5-.09-.06a.75.75 0 00-.98.07z" fill={primaryFill} /></svg>;
}

const ArrowSort24Regular = wrapIcon(rawSvg({}), 'ArrowSort24Regular');
export default ArrowSort24Regular;
      
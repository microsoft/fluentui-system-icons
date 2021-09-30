import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.28 16.53l.07-.08c.22-.3.2-.71-.07-.98l-2.72-2.72h6.79A.75.75 0 0017 12v-.1a.75.75 0 00-.75-.65h-6.7l2.73-2.72.07-.08a.75.75 0 00-1.13-.98l-4 4-.07.08c-.22.3-.2.71.07.98l4 4 .08.07c.3.22.71.2.98-.07zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeft24Regular = wrapIcon(rawSvg({}), 'ArrowCircleLeft24Regular');
export default ArrowCircleLeft24Regular;
      
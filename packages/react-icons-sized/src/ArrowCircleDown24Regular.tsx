import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.53 11.72l-.08-.07a.75.75 0 00-.98.07l-2.72 2.72v-6.8A.75.75 0 0012 7h-.1a.75.75 0 00-.65.75v6.69l-2.72-2.72-.09-.07a.75.75 0 00-.97 1.13l4 4 .08.07c.3.22.71.2.98-.07l4-4 .07-.08c.22-.3.2-.71-.07-.98zM2 12a10 10 0 1020 0 10 10 0 00-20 0zm18.5 0a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleDown24Regular = wrapIcon(rawSvg({}), 'ArrowCircleDown24Regular');
export default ArrowCircleDown24Regular;
      
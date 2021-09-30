import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 13.75l-.08-.07a.75.75 0 00-.98.07l-.69.69v-6.8A.75.75 0 008.74 7h-.1a.75.75 0 00-.65.75v6.69l-.69-.7-.08-.06a.75.75 0 00-.98 1.13l1.97 1.97.08.07c.3.22.71.2.98-.07l1.97-1.97.07-.08c.22-.3.2-.71-.07-.98zM2 12a10 10 0 1020 0 10 10 0 00-20 0zm18.5 0a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zm-2.75 1.75l-.08-.07a.75.75 0 00-.98.07l-.7.69v-6.8a.75.75 0 00-.74-.64h-.1a.75.75 0 00-.65.75v6.69l-.69-.7-.08-.06a.75.75 0 00-.98 1.13l1.97 1.97.08.07c.3.22.71.2.98-.07l1.97-1.97.07-.08c.22-.3.2-.71-.07-.98z" fill={primaryFill} /></svg>;
}

const ArrowCircleDownDouble24Regular = wrapIcon(rawSvg({}), 'ArrowCircleDownDouble24Regular');
export default ArrowCircleDownDouble24Regular;
      
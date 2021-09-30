import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.03 12.2a2 2 0 01-.58.59l-6.05 4.08a2.5 2.5 0 01-2.8 0L4.55 12.8a2 2 0 01-.78-2.29l6.84 4.56c.79.52 1.8.56 2.62.1l.16-.1 6.84-4.56a2 2 0 01-.2 1.7zm.2 1.55a2 2 0 01-.78 2.29l-6.05 4.08a2.5 2.5 0 01-2.8 0l-6.05-4.08a2 2 0 01-.78-2.29l6.84 4.56c.79.52 1.8.56 2.62.1l.16-.1 6.84-4.56zM13.39 3.42l6.36 4.25a1 1 0 010 1.66l-6.36 4.25a2.5 2.5 0 01-2.78 0L4.25 9.33a1 1 0 010-1.66l6.36-4.25a2.5 2.5 0 012.78 0zm-1.83 1.19l-.11.06L5.7 8.5l5.74 3.83a1 1 0 00.99.06l.11-.06L18.3 8.5l-5.74-3.83a1 1 0 00-.99-.06z" fill={primaryFill} /></svg>;
}

const Layer24Regular = wrapIcon(rawSvg({}), 'Layer24Regular');
export default Layer24Regular;
      
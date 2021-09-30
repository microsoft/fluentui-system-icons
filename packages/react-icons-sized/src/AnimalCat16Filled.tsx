import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.66 15H3.63a2.64 2.64 0 01-1.93-4.44l.8-.86a2.18 2.18 0 00-.05-3.02l-.79-.79a.5.5 0 01.71-.7l.78.78a3.18 3.18 0 01.08 4.41l-.8.86A1.64 1.64 0 003.64 14h.5a16.68 16.68 0 01.36-3.57 7.1 7.1 0 011.33-2.92 3.77 3.77 0 012.54-1.39V3.2c0-1.21.98-2.19 2.19-2.19.5 0 .92.41.92.92v.49h1.18c.66 0 1.27.34 1.62.9l.43.7a1.9 1.9 0 01-1.47 2.9v6.54c0 .85-.7 1.55-1.56 1.55h-.55v-1.55a2.6 2.6 0 00-2.6-2.61h-.89a.5.5 0 000 1h.88c.89 0 1.61.72 1.61 1.6V15H4.66z" fill={primaryFill} /></svg>;
}

const AnimalCat16Filled = wrapIcon(rawSvg({}), 'AnimalCat16Filled');
export default AnimalCat16Filled;
      
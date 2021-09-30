import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.38 11.5a14.78 14.78 0 01-9.97 9.9l-8.82-8.8a14.78 14.78 0 019.91-9.98l8.88 8.88zm-7.66-2.28l-4.5 4.5a.75.75 0 101.06 1.06l4.5-4.5a.75.75 0 10-1.06-1.06z" fill={primaryFill} /><path d="M2.2 14.32l7.48 7.48c-.8.13-1.6.2-2.43.2h-1A4.25 4.25 0 012 17.75v-1c0-.83.07-1.64.2-2.43z" fill={primaryFill} /><path d="M14.22 2.22l7.56 7.56c.15-.82.22-1.67.22-2.53v-1C22 3.9 20.1 2 17.75 2h-1c-.86 0-1.71.07-2.53.22z" fill={primaryFill} /></svg>;
}

const SportAmericanFootball24Filled = wrapIcon(rawSvg({}), 'SportAmericanFootball24Filled');
export default SportAmericanFootball24Filled;
      
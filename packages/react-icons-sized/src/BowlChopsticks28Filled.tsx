import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.12 2.58a.75.75 0 10-1.24.84L9.6 9h1.8L7.12 2.58zm5 0L16.4 9h-1.8l-3.72-5.58a.75.75 0 011.24-.84zM3.15 10C2.52 10 2 10.52 2 11.15V14h24v-2.85c0-.63-.52-1.15-1.15-1.15H3.15zM2.1 15.5a12 12 0 006.1 9H4.75a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5h-3.44a12 12 0 006.1-9H2.09z" fill={primaryFill} /></svg>;
}

const BowlChopsticks28Filled = wrapIcon(rawSvg({}), 'BowlChopsticks28Filled');
export default BowlChopsticks28Filled;
      
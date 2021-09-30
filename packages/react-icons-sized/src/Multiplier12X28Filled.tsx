import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 10.82v.01a1 1 0 01-2-.14c0 .18 0 0 0 0v-.03a2.42 2.42 0 01.1-.5c.07-.26.22-.63.48-1 .56-.77 1.56-1.41 3.17-1.41 1.34 0 2.55.45 3.36 1.37.82.92 1.11 2.18.88 3.55a3.3 3.3 0 01-1.65 2.37c-.53.32-1.19.55-1.73.75l-.46.17c-.69.27-1.19.53-1.54.93-.21.25-.4.59-.52 1.11H18a1 1 0 110 2h-6a1 1 0 01-1-1 5 5 0 011.1-3.42 5.65 5.65 0 012.32-1.48l.67-.25c.48-.18.87-.32 1.22-.53.4-.23.62-.5.7-.99.16-.88-.05-1.5-.4-1.89-.35-.4-.95-.69-1.86-.69-1.02 0-1.39.36-1.55.58a1.2 1.2 0 00-.2.49zM8.75 20a.75.75 0 100-1.5.75.75 0 000 1.5zm11.54-5.7a1 1 0 011.42 0L23 15.58l1.3-1.3a1 1 0 011.4 1.42L24.42 17l1.3 1.3a1 1 0 01-1.42 1.4L23 18.42l-1.3 1.3a1 1 0 01-1.4-1.42L21.58 17l-1.3-1.3a1 1 0 010-1.4zM7 9a1 1 0 00-1.86-.52v.01a3.37 3.37 0 01-.17.25l-.53.7a8.13 8.13 0 01-1.95 1.7 1 1 0 101.02 1.72A9.18 9.18 0 005 11.73V19a1 1 0 102 0V9zm-1.86-.52z" fill={primaryFill} /></svg>;
}

const Multiplier12X28Filled = wrapIcon(rawSvg({}), 'Multiplier12X28Filled');
export default Multiplier12X28Filled;
      
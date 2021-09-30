import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 10.82v.01a1 1 0 01-2-.14c0 .31 0 0 0 0v-.03a1.9 1.9 0 01.02-.15l.08-.34c.07-.27.22-.64.48-1 .56-.78 1.56-1.42 3.17-1.42 1.34 0 2.55.45 3.36 1.37.82.92 1.11 2.18.88 3.55a3.3 3.3 0 01-1.65 2.37c-.53.32-1.19.55-1.73.75l-.46.17c-.69.27-1.19.53-1.54.93-.21.25-.4.59-.52 1.11H14a1 1 0 110 2H8a1 1 0 01-1-1 5 5 0 011.1-3.42 5.65 5.65 0 012.32-1.48l.67-.25c.48-.18.87-.32 1.22-.53.4-.23.62-.5.7-.99.16-.88-.05-1.5-.4-1.89-.35-.4-.95-.69-1.86-.69-1.02 0-1.39.36-1.55.58a1.2 1.2 0 00-.2.49zm8.7 3.47a1 1 0 00-1.4 1.42L17.58 17l-1.3 1.3a1 1 0 001.42 1.4L19 18.42l1.3 1.3a1 1 0 001.4-1.42L20.42 17l1.3-1.3a1 1 0 00-1.42-1.4L19 15.58l-1.3-1.3z" fill={primaryFill} /></svg>;
}

const Multiplier2X28Filled = wrapIcon(rawSvg({}), 'Multiplier2X28Filled');
export default Multiplier2X28Filled;
      
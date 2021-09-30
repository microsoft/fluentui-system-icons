import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L13.5 6.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7zM14.5 11l.33-.01a2.5 2.5 0 01-.2.42l-3.46 5.91c-.15.27-.4.47-.67.58v-7.03a1 1 0 00.46-1.16c.95.8 2.19 1.29 3.54 1.29zM9 5.5c0 1.35.49 2.59 1.3 3.54a1 1 0 00-.8 1.83v7.04a1.37 1.37 0 01-.7-.59l-3.46-5.9a2.5 2.5 0 01-.1-2.34L6.7 6h-.2A1.5 1.5 0 015 4.5v-2a.5.5 0 011 0v2c0 .28.22.5.5.5h2.52L9 5.5z" fill={primaryFill} /></svg>;
}

const CalligraphyPenCheckmark20Filled = wrapIcon(rawSvg({}), 'CalligraphyPenCheckmark20Filled');
export default CalligraphyPenCheckmark20Filled;
      
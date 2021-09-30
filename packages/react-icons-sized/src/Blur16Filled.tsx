import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 104.47 10H8v-1h5.2c.18-.32.34-.65.46-1H8V9h5.92c.05-.33.08-.66.08-1H8V7h5.92a5.95 5.95 0 00-.26-1H8V5h5.2c-.21-.36-.45-.7-.73-1H8V3h3.32c-.95-.63-2.1-1-3.32-1z" fill={primaryFill} /></svg>;
}

const Blur16Filled = wrapIcon(rawSvg({}), 'Blur16Filled');
export default Blur16Filled;
      
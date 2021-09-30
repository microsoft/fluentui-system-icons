import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm6.52 4.54L6.54 18.52A8.5 8.5 0 0018.51 6.55zM12 3.5a8.5 8.5 0 00-6.52 13.96L17.46 5.48A8.47 8.47 0 0012 3.5z" fill={primaryFill} /></svg>;
}

const Prohibited24Regular = wrapIcon(rawSvg({}), 'Prohibited24Regular');
export default Prohibited24Regular;
      
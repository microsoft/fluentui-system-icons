import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2.5a.5.5 0 00-1 0V5H2.5a.5.5 0 000 1H5v6.5A2.5 2.5 0 007.5 15H14v2.5a.5.5 0 001 0V15h2.5a.5.5 0 000-1h-10A1.5 1.5 0 016 12.5v-10z" fill={primaryFill} /><path d="M14 7.5V13h1V7.5A2.5 2.5 0 0012.5 5H7v1h5.5c.83 0 1.5.67 1.5 1.5z" fill={primaryFill} /></svg>;
}

const Crop20Regular = wrapIcon(rawSvg({}), 'Crop20Regular');
export default Crop20Regular;
      
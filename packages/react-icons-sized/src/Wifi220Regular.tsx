import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.6 9.36c.47.47.88 1.04 1.19 1.65a.5.5 0 11-.89.46 5.45 5.45 0 00-9.73-.01.5.5 0 01-.89-.46A6.45 6.45 0 0114.6 9.35zm-1.71 2.5c.35.35.64.78.85 1.25a.5.5 0 01-.92.4 3.03 3.03 0 00-5.56-.01.5.5 0 11-.92-.4 4.03 4.03 0 016.54-1.24zm-1.93 1.93a1.3 1.3 0 11-1.83 1.83 1.3 1.3 0 011.83-1.83z" fill={primaryFill} /></svg>;
}

const Wifi220Regular = wrapIcon(rawSvg({}), 'Wifi220Regular');
export default Wifi220Regular;
      
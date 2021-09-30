import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.47 5.06a.5.5 0 01-.65.28 5 5 0 00-5.36 8.2.5.5 0 11-.7.7 6 6 0 016.42-9.83c.26.1.39.39.29.65zm2.47 2.47a.5.5 0 01.65.29 6 6 0 01-1.35 6.42.5.5 0 11-.7-.7 5 5 0 001.12-5.36.5.5 0 01.28-.65zm-.85-1.71a.5.5 0 00-.64-.01l-.18.14A335.17 335.17 0 009.3 9.2c-.14.12-.27.24-.34.33a1.5 1.5 0 102.28 1.95l.27-.4.38-.62a123.47 123.47 0 002.2-3.82l.12-.2a.5.5 0 00-.11-.62zM10 18a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 110-14 7 7 0 010 14z" fill={primaryFill} /></svg>;
}

const GaugeRegular = wrapIcon(rawSvg({}), 'GaugeRegular');
export default GaugeRegular;
      
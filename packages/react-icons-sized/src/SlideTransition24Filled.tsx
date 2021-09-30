import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v10.5A2.75 2.75 0 004.75 20h14.5A2.75 2.75 0 0022 17.25V6.75A2.75 2.75 0 0019.25 4H4.75zM6.5 5.5v13H5v-13h1.5zm4 13H9v-13h1.5v13zm5 0H14v-13h1.5v13z" fill={primaryFill} /></svg>;
}

const SlideTransition24Filled = wrapIcon(rawSvg({}), 'SlideTransition24Filled');
export default SlideTransition24Filled;
      
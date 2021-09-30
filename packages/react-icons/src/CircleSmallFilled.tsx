import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 10a3 3 0 11-6 0 3 3 0 016 0z" fill={primaryFill} /></svg>;
}

const CircleSmallFilled = wrapIcon(rawSvg({}), 'CircleSmallFilled');
export default CircleSmallFilled;
      
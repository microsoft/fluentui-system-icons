import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 4a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zm0 6a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM4 17.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM11.75 4a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM10 11.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM11.75 16a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM16 5.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM17.75 10a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM16 17.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" fill={primaryFill} /></svg>;
}

const GridDotsFilled = wrapIcon(rawSvg({}), 'GridDotsFilled');
export default GridDotsFilled;
      
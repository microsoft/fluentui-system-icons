import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 7.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zm3 0a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zM10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" fill={primaryFill} /></svg>;
}

const PauseCircleRegular = wrapIcon(rawSvg({}), 'PauseCircleRegular');
export default PauseCircleRegular;
      
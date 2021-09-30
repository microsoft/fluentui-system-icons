import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6a4 4 0 010 8H6a4 4 0 010-8h8zm-8 6a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
}

const ToggleLeftFilled = wrapIcon(rawSvg({}), 'ToggleLeftFilled');
export default ToggleLeftFilled;
      
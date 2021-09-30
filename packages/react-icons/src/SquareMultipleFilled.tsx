import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 4H5.05A2.5 2.5 0 017.5 2H14a4 4 0 014 4v6.5a2.5 2.5 0 01-2 2.45v-1.04c.58-.2 1-.76 1-1.41V6a3 3 0 00-3-3H7.5c-.65 0-1.2.42-1.41 1z" fill={primaryFill} /><path d="M2 7.5A2.5 2.5 0 014.5 5h8A2.5 2.5 0 0115 7.5v8a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 012 15.5v-8z" fill={primaryFill} /></svg>;
}

const SquareMultipleFilled = wrapIcon(rawSvg({}), 'SquareMultipleFilled');
export default SquareMultipleFilled;
      
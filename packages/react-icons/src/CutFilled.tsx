import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.88 3.16l-3.1 4.77-.9-1.38 2.74-4.2a.75.75 0 011.26.8z" fill={primaryFill} /><path d="M12.5 11.75a3.24 3.24 0 014.5 3 3.25 3.25 0 11-5.72-2.11L10 10.66l-1.28 1.98a3.25 3.25 0 11-1.21-.88l1.6-2.47-3.99-6.13a.75.75 0 011.26-.82l6.12 9.41zm.2 1.6a1.75 1.75 0 10.01 0h-.02zM6.24 13a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z" fill={primaryFill} /></svg>;
}

const CutFilled = wrapIcon(rawSvg({}), 'CutFilled');
export default CutFilled;
      
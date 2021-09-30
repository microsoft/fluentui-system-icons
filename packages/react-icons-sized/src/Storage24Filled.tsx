import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 7h14a3 3 0 013 2.82V14a3 3 0 01-2.82 3H5a3 3 0 01-3-2.82V10a3 3 0 012.82-3H19 5zm13 3a1 1 0 100 2 1 1 0 000-2zm-4 0a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const Storage24Filled = wrapIcon(rawSvg({}), 'Storage24Filled');
export default Storage24Filled;
      
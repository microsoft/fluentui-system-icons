import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" fill={primaryFill} /><path d="M5.5 16a.5.5 0 000 1h9a.5.5 0 000-1h-9z" fill={primaryFill} /></svg>;
}

const TvFilled = wrapIcon(rawSvg({}), 'TvFilled');
export default TvFilled;
      
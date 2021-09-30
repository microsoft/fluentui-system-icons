import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M41.5 24a17.5 17.5 0 10-35 0 17.5 17.5 0 0035 0zm2.5 0a20 20 0 11-40 0 20 20 0 0140 0zm-23.67-8.7A2.25 2.25 0 0017 17.27v13.46c0 1.7 1.83 2.79 3.33 1.97l12.36-6.72a2.25 2.25 0 000-3.96L20.33 15.3z" fill={primaryFill} /></svg>;
}

const PlayCircle48Regular = wrapIcon(rawSvg({}), 'PlayCircle48Regular');
export default PlayCircle48Regular;
      
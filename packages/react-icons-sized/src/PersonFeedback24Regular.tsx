import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 14c1.24 0 2.25 1 2.25 2.25v1.61c-.32 2.13-2.23 3.15-5.43 3.15C4.37 21 2.43 20 2 17.9L2 17.75v-1.5C2 15.01 3 14 4.25 14h6.5zm0 1.5h-6.5a.75.75 0 00-.75.75v1.42c.28 1.2 1.55 1.84 4.07 1.84 2.51 0 3.73-.63 3.93-1.82v-1.44a.75.75 0 00-.75-.75zM7.5 6a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm12.25-4C20.99 2 22 3 22 4.25v3.5C22 8.99 21 10 19.75 10H18.3l-2.17 2.14a1.25 1.25 0 01-2.13-.89V10a2.25 2.25 0 01-2-2.24v-3.5C12 3.01 13 2 14.25 2h5.5zM7.5 7.5a2 2 0 100 4 2 2 0 000-4zm12.25-4h-5.5a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h1.25v2.15l2.18-2.15h2.07c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const PersonFeedback24Regular = wrapIcon(rawSvg({}), 'PersonFeedback24Regular');
export default PersonFeedback24Regular;
      
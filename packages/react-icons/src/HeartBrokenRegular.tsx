import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.74 10.5l-6.24 6.3a.66.66 0 01-.95 0l-6.27-6.34a4.4 4.4 0 01-.02-6.19 4.3 4.3 0 016.13.02l.6.61.06-.06.54-.54.1-.1a4.3 4.3 0 016.03.11 4.4 4.4 0 01.02 6.19zm-5.76-5.18l-.03.03-.2.2-.4.41a.5.5 0 01-.05.04l-1 1 2.32 2.31c.2.2.2.52 0 .71l-2 2a.5.5 0 01-.7-.7l1.64-1.65-2.31-2.32a.5.5 0 010-.7L9.29 5.6l-.61-.62a3.3 3.3 0 00-4.7-.01 3.4 3.4 0 000 4.78l6.05 6.1 6-6.06A3.4 3.4 0 0016 5.02 3.3 3.3 0 0011.3 5l-.32.32z" fill={primaryFill} /></svg>;
}

const HeartBrokenRegular = wrapIcon(rawSvg({}), 'HeartBrokenRegular');
export default HeartBrokenRegular;
      
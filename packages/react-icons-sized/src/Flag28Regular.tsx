import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 16.5v-12h16.4l-3.53 5.6a.75.75 0 000 .8l3.52 5.6H5.5zm0 1.5h17.75c.59 0 .95-.65.63-1.15l-4-6.35 4-6.35A.75.75 0 0023.25 3H4.75a.75.75 0 00-.75.75v20.5a.75.75 0 001.5 0V18z" fill={primaryFill} /></svg>;
}

const Flag28Regular = wrapIcon(rawSvg({}), 'Flag28Regular');
export default Flag28Regular;
      
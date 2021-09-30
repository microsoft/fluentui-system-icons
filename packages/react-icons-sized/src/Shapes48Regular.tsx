import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 6.5a11 11 0 00-2 21.82v2.53A13.5 13.5 0 1130.85 15.5h-2.53a11 11 0 00-10.82-9zM23.25 18A5.25 5.25 0 0018 23.25v15.5c0 2.9 2.35 5.25 5.25 5.25h15.5c2.9 0 5.25-2.35 5.25-5.25v-15.5c0-2.9-2.35-5.25-5.25-5.25h-15.5zm-2.75 5.25a2.75 2.75 0 012.75-2.75h15.5a2.75 2.75 0 012.75 2.75v15.5a2.75 2.75 0 01-2.75 2.75h-15.5a2.75 2.75 0 01-2.75-2.75v-15.5z" fill={primaryFill} /></svg>;
}

const Shapes48Regular = wrapIcon(rawSvg({}), 'Shapes48Regular');
export default Shapes48Regular;
      
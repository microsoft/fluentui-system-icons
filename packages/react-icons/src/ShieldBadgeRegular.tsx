import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7c0-1.1.9-2 2-2h11a2 2 0 012 2v1.57a2.11 2.11 0 01-1-.82V7a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1h6v1H4a2 2 0 01-2-2V7zm12.53 1.83a.5.5 0 01.95.02 1.63 1.63 0 00.45.5c.4.3 1.16.65 2.57.65.28 0 .5.22.5.5v2c0 1.03-.13 2.14-.7 3.12a5.35 5.35 0 01-3.14 2.35.5.5 0 01-.32 0 5.35 5.35 0 01-3.15-2.35A6.19 6.19 0 0111 12.5v-2a.5.5 0 01.5-.5c1.41 0 2.18-.35 2.57-.65a1.63 1.63 0 00.46-.52zm.94 0v.01zm0 0zm-.94 0v.01zm.15 1.32c-.54.4-1.38.76-2.68.84v1.51c0 .97.12 1.86.56 2.63A4.27 4.27 0 0015 16.97a4.27 4.27 0 002.44-1.84c.44-.77.56-1.66.56-2.63v-1.51a4.81 4.81 0 01-2.68-.84L15 9.87c-.1.09-.2.19-.32.28zm-.15-1.32" fill={primaryFill} /></svg>;
}

const ShieldBadgeRegular = wrapIcon(rawSvg({}), 'ShieldBadgeRegular');
export default ShieldBadgeRegular;
      
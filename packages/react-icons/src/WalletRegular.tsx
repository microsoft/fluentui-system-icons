import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 11h-1a.5.5 0 000 1h1a.5.5 0 000-1zm-10-8C3.67 3 3 3.67 3 4.5v10A2.5 2.5 0 005.5 17h10c.83 0 1.5-.67 1.5-1.5v-9c0-.65-.42-1.2-1-1.41V4.5c0-.83-.67-1.5-1.5-1.5h-10zM4 14.5V5.91c.16.06.32.09.5.09h11c.28 0 .5.22.5.5v9a.5.5 0 01-.5.5h-10A1.5 1.5 0 014 14.5zM4.5 4h10c.28 0 .5.22.5.5V5H4.5a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const WalletRegular = wrapIcon(rawSvg({}), 'WalletRegular');
export default WalletRegular;
      
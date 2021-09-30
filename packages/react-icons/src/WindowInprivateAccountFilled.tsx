import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5V6H3v1h12a3.5 3.5 0 00-2.45 6 2.5 2.5 0 00-1.86.86c-.4.45-.69 1.08-.69 1.76v.32c0 .37.06.73.16 1.06H5.5A2.5 2.5 0 013 14.5v-9z" fill={primaryFill} /><path d="M15 13a2.5 2.5 0 112-4h-2v1h2.45a2.51 2.51 0 010 1H15v1h2c-.46.6-1.18 1-2 1z" fill={primaryFill} /><path d="M12.55 14c-.46 0-.86.24-1.12.53-.26.29-.43.69-.43 1.09v.32c0 1.63 1.63 3.06 4 3.06 1.24 0 2.28-.4 2.99-1H15v-1h3.76c.15-.32.23-.65.24-1h-4v-1h3.87a1.78 1.78 0 00-.3-.47 1.5 1.5 0 00-1.12-.53h-4.9z" fill={primaryFill} /></svg>;
}

const WindowInprivateAccountFilled = wrapIcon(rawSvg({}), 'WindowInprivateAccountFilled');
export default WindowInprivateAccountFilled;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.94 2.07a.75.75 0 01.8.11l7 6a.75.75 0 010 1.14L15.16 14l5.56 4.68a.75.75 0 010 1.14l-7 6a.75.75 0 01-1.23-.57v-9.01l-4.27 3.58a.75.75 0 11-.96-1.14l5.23-4.4v-.56l-5.23-4.4a.75.75 0 11.96-1.14l4.27 3.58V2.75c0-.3.17-.56.44-.68zM14 14.97v8.65l5.1-4.36-5.1-4.28zm0-1.95l5.1-4.28L14 4.38v8.64z" fill={primaryFill} /></svg>;
}

const Bluetooth28Regular = wrapIcon(rawSvg({}), 'Bluetooth28Regular');
export default Bluetooth28Regular;
      
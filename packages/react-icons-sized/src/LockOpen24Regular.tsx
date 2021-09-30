import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2c1.88 0 3.33 1.21 3.93 3a.75.75 0 11-1.43.48C14.1 4.26 13.2 3.5 12 3.5c-1.4 0-2.42.96-2.5 2.56V8h8.25c1.2 0 2.17.92 2.24 2.1l.01.15v9.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.09L4 19.75v-9.5c0-1.2.93-2.17 2.1-2.25H8V6.25C8 3.71 9.7 2 12 2zm5.75 7.5H6.25c-.38 0-.7.28-.74.65l-.01.1v9.5c0 .38.28.69.65.74h11.6c.38 0 .7-.28.74-.64l.01-.1v-9.5c0-.38-.28-.7-.65-.74l-.1-.01zm-5.75 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
}

const LockOpen24Regular = wrapIcon(rawSvg({}), 'LockOpen24Regular');
export default LockOpen24Regular;
      
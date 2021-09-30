import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 18a11.5 11.5 0 1123 0v2h-5.25C29.01 20 28 21 28 22.25v7.5c0 1.24 1 2.25 2.25 2.25h3.5C36.1 32 38 30.1 38 27.75v-6.5-.13V18a14 14 0 10-28 0v14c0 4.56 3.7 8.25 8.25 8.25h.9a5 5 0 100-2.5h-.9A5.75 5.75 0 0112.5 32v-.38c.53.25 1.13.38 1.75.38h3.5c1.24 0 2.25-1 2.25-2.25v-7.5c0-1.24-1-2.25-2.25-2.25H12.5v-2zm0 4.5h5v7h-3.25c-.97 0-1.75-.78-1.75-1.75V22.5zm9 16.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm9-16.5h5v5.25c0 .97-.78 1.75-1.75 1.75H30.5v-7z" fill={primaryFill} /></svg>;
}

const Headset48Regular = wrapIcon(rawSvg({}), 'Headset48Regular');
export default Headset48Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.13 4.35a1.25 1.25 0 011.73 0c2.76 2.64 6.69 4.08 10.04 4.84a35.65 35.65 0 005.86.81h.02c.68.02 1.22.57 1.22 1.25V21c0 .98-.05 1.96-.16 2.94-.76-.47-1.56-.86-2.4-1.16.04-.6.06-1.19.06-1.78v-8.57l-.65-.07a38.15 38.15 0 01-4.5-.73c-3.22-.74-7.21-2.1-10.35-4.7-3.14 2.6-7.13 3.96-10.35 4.7a38.15 38.15 0 01-5.15.8v8.32c0 4.41 1.13 8.72 3.65 12.35 2.4 3.47 6.12 6.4 11.48 8.22.47.83 1.03 1.61 1.66 2.32l-.92.3c-.24.08-.5.08-.74 0-6.24-1.95-10.67-5.29-13.53-9.42A23.95 23.95 0 016 20.75v-9.5c0-.68.54-1.23 1.22-1.25h.02a9.4 9.4 0 00.41-.02l1.25-.1c1.06-.11 2.54-.32 4.2-.7 3.35-.75 7.28-2.19 10.03-4.83zM46 35a11 11 0 10-22 0 11 11 0 0022 0zm-4.3-4.7a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 7.3-7.3a1 1 0 011.4 0z" fill={primaryFill} /></svg>;
}

const ShieldCheckmark48Regular = wrapIcon(rawSvg({}), 'ShieldCheckmark48Regular');
export default ShieldCheckmark48Regular;
      
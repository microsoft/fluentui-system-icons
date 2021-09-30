import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 8c-.4 0-.73.31-.75.7l-.25 4.5a.75.75 0 00.84.8l2.57-.31a2.54 2.54 0 11.3 5.06h-.3c-.84 0-1.63-.36-2.17-1l-.42-.49a.75.75 0 10-1.14.98l.42.5a4.35 4.35 0 003.3 1.51h.3a4.04 4.04 0 10-.47-8.05l-1.68.2.16-2.9h4.54a.75.75 0 000-1.5H9.5zm7.72 6.22c.3-.3.77-.3 1.06 0L20 15.94l1.72-1.72a.75.75 0 111.06 1.06L21.06 17l1.72 1.72a.75.75 0 11-1.06 1.06L20 18.06l-1.72 1.72a.75.75 0 11-1.06-1.06L18.94 17l-1.72-1.72a.75.75 0 010-1.06zM6.5 19.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const Multiplier5X28Regular = wrapIcon(rawSvg({}), 'Multiplier5X28Regular');
export default Multiplier5X28Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2.5a.5.5 0 011 0c0 .26-.08.4-.19.5-.1.1-.2.17-.35.26l-.24.15C11.36 4 11 4.77 11 5.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-1.4a1.8 1.8 0 01.81-.84c.17-.11.42-.27.6-.45.29-.29.49-.67.49-1.21a1.5 1.5 0 00-3 0 .5.5 0 001 0zm-2 2c0-.5.12-1.01.36-1.48a.5.5 0 00-.23.15L6.5 7.25 2.87 3.17a.5.5 0 00-.74.66L5.83 8l-3.7 4.17a.5.5 0 00.74.66L6.5 8.75l3.63 4.08a.5.5 0 10.74-.66L7.17 8l2.86-3.22A1.5 1.5 0 0110 4.5z" fill={primaryFill} /></svg>;
}

const TextSuperscript16Regular = wrapIcon(rawSvg({}), 'TextSuperscript16Regular');
export default TextSuperscript16Regular;
      
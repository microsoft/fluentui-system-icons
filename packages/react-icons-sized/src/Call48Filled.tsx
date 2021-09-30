import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.1 6.9c-.78-1.56-2.41-2.82-4.42-2.6-1.79.2-4.45.86-6.26 3.05-1.86 2.24-2.56 5.74-1.13 10.98 1.53 5.59 3.8 11.1 6.61 15.55 2.8 4.41 6.24 7.95 10.2 9.3 3.49 1.2 6.16.7 8.1-.62a9.84 9.84 0 003.46-4.5c.6-1.48.2-3.02-.58-4.15l-2.88-4.19a5.25 5.25 0 00-5.89-2.03l-3.98 1.24a.68.68 0 01-.72-.19c-1.77-2.07-3.75-4.96-4.3-7.89 0-.1.01-.17.04-.23.59-.98 1.6-2.1 2.6-3.07a5.63 5.63 0 001.22-6.51l-2.08-4.15z" fill={primaryFill} /></svg>;
}

const Call48Filled = wrapIcon(rawSvg({}), 'Call48Filled');
export default Call48Filled;
      
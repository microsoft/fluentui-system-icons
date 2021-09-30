import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.92 2.65l1.66-.5a3.25 3.25 0 013.9 1.77l1.04 2.3a3.25 3.25 0 01-.75 3.71l-1.8 1.68a.25.25 0 00-.06.08c-.19.38.1 1.41 1 2.97 1.01 1.76 1.8 2.45 2.16 2.35l2.36-.73c1.34-.4 2.78.08 3.59 1.2l1.47 2.04a3.25 3.25 0 01-.4 4.26l-1.26 1.2c-.9.84-2.14 1.2-3.35.95-3.51-.73-6.67-3.57-9.48-8.44C5.2 12.62 4.31 8.47 5.44 5.06a3.75 3.75 0 012.48-2.41zm.43 1.43c-.7.21-1.25.75-1.48 1.45-.98 2.94-.19 6.67 2.43 11.21 2.62 4.54 5.46 7.09 8.49 7.72.72.15 1.47-.06 2-.57l1.27-1.2c.63-.6.72-1.58.21-2.3l-1.47-2.02a1.75 1.75 0 00-1.93-.65l-2.37.72c-1.32.4-2.55-.7-3.9-3.03-1.13-1.97-1.52-3.39-1.04-4.38.1-.2.22-.37.38-.51l1.8-1.69c.55-.5.72-1.3.4-2l-1.03-2.3a1.75 1.75 0 00-2.1-.95l-1.66.5z" fill={primaryFill} /></svg>;
}

const Call28Regular = wrapIcon(rawSvg({}), 'Call28Regular');
export default Call28Regular;
      
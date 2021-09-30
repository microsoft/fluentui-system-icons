import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.6 2.5a.6.6 0 10-1.2 0v6.05L5.12 4.27a.6.6 0 10-.85.85L8.55 9.4H2.5a.6.6 0 000 1.2h6.05l-4.28 4.28a.6.6 0 00.85.85l4.28-4.28v6.05a.6.6 0 101.2 0v-6.05l4.28 4.28a.6.6 0 00.85-.85l-4.28-4.28h6.05a.6.6 0 000-1.2h-6.05l4.28-4.28a.6.6 0 10-.85-.85L10.6 8.55V2.5z" fill={primaryFill} /></svg>;
}

const TextAsterisk20Filled = wrapIcon(rawSvg({}), 'TextAsterisk20Filled');
export default TextAsterisk20Filled;
      
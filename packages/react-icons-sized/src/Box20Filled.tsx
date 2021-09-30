import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 7.96l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 00-.36.21L10 7.96zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.26.1.53.17.8.21v-8.9L2.04 5.86zm8.46 11.87c.27-.04.54-.1.8-.21l5.76-2.3c.57-.23.94-.78.94-1.4V6.18c0-.11-.01-.22-.04-.33L10.5 8.84v8.9zM17.42 5l-3.04 1.22-7.5-3 1.82-.73a3.5 3.5 0 012.6 0l5.76 2.3c.13.06.25.13.36.21z" fill={primaryFill} /></svg>;
}

const Box20Filled = wrapIcon(rawSvg({}), 'Box20Filled');
export default Box20Filled;
      
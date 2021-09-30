import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.24 13c.58 0 .93.62.67 1.1l-.06.1-4.62 6.3h4.01c.38 0 .7.28.75.65v.1c0 .38-.28.7-.64.74h-5.6a.75.75 0 01-.66-1.1l.05-.08 4.62-6.3H2.75a.75.75 0 01-.74-.65l-.01-.1c0-.39.28-.7.65-.75h5.6zM21.25 2c.6 0 .95.66.64 1.14l-.06.09-8.5 10.27h7.92c.38 0 .7.28.75.65v.1c0 .38-.28.69-.65.74h-9.6a.75.75 0 01-.64-1.14l.06-.08L19.66 3.5h-7.91a.75.75 0 01-.75-.65v-.1c0-.38.28-.7.65-.74l.1-.01h9.5z" fill={primaryFill} /></svg>;
}

const Snooze24Regular = wrapIcon(rawSvg({}), 'Snooze24Regular');
export default Snooze24Regular;
      
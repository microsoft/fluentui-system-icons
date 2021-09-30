import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.37 3.31l.86 2.03c.37.88.16 1.92-.52 2.57l-1.9 1.8a8.68 8.68 0 003.36 5.77l2.28-.76c.86-.29 1.8.04 2.33.82l1.23 1.8c.62.91.5 2.16-.26 2.93l-.81.82a3.02 3.02 0 01-3.06.77c-2.53-.79-4.87-3.14-7-7.05C3.75 10.9 3 7.57 3.62 4.84a3.26 3.26 0 012.15-2.4l1.08-.35c1-.32 2.09.2 2.52 1.22zm5.38-1.3H21.4l.1.03.06.03c.08.03.16.09.22.15l.04.04.04.06.06.09.04.09.02.1.02.09V9.25a.75.75 0 01-1.5.1V4.57l-6.22 6.22a.75.75 0 01-.98.08l-.08-.08a.75.75 0 01-.07-.97l.07-.09 6.22-6.22h-4.7a.75.75 0 01-.73-.65l-.01-.1c0-.38.28-.7.65-.74h.1z" fill={primaryFill} /></svg>;
}

const CallOutbound24Filled = wrapIcon(rawSvg({}), 'CallOutbound24Filled');
export default CallOutbound24Filled;
      
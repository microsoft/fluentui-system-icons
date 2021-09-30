import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.04 1.5c.14-.4.57-.6.96-.46.22.1 0 0 0 0h.01l.02.01a2.15 2.15 0 01.19.08c.11.06.28.14.47.26.38.23.87.6 1.37 1.14 1 1.1 1.94 2.91 1.94 5.72a.75.75 0 01-1.5 0c0-2.44-.8-3.89-1.56-4.72a4.69 4.69 0 00-1.43-1.07h-.02a.75.75 0 01-.45-.96zM7.2 3.47a.75.75 0 00-1.4 0l-3.75 9.5a.75.75 0 001.4.56l.9-2.28h4.3l.9 2.28a.75.75 0 101.4-.56L7.2 3.47zm.86 6.28H4.94L6.5 5.79l1.56 3.96zm2.67-6.08a.75.75 0 00-.96 1.15v.01a1.83 1.83 0 01.18.17c.12.12.28.3.44.53.32.46.61 1.06.61 1.72a.75.75 0 001.5 0c0-1.09-.46-1.99-.89-2.59a5.94 5.94 0 00-.85-.96l-.02-.02h-.01zm-.96 1.15z" fill={primaryFill} /></svg>;
}

const ReadAloud16Filled = wrapIcon(rawSvg({}), 'ReadAloud16Filled');
export default ReadAloud16Filled;
      
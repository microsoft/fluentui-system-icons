import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 9.5c.28 0 .5.22.5.5a4.5 4.5 0 005.78 4.31 1.42 1.42 0 001.04.68c-.56.26-1.18.43-1.82.49v2.02a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48c0-.28.22-.5.5-.5zm7.1 4.22a.42.42 0 00.8 0l.35-1.07a2.2 2.2 0 011.4-1.4l1.07-.35a.42.42 0 000-.8h-.02l-1.08-.35a2.2 2.2 0 01-1.4-1.4l-.34-1.07a.42.42 0 00-.8 0l-.35 1.07a2.2 2.2 0 01-1.38 1.4l-1.07.35a.42.42 0 000 .8l1.07.34a2.2 2.2 0 011.4 1.4l.35 1.08zM12.48 6c.18 0 .35.03.52.1V5a3 3 0 10-6 0v5a3 3 0 003.78 2.9 1.2 1.2 0 00-.74-.7l-1.08-.36h-.01a1.42 1.42 0 010-2.68h.01l1.08-.36a1.2 1.2 0 00.74-.76l.35-1.08v-.01A1.42 1.42 0 0112.49 6zm5.54 8.96l.76.25h.02a.3.3 0 01.14.47.3.3 0 01-.14.1l-.77.26a1.58 1.58 0 00-1 1l-.24.76a.3.3 0 01-.58 0l-.24-.77a1.57 1.57 0 00-1-1l-.77-.25a.3.3 0 01-.14-.46.3.3 0 01.14-.1l.77-.26a1.58 1.58 0 00.98-1l.25-.76a.3.3 0 01.57 0l.25.77a1.58 1.58 0 001 1z" fill={primaryFill} /></svg>;
}

const MicSparkle20Filled = wrapIcon(rawSvg({}), 'MicSparkle20Filled');
export default MicSparkle20Filled;
      
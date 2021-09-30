import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.23 8.35l-.35-1.07a.42.42 0 00-.8 0l-.35 1.07a2.2 2.2 0 01-1.38 1.4l-1.07.35a.42.42 0 000 .8l1.07.34a2.2 2.2 0 011.4 1.4l.35 1.08a.42.42 0 00.8 0l.35-1.07a2.2 2.2 0 011.4-1.4l1.07-.35a.42.42 0 000-.8h-.02l-1.08-.35a2.2 2.2 0 01-1.4-1.4zM10 14.5c.45 0 .88-.06 1.28-.19a1.42 1.42 0 001.04.68c-.56.26-1.18.43-1.82.49v2.02a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48.5.5 0 011 0 4.5 4.5 0 004.5 4.5zm0-1.5a3 3 0 00.78-.1 1.2 1.2 0 00-.74-.7l-1.08-.36h-.01a1.42 1.42 0 01-.93-1.57A2.02 2.02 0 018 10V5a2 2 0 114 0v1.08a1.42 1.42 0 011 .02V5a3 3 0 10-6 0v5a3 3 0 003 3zm8.02 1.96l.76.25h.02a.3.3 0 010 .58l-.77.25a1.58 1.58 0 00-1 1l-.24.76a.3.3 0 01-.58 0l-.24-.77a1.58 1.58 0 00-1-1l-.77-.25a.3.3 0 010-.57l.77-.25a1.58 1.58 0 00.98-1l.25-.76a.3.3 0 01.57 0l.25.77a1.58 1.58 0 001 1z" fill={primaryFill} /></svg>;
}

const MicSparkle20Regular = wrapIcon(rawSvg({}), 'MicSparkle20Regular');
export default MicSparkle20Regular;
      
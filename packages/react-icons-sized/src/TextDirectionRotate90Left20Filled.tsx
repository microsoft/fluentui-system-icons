import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 13.5c0 .3-.19.58-.47.7l-7.5 3a.75.75 0 01-.56-1.4l2.03-.8v-3l-2.03-.8a.75.75 0 01.56-1.4l7.5 3c.28.12.47.4.47.7zm-2.77 0L12 12.6v1.8l2.23-.9zM5 16.25a.75.75 0 001.5 0V5.56l.72.72a.75.75 0 001.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2a.75.75 0 001.06 1.06L5 5.56v10.69zm8-7a.75.75 0 001.5 0V5.56l.72.72a.75.75 0 101.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2a.75.75 0 001.06 1.06l.72-.72v3.69z" fill={primaryFill} /></svg>;
}

const TextDirectionRotate90Left20Filled = wrapIcon(rawSvg({}), 'TextDirectionRotate90Left20Filled');
export default TextDirectionRotate90Left20Filled;
      
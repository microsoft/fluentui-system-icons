import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5a8.5 8.5 0 018.43 9.58 3.48 3.48 0 00-1.45-.55l.02-.53a7 7 0 10-3.74 6.2c-.17.4-.26.84-.26 1.3v.25l.01.17v.03A8.5 8.5 0 1112 5zm6.5 10a2.5 2.5 0 01.17 5h-.17a1 1 0 00-.84.46l-.02.04h2.61c.38 0 .7.28.75.65v.1c0 .38-.28.7-.64.74h-3.6a.75.75 0 01-.75-.64V21a2.5 2.5 0 012.33-2.5h.16a1 1 0 00.12-2h-.37c-.38 0-.7.28-.74.65v.1a.75.75 0 01-1.5 0c0-1.2.92-2.17 2.09-2.25h.4zM12 8c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75zm7.16-2.88l.08.06 1.13.99a.75.75 0 01-.9 1.2l-.08-.07-1.13-.99a.75.75 0 01.9-1.19zM14.25 2.5a.75.75 0 01.1 1.49h-4.6a.75.75 0 01-.1-1.49h4.6z" fill={primaryFill} /></svg>;
}

const Timer224Regular = wrapIcon(rawSvg({}), 'Timer224Regular');
export default Timer224Regular;
      
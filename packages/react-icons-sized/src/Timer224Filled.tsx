import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5a8.5 8.5 0 018.43 9.58A3.49 3.49 0 0018.5 14h-.44A3.26 3.26 0 0015 17.25v.14c.05.57.37 1.06.83 1.35l-.05.06c-.49.6-.78 1.37-.78 2.2v.25l.01.17v.03A8.5 8.5 0 1112 5zm6.5 10a2.5 2.5 0 01.17 5h-.17a1 1 0 00-.84.46l-.02.04h2.61c.38 0 .7.28.75.65v.1c0 .38-.28.7-.64.74h-3.6a.75.75 0 01-.75-.64V21a2.5 2.5 0 012.33-2.5h.16a1 1 0 00.12-2h-.37c-.38 0-.7.28-.74.65v.1a.75.75 0 01-1.5 0c0-1.2.92-2.17 2.09-2.25h.4zM12 8c-.38 0-.7.28-.75.65V13.35a.75.75 0 001.5 0V8.65A.75.75 0 0012 8zm7.17-2.88l.08.06 1.15 1a.75.75 0 01-.9 1.2l-.09-.06-1.14-1a.75.75 0 01.9-1.2zM14.25 2.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6z" fill={primaryFill} /></svg>;
}

const Timer224Filled = wrapIcon(rawSvg({}), 'Timer224Filled');
export default Timer224Filled;
      
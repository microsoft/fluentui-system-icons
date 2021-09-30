import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.27 3h-.62a.75.75 0 00.1 1.5h.67c.93.07 1.7.7 1.98 1.57.56.1 1.1.28 1.6.53-.08-2-1.72-3.6-3.73-3.6zm-3.7 6.07c-.23.45-.39.93-.48 1.43h-.34a3.75 3.75 0 01-.2-7.5h.7a.75.75 0 01.1 1.5h-.6A2.25 2.25 0 005.6 9h.65c.11 0 .22.03.31.07zm4.01-3c-1.1.2-2.08.7-2.85 1.43H5.75a.75.75 0 01-.1-1.5h4.6c.12 0 .23.03.33.08zM11.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const LinkDismiss16Filled = wrapIcon(rawSvg({}), 'LinkDismiss16Filled');
export default LinkDismiss16Filled;
      
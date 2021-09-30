import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 3H9.41a.5.5 0 00.09 1h1.16a2.5 2.5 0 012.32 2.2c.36.1.7.23 1.02.4v-.1A3.5 3.5 0 0010.5 3zM6.6 9c-.16.32-.3.65-.4 1h-.7a3.5 3.5 0 01-.2-7h1.2a.5.5 0 01.09 1H5.5a2.5 2.5 0 00-.16 5H6.5a.5.5 0 01.1 0zm4.12-2.95c-.88.13-1.69.46-2.38.95H5.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.22.05zM11.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const LinkDismiss16Regular = wrapIcon(rawSvg({}), 'LinkDismiss16Regular');
export default LinkDismiss16Regular;
      
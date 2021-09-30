import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.45 2.15C14.99 4.05 17.59 5 20.25 5c.41 0 .75.34.75.75V11c0 5-2.96 8.68-8.73 10.95a.75.75 0 01-.54 0C5.96 19.68 3 16 3 11V5.75c0-.41.34-.75.75-.75 2.66 0 5.26-.94 7.8-2.85.27-.2.63-.2.9 0zM12 3.68a14.36 14.36 0 01-7.5 2.8V11c0 4.26 2.45 7.38 7.5 9.44 5.05-2.06 7.5-5.18 7.5-9.44V6.48a14.36 14.36 0 01-7.5-2.8zM9.28 8.22L12 10.94l2.73-2.72a.75.75 0 01.97-.07l.09.07c.26.27.29.68.07.98l-.07.08L13.06 12l2.73 2.73a.75.75 0 11-1.06 1.06L12 13.06 9.28 15.8a.75.75 0 01-.97.07l-.09-.07a.75.75 0 01-.07-.98l.07-.08L10.94 12 8.22 9.28a.75.75 0 011.06-1.06z" fill={primaryFill} /></svg>;
}

const ShieldDismiss24Regular = wrapIcon(rawSvg({}), 'ShieldDismiss24Regular');
export default ShieldDismiss24Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.45 16.15l.08.07 2.25 2.25c.27.27.3.68.07.98l-.07.08-2.25 2.25a.75.75 0 01-1.13-.98l.07-.08.97-.97H3.75a.75.75 0 01-.1-1.5h4.79l-.97-.97a.75.75 0 01-.07-.98l.07-.08a.75.75 0 01.98-.07zm7.1 0c.26-.2.62-.2.89-.01l.09.08.07.08c.2.26.2.62.01.89l-.08.09-.97.97h4.69a.75.75 0 01.1 1.5h-4.79l.97.97.07.08a.75.75 0 01-1.05 1.05l-.08-.07-2.25-2.25-.07-.08a.75.75 0 01-.01-.89l.08-.09 2.25-2.25.08-.07zM8.84 2.28l.06.1.05.1 4.5 11.5a.75.75 0 01-1.35.64l-.05-.1-1.23-3.15H5.68l-1.23 3.15a.75.75 0 01-.88.46l-.1-.03a.75.75 0 01-.45-.88l.03-.1 4.5-11.5a.75.75 0 011.29-.2zm10.75.1a.75.75 0 011.39.55l-.03.1-4.5 11.5-.05.1a.75.75 0 01-1.3 0l-.05-.1-4.5-11.5-.03-.1a.75.75 0 01.36-.83l.1-.05.1-.03c.32-.08.65.07.82.36l.05.1 3.8 9.71 3.8-9.71.04-.1zM8.25 4.81L6.27 9.87h3.96L8.25 4.8z" fill={primaryFill} /></svg>;
}

const FontSpaceTrackingIn24Regular = wrapIcon(rawSvg({}), 'FontSpaceTrackingIn24Regular');
export default FontSpaceTrackingIn24Regular;
      
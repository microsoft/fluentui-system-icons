import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 1C8.67 1 8 1.67 8 2.5v2c0 .65.42 1.2 1 1.41V7a.5.5 0 00.82.38L11.48 6h2.02c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-4zM9 2.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2.2a.5.5 0 00-.32.12l-.98.81V5.5a.5.5 0 00-.5-.5.5.5 0 01-.5-.5v-2zM3 6a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2zM2.5 9h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.25 3.25 0 011 10.5C1 9.67 1.67 9 2.5 9zm5 1h-5a.5.5 0 00-.5.5c0 .82.32 1.42.84 1.83.52.43 1.28.67 2.16.67.88 0 1.64-.24 2.16-.67.52-.4.84-1.01.84-1.83a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const PersonFeedback16Regular = wrapIcon(rawSvg({}), 'PersonFeedback16Regular');
export default PersonFeedback16Regular;
      
import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.02 6l-1.5 1.5H4.26a.75.75 0 00-.75.75v11.5c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75v-3.28l1.5-1.49v4.77c0 1.24-1 2.25-2.25 2.25H4.25C3.01 22 2 21 2 19.75V8.25C2 7.01 3 6 4.25 6h4.77zm-3.8 6.22l2-2a.75.75 0 01.98-.07l.08.07 5.5 5.5c.27.27.3.68.07.98l-.07.08-2 2a.75.75 0 01-.98.07l-.08-.07-5.5-5.5a.75.75 0 01-.07-.98l.07-.08 2-2-2 2zm2.53-.4l-.94.93 4.44 4.44.94-.94-4.44-4.44zm13.53-9.1a2.58 2.58 0 01-.47 4.01l-.14.09-1.17.62.51.51a3.25 3.25 0 01.14 4.45l-.14.15-1.23 1.23a.75.75 0 01-.98.07l-.08-.07-.47-.47-1.47 1.47a.75.75 0 01-.98.07l-.08-.07-5.5-5.5a.75.75 0 01-.07-.98l.07-.08 1.47-1.47-.47-.47a.75.75 0 01-.07-.98l.07-.08 1.23-1.23a3.25 3.25 0 014.45-.14l.15.14.51.51.62-1.16c.09-.17.2-.33.32-.48l.13-.14c1.01-1 2.64-1 3.65 0zm-9.53 5.1l-.94.93 4.44 4.44.94-.94-4.44-4.44zm.89-2.88l-.13.11-.7.7 6.44 6.44.7-.7c.68-.68.69-1.78.02-2.46l-3.98-3.98a1.75 1.75 0 00-2.35-.11zm6.05-1.16c-.05.05-.1.1-.13.17l-.06.09-.83 1.57.72.72 1.57-.84a1.08 1.08 0 10-1.27-1.71z" fill={primaryFill} /></svg>;
}

const Classification24Regular = wrapIcon(rawSvg({}), 'Classification24Regular');
export default Classification24Regular;
      
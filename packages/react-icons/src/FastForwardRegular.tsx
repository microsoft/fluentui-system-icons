import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5a.5.5 0 01.8-.4L10 8.98V4.5a.5.5 0 01.8-.4l7 5.5a.5.5 0 010 .8l-7 5.5a.5.5 0 01-.8-.4v-4.47l-6.2 4.86a.5.5 0 01-.8-.39v-11zm8 9.97L16.7 10 11 5.53v8.94zm-7 0L9.7 10 4 5.53v8.94z" fill={primaryFill} /></svg>;
}

const FastForwardRegular = wrapIcon(rawSvg({}), 'FastForwardRegular');
export default FastForwardRegular;
      
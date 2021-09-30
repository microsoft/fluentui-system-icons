import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4.5a.5.5 0 00-.8-.4l-7 5.5a.5.5 0 000 .8l7 5.5a.5.5 0 00.8-.4v-4.47l6.2 4.86a.5.5 0 00.8-.39v-11a.5.5 0 00-.8-.4L10 8.98V4.5z" fill={primaryFill} /></svg>;
}

const RewindFilled = wrapIcon(rawSvg({}), 'RewindFilled');
export default RewindFilled;
      
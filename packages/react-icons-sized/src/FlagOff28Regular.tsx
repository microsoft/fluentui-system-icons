import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.4 1.55l.07-.08a.75.75 0 01.98-.07l.08.07 20 20a.75.75 0 01-.98 1.13l-.08-.07L17.94 18H5.5v6.25a.75.75 0 01-1.5.1V4.06L2.47 2.53a.75.75 0 01-.07-.98l.07-.08-.07.08zM7.06 3h16.19c.56 0 .9.58.68 1.06l-.05.09-4 6.35 4 6.35c.3.47 0 1.07-.53 1.14l-.1.01h-1.19l-1.5-1.5h1.33l-3.52-5.6a.75.75 0 01-.06-.7l.06-.1 3.52-5.6H8.56L7.06 3zM5.5 5.56V16.5h10.94L5.5 5.56z" fill={primaryFill} /></svg>;
}

const FlagOff28Regular = wrapIcon(rawSvg({}), 'FlagOff28Regular');
export default FlagOff28Regular;
      
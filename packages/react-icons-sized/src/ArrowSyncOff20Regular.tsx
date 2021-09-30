import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.41 3.64a.5.5 0 000-.71L9.3.8a.5.5 0 00-.7.7l1 1c-1.3.07-2.6.48-3.73 1.23l.73.73a6.49 6.49 0 013.55-.97L8.59 5.05a.5.5 0 00.7.7l2.12-2.11zM4.35 5.06a7.5 7.5 0 001.16 10.95.5.5 0 00.6-.8 6.5 6.5 0 01-1.04-9.44l9.16 9.17a6.48 6.48 0 01-4.37 1.56l1.55-1.55a.5.5 0 10-.7-.7l-2.12 2.11a.5.5 0 000 .71l2.12 2.12a.5.5 0 00.7-.7l-1-1a7.47 7.47 0 004.53-1.84l2.2 2.2a.5.5 0 00.71-.7l-15-15a.5.5 0 10-.7.7l2.2 2.21zM15.3 4.7a7.5 7.5 0 01.96 9.44l-.73-.73A6.5 6.5 0 0013.9 4.8a.5.5 0 11.6-.8c.29.22.56.45.81.7z" fill={primaryFill} /></svg>;
}

const ArrowSyncOff20Regular = wrapIcon(rawSvg({}), 'ArrowSyncOff20Regular');
export default ArrowSyncOff20Regular;
      
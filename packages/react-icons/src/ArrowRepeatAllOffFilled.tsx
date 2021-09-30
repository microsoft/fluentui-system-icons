import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 2.22a.75.75 0 01.98-.07l.08.07 14.5 14.5.07.08a.75.75 0 01-1.05 1.05l-.08-.07-2.86-2.85c-.18.03-.37.05-.57.06L13 15H8.56l1.22 1.22c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07-2.5-2.5a.75.75 0 01-.07-.98l.07-.08 2.5-2.5a.75.75 0 011.13.98l-.07.08-1.22 1.22h3.88L5.69 6.75A3.5 3.5 0 003.5 9.81V10c0 1.08.49 2.05 1.26 2.7.15.13.24.32.24.54a.75.75 0 01-1.25.56 4.98 4.98 0 01.82-8.17L2.22 3.28l-.07-.08a.75.75 0 01.07-.98zm13.53 3.79c.18 0 .34.06.47.17a4.98 4.98 0 01.03 7.62l-1.06-1.07a3.5 3.5 0 00.05-5.42.75.75 0 01.5-1.3zm-5.53-3.3a.75.75 0 01.98-.06l.08.07 2.5 2.5.07.08c.2.26.2.62.01.89l-.08.09-2.5 2.5-.02.02-1.06-1.06.02-.02 1.22-1.22H8.95L7.45 5h3.99l-1.22-1.22-.07-.08a.75.75 0 01.07-.98z" fill={primaryFill} /></svg>;
}

const ArrowRepeatAllOffFilled = wrapIcon(rawSvg({}), 'ArrowRepeatAllOffFilled');
export default ArrowRepeatAllOffFilled;
      
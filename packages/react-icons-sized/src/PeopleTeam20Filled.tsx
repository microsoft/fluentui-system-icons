import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.47 8.01a1 1 0 011 .89v4.48a3.48 3.48 0 01-6.96.2V9a1 1 0 01.88-.99h5.08zm-6.7 0c-.14.25-.23.53-.26.82v4.76c.03.65.2 1.25.47 1.8a2.86 2.86 0 01-3.96-2.47V9.01a1 1 0 01.88-.99h2.87zm8.44 0h2.78a1 1 0 011 .89v3.85a2.86 2.86 0 01-3.98 2.63c.26-.53.42-1.11.46-1.73V8.87c-.02-.31-.12-.6-.26-.86zM9.99 3a2.23 2.23 0 110 4.45 2.23 2.23 0 010-4.45zm4.99.63a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82zm-9.96 0a1.91 1.91 0 110 3.82 1.91 1.91 0 010-3.82z" fill={primaryFill} /></svg>;
}

const PeopleTeam20Filled = wrapIcon(rawSvg({}), 'PeopleTeam20Filled');
export default PeopleTeam20Filled;
      
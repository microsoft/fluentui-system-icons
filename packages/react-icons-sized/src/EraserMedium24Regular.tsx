import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.65 2.64a2.25 2.25 0 013.2.02l4.9 5.01c.86.88.86 2.28 0 3.16l-.7.7a6.45 6.45 0 00-1.65-.47l1.28-1.29a.75.75 0 000-1.05l-4.91-5a.75.75 0 00-1.06-.02l-7 6.94 4.67 4.68c-.2.55-.33 1.14-.37 1.75L5.64 11.7 4.1 13.2c-.3.3-.3.78 0 1.07l5.1 5c.3.3.77.3 1.06 0l.8-.81c.09.58.25 1.13.48 1.65l-.22.22c-.87.88-2.29.89-3.17.02l-5.1-5c-.9-.89-.9-2.33 0-3.21l9.6-9.51zM17.5 23a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" fill={primaryFill} /></svg>;
}

const EraserMedium24Regular = wrapIcon(rawSvg({}), 'EraserMedium24Regular');
export default EraserMedium24Regular;
      
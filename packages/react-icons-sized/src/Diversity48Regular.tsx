import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.78 29.54c-.48.35-.9.76-1.24 1.24l7.68 7.68c.48-.35.9-.76 1.24-1.24l-7.68-7.68zm8.68 5.15a5.5 5.5 0 00-6.15-6.15l6.15 6.15zm-4.77 4.77L8.54 33.3a5.5 5.5 0 006.15 6.15zm-.02-30.52l4.75 9.43c.25.5-.11 1.1-.67 1.1H9.26a.76.76 0 01-.67-1.1l4.75-9.43a.75.75 0 011.33 0zM38.7 30.8c.52.27.8.77.8 1.27v3.88c0 .5-.28 1-.8 1.27l-3.9 2.09c-.5.27-1.1.27-1.6 0l-3.9-2.09c-.52-.27-.8-.77-.8-1.27v-3.88c0-.5.28-1 .8-1.27l3.9-2.09c.5-.27 1.1-.27 1.6 0l3.9 2.09zm-21.8-23a3.24 3.24 0 00-5.8 0l-4.74 9.44A3.28 3.28 0 009.26 22h9.49c2.43 0 4-2.59 2.9-4.77L16.9 7.8zM31 6a5 5 0 00-5 5v6a5 5 0 005 5h6a5 5 0 005-5v-6a5 5 0 00-5-5h-6zm-9 28a8 8 0 11-16 0 8 8 0 0116 0zm13.99-7.5a4.22 4.22 0 00-3.98 0l-3.9 2.08A3.95 3.95 0 0026 32.06v3.88c0 1.45.81 2.78 2.12 3.48l3.9 2.08c1.23.67 2.73.67 3.97 0l3.9-2.08A3.95 3.95 0 0042 35.94v-3.88c0-1.45-.81-2.78-2.12-3.48l-3.9-2.08z" fill={primaryFill} /></svg>;
}

const Diversity48Regular = wrapIcon(rawSvg({}), 'Diversity48Regular');
export default Diversity48Regular;
      
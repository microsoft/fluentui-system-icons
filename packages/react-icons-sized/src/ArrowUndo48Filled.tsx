import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5.5a1.5 1.5 0 113 0v11.48l7.9-8.06c5.57-6.3 14.95-6.16 19.93-.67 5 5.52 3.38 13.31.03 17.23h-.01l-2.26 2.55-2.54 2.54-4.24 4.16-8.25 8.33-.5.5a1.5 1.5 0 11-2.12-2.12l.5-.5 8.25-8.34 4.25-4.17 2.47-2.46 2.18-2.46c2.63-3.09 3.74-9.14.02-13.24-3.74-4.12-11.05-4.37-15.49.67l-.02.03L12.22 19H23.5a1.5 1.5 0 110 3h-15A1.5 1.5 0 017 20.5v-15z" fill={primaryFill} /></svg>;
}

const ArrowUndo48Filled = wrapIcon(rawSvg({}), 'ArrowUndo48Filled');
export default ArrowUndo48Filled;
      
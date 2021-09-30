import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.1 2.99a.5.5 0 00-.2-.98l-4.5 1a.5.5 0 00-.38.37l-.29 1.12H4.5A.5.5 0 004 5v3.5A2.5 2.5 0 006.5 11H7v.5a3 3 0 002.5 2.96V17h-2a.5.5 0 000 1h5a.5.5 0 100-1h-2v-2.54A3 3 0 0013 11.5V11h.5A2.5 2.5 0 0016 8.5V5a.5.5 0 00-.5-.5h-3.73l.14-.58 4.2-.93zM10.49 5.5L10.11 7H5V5.5h5.48zM5 8h4.86l-.84 3.38a.5.5 0 00.97.24l.9-3.62H15v.5c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 00-.5.5v1a2 2 0 11-4 0v-1a.5.5 0 00-.5-.5h-1A1.5 1.5 0 015 8.5V8zm10-1h-3.86l.38-1.5H15V7z" fill={primaryFill} /></svg>;
}

const DrinkMargarita20Regular = wrapIcon(rawSvg({}), 'DrinkMargarita20Regular');
export default DrinkMargarita20Regular;
      
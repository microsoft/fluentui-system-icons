import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 8c0 1.78-.77 3.37-2 4.47v5.03a.5.5 0 01-.75.43L10 16.08l-3.25 1.85A.5.5 0 016 17.5v-5.03A5.98 5.98 0 0110 2a6 6 0 016 6zm-6 6c-1.1 0-2.12-.3-3-.8v3.44l2.75-1.57a.5.5 0 01.5 0L13 16.64V13.2c-.88.5-1.9.8-3 .8zm0-1a5 5 0 100-10 5 5 0 000 10z" fill={primaryFill} /></svg>;
}

const Ribbon20Regular = wrapIcon(rawSvg({}), 'Ribbon20Regular');
export default Ribbon20Regular;
      
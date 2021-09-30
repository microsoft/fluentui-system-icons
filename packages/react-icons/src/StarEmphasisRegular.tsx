import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z" fill={primaryFill} /><path d="M4.39 12.69a.5.5 0 01-.08.7l-2.5 2a.5.5 0 11-.62-.78l2.5-2a.5.5 0 01.7.08z" fill={primaryFill} /><path d="M4.31 5.1a.5.5 0 01-.62.79l-2.5-2a.5.5 0 11.62-.78l2.5 2z" fill={primaryFill} /><path d="M15.61 12.69a.5.5 0 00.08.7l2.5 2a.5.5 0 10.62-.78l-2.5-2a.5.5 0 00-.7.08z" fill={primaryFill} /><path d="M15.69 5.1a.5.5 0 00.62.79l2.5-2a.5.5 0 10-.62-.78l-2.5 2z" fill={primaryFill} /></svg>;
}

const StarEmphasisRegular = wrapIcon(rawSvg({}), 'StarEmphasisRegular');
export default StarEmphasisRegular;
      
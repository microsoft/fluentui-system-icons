import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 6.5a1 1 0 100-2 1 1 0 000 2zM9.2 2.59A2 2 0 0110.63 2h4.45a2 2 0 012 2v4.37a2 2 0 01-.59 1.43l-5.82 5.76a2 2 0 01-2.82-.01l-4.38-4.39a2 2 0 010-2.82L9.2 2.59zm1.42.41a1 1 0 00-.7.3L4.15 9.03a1 1 0 000 1.42l4.39 4.38a1 1 0 001.4 0l5.83-5.76a1 1 0 00.3-.7V4a1 1 0 00-1-1h-4.46zM3 11.8a2 2 0 00.46 2.11l2.97 2.98a4 4 0 005.65.02l4.4-4.36a2 2 0 00.6-1.43v-.57l-5 4.96-.15.13-.56.55a3 3 0 01-4.23 0l-.5-.5a4.05 4.05 0 01-.2-.2l-2.98-2.98A2 2 0 013 11.8z" fill={primaryFill} /></svg>;
}

const TagMultipleRegular = wrapIcon(rawSvg({}), 'TagMultipleRegular');
export default TagMultipleRegular;
      
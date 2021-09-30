import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 3.75a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0V6.5H8A.75.75 0 108 5h-.25V3.75zm14.25 0a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0V6.5h.25a.75.75 0 000-1.5H22V3.75zM14.25 3c.41 0 .75.34.75.75V5h.25a.75.75 0 010 1.5H15v4.75a.75.75 0 01-1.5 0v-7.5c0-.41.34-.75.75-.75zM1 4.75c0-.41.34-.75.75-.75h3a.75.75 0 01.75.75c0 1.69-.84 4.28-3.45 5.44a.75.75 0 11-.6-1.38A4.37 4.37 0 003.93 5.5H1.75A.75.75 0 011 4.75zm10.97-.02a.75.75 0 00-1.44-.46l-1.5 4.75a.75.75 0 00.87.97l2.5-.5A.75.75 0 0012.1 8l-1.25.26 1.12-3.54zm4.53.04c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5H18v2.77l1.07-.27a.75.75 0 01.36 1.46l-2 .5a.75.75 0 01-.93-.73V4.77zm-5.3 13.37l-1.92-1.92a.75.75 0 00-1.06 1.06l2.5 2.5c.31.31.82.29 1.1-.05l5-6a.75.75 0 00-1.15-.96l-4.47 5.37z" fill={primaryFill} /></svg>;
}

const TextProofingToolsGaNaDa24Regular = wrapIcon(rawSvg({}), 'TextProofingToolsGaNaDa24Regular');
export default TextProofingToolsGaNaDa24Regular;
      
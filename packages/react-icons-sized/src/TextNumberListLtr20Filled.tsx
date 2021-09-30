import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1.5a.5.5 0 00-.39-.49.5.5 0 00-.56.27l-.07.12a2.96 2.96 0 01-1.2 1.15.5.5 0 10.44.9c.3-.15.56-.34.78-.53V5.5a.5.5 0 001 0v-4z" fill={primaryFill} /><path d="M8.75 4a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /><path d="M8.75 9a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /><path d="M8 14.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M2.65 7.65a.5.5 0 00.7.7l.05-.04.2-.12C3.76 8.09 4 8 4.3 8c.23 0 .41.06.53.15.1.07.16.17.16.35a.5.5 0 01-.21.44c-.15.12-.35.22-.62.35l-.14.08c-.32.15-.7.36-1 .7-.33.35-.53.81-.53 1.43 0 .28.22.5.5.5h2.5a.5.5 0 000-1H3.59c.04-.1.1-.2.17-.27.17-.18.4-.31.71-.47l.13-.06c.26-.13.58-.29.83-.5.33-.27.57-.65.57-1.2 0-.5-.22-.9-.57-1.15A1.92 1.92 0 004.33 7h-.01a2.5 2.5 0 00-1.66.63v.01h-.01zm.01-.02l-.01.02s.1-.1.01-.02z" fill={primaryFill} /><path d="M3.75 15.5c0-.28.22-.5.5-.5.34 0 .53-.1.63-.18.1-.09.13-.2.13-.3-.01-.2-.19-.52-.76-.52-.41 0-.63.1-.72.17a.41.41 0 00-.1.07.5.5 0 01-.88-.46v-.01l.02-.02a.85.85 0 01.1-.15c.07-.08.17-.17.3-.27.28-.18.7-.33 1.28-.33 1.03 0 1.73.67 1.76 1.48.01.37-.12.74-.4 1.02.28.28.41.65.4 1.02-.03.8-.73 1.48-1.76 1.48-.59 0-1-.15-1.28-.33a1.4 1.4 0 01-.4-.42l-.01-.01v-.01a.5.5 0 01.87-.48l.1.08c.1.07.3.17.72.17.57 0 .75-.33.76-.52 0-.1-.04-.21-.13-.3-.1-.08-.29-.18-.63-.18a.5.5 0 01-.5-.5zm-.32-1.25l.02-.03v.01l-.01.01v.01z" fill={primaryFill} /></svg>;
}

const TextNumberListLtr20Filled = wrapIcon(rawSvg({}), 'TextNumberListLtr20Filled');
export default TextNumberListLtr20Filled;
      
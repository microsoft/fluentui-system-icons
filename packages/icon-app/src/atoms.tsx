import * as React from 'react'

import {MeetNowRegular} from '@fluentui/react-icons/fonts/meet-now'
import {MeetNowRegular as MeetNowRegularFont} from '@fluentui/react-icons/fonts/meet-now'
import {EmojiSmileSlightRegular} from '@fluentui/react-icons/svg/emoji-smile-slight'
import {EmojiSmileSlightRegular as EmojiSmileSlightRegularFont} from '@fluentui/react-icons/fonts/emoji-smile-slight'

import { IconCell } from './shared';

export function Atoms(){
    return (<>
        <IconCell
            FontIcon={EmojiSmileSlightRegularFont}
            SvgIcon={EmojiSmileSlightRegular}
            name="Atoms"
        />
        <IconCell
            FontIcon={MeetNowRegularFont}
            SvgIcon={MeetNowRegular}
            name="Atoms"
        />
        </>
    );
}
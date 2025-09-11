import * as React from 'react'

import {MeetNowRegular} from '@fluentui/react-icons/fonts/meet-now-regular'
import {MeetNowRegular as MeetNowRegularFont} from '@fluentui/react-icons/fonts/meet-now-regular'
import {EmojiSmileSlightRegular} from '@fluentui/react-icons/svg/emoji-smile-slight-regular'
import {EmojiSmileSlightRegular as EmojiSmileSlightRegularFont} from '@fluentui/react-icons/fonts/emoji-smile-slight-regular'

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
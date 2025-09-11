import * as React from 'react'

import {MeetNowRegular,EmojiSmileSlightRegular} from '@fluentui/react-icons'
import {MeetNowRegular as MeetNowRegularFont,EmojiSmileSlightRegular as EmojiSmileSlightRegularFont} from '@fluentui/react-icons/fonts'

import { IconCell } from './shared';

export function Chunk(){
    return (<>
        <IconCell
            FontIcon={EmojiSmileSlightRegularFont}
            SvgIcon={EmojiSmileSlightRegular}
            name="Chunk"
        />
        <IconCell
            FontIcon={MeetNowRegularFont}
            SvgIcon={MeetNowRegular}
            name="Chunk"
        />
        </>
    );
}
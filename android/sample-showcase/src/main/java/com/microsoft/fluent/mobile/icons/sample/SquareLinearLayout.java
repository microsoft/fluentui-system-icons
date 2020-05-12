/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT license.
 */
 
package com.microsoft.fluent.mobile.icons.sample;

import android.content.Context;
import androidx.annotation.Nullable;
import android.util.AttributeSet;
import android.widget.LinearLayout;

public class SquareLinearLayout extends LinearLayout {

    private boolean mIsSquareMode;

    public SquareLinearLayout(Context context) {
        super(context);
    }

    public SquareLinearLayout(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public SquareLinearLayout(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        if (mIsSquareMode) {
            super.onMeasure(widthMeasureSpec, widthMeasureSpec);
            setBackgroundResource(R.drawable.item_background_circular);
        } else {
            super.onMeasure(widthMeasureSpec, heightMeasureSpec);
            setBackgroundResource(R.drawable.item_background);
        }
    }

    public void setSquareMode(boolean isSquareMode) {
        mIsSquareMode = isSquareMode;
        requestLayout();
    }
}

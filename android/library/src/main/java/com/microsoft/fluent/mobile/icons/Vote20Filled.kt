package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Vote20: ImageVector
  get() {
    if (_vote20 != null) {
      return _vote20!!
    }
    _vote20 = fluentIcon(name = "Filled.Vote20", 20f) {
      materialPath {
          moveTo(13.5F, 9.0F)
          horizontalLineToRelative(-1.268F)
          lineToRelative(1.732F, -3.0F)
          curveToRelative(0.276F, -0.478F, 0.112F, -1.09F, -0.366F, -1.366F)
          lineTo(11.0F, 3.134F)
          curveTo(10.522F, 2.858F, 9.91F, 3.022F, 9.634F, 3.5F)
          lineToRelative(-2.5F, 4.33F)
          curveTo(6.912F, 8.215F, 6.974F, 8.687F, 7.257F, 9.0F)
          horizontalLineTo(6.5F)
          curveTo(6.224F, 9.0F, 6.0F, 9.224F, 6.0F, 9.5F)
          reflectiveCurveTo(6.224F, 10.0F, 6.5F, 10.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 9.0F, 13.5F, 9.0F)
          close()
          moveToRelative(-3.0F, -5.0F)
          lineToRelative(2.598F, 1.5F)
          lineToRelative(-2.02F, 3.5F)
          horizontalLineTo(9.16F)
          lineTo(8.0F, 8.33F)
          lineTo(10.5F, 4.0F)
          close()
          moveToRelative(4.037F, 3.0F)
          lineTo(13.96F, 8.0F)
          horizontalLineToRelative(0.54F)
          lineToRelative(2.25F, 3.0F)
          horizontalLineTo(3.25F)
          lineTo(5.5F, 8.0F)
          horizontalLineToRelative(0.406F)
          curveToRelative(0.02F, -0.058F, 0.046F, -0.115F, 0.078F, -0.17F)
          lineTo(6.464F, 7.0F)
          horizontalLineTo(5.5F)
          curveTo(5.185F, 7.0F, 4.889F, 7.148F, 4.7F, 7.4F)
          lineToRelative(-2.5F, 3.333F)
          curveToRelative(-0.13F, 0.173F, -0.2F, 0.384F, -0.2F, 0.6F)
          verticalLineTo(16.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-4.667F)
          curveToRelative(0.0F, -0.216F, -0.07F, -0.427F, -0.2F, -0.6F)
          lineTo(15.3F, 7.4F)
          curveToRelative(-0.182F, -0.242F, -0.462F, -0.388F, -0.763F, -0.4F)
          close()        
      }
    }
    return _vote20!!
  }

private var _vote20: ImageVector? = null

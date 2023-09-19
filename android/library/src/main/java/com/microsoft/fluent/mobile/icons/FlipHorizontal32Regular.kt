package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipHorizontal32: ImageVector
  get() {
    if (_flipHorizontal32 != null) {
      return _flipHorizontal32!!
    }
    _flipHorizontal32 = fluentIcon(name = "Regular.FlipHorizontal32", 32f) {
      materialPath {
          moveTo(29.842F, 27.54F)
          curveTo(29.658F, 27.827F, 29.34F, 28.0F, 29.0F, 28.0F)
          horizontalLineTo(18.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.47F, 0.328F, -0.877F, 0.787F, -0.977F)
          curveToRelative(0.46F, -0.1F, 0.926F, 0.133F, 1.122F, 0.56F)
          lineToRelative(11.0F, 24.0F)
          curveToRelative(0.142F, 0.31F, 0.117F, 0.67F, -0.067F, 0.957F)
          close()
          moveTo(19.0F, 7.582F)
          verticalLineTo(26.0F)
          horizontalLineToRelative(8.442F)
          lineTo(19.0F, 7.582F)
          close()
          moveTo(3.0F, 28.0F)
          curveToRelative(-0.34F, 0.0F, -0.658F, -0.173F, -0.842F, -0.46F)
          curveToRelative(-0.183F, -0.287F, -0.209F, -0.647F, -0.067F, -0.957F)
          lineToRelative(11.0F, -24.0F)
          curveToRelative(0.196F, -0.427F, 0.663F, -0.66F, 1.122F, -0.56F)
          curveTo(14.673F, 2.123F, 15.0F, 2.53F, 15.0F, 3.0F)
          verticalLineToRelative(24.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _flipHorizontal32!!
  }

private var _flipHorizontal32: ImageVector? = null

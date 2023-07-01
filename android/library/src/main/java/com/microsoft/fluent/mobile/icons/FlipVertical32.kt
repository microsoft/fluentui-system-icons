package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipVertical32: ImageVector
  get() {
    if (_flipVertical32 != null) {
      return _flipVertical32!!
    }
    _flipVertical32 = fluentIcon(name = "Regular.FlipVertical32", 32f) {
      materialPath {
          moveTo(27.54F, 2.158F)
          curveTo(27.827F, 2.342F, 28.0F, 2.66F, 28.0F, 3.0F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.47F, 0.0F, -0.877F, -0.328F, -0.977F, -0.787F)
          curveToRelative(-0.1F, -0.46F, 0.133F, -0.926F, 0.56F, -1.122F)
          lineToRelative(24.0F, -11.0F)
          curveToRelative(0.31F, -0.142F, 0.67F, -0.117F, 0.957F, 0.067F)
          close()
          moveTo(7.582F, 13.0F)
          horizontalLineTo(26.0F)
          verticalLineTo(4.558F)
          lineTo(7.582F, 13.0F)
          close()
          moveTo(28.0F, 29.0F)
          curveToRelative(0.0F, 0.34F, -0.173F, 0.658F, -0.46F, 0.842F)
          curveToRelative(-0.287F, 0.184F, -0.647F, 0.209F, -0.957F, 0.067F)
          lineToRelative(-24.0F, -11.0F)
          curveToRelative(-0.427F, -0.196F, -0.66F, -0.663F, -0.56F, -1.122F)
          curveTo(2.123F, 17.327F, 2.53F, 17.0F, 3.0F, 17.0F)
          horizontalLineToRelative(24.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(11.0F)
          close()        
      }
    }
    return _flipVertical32!!
  }

private var _flipVertical32: ImageVector? = null

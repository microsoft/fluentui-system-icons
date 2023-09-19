package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRedo16: ImageVector
  get() {
    if (_arrowRedo16 != null) {
      return _arrowRedo16!!
    }
    _arrowRedo16 = fluentIcon(name = "Regular.ArrowRedo16", 16f) {
      materialPath {
          moveTo(13.0F, 2.5F)
          curveTo(13.0F, 2.224F, 12.775F, 2.0F, 12.5F, 2.0F)
          curveTo(12.223F, 2.0F, 12.0F, 2.224F, 12.0F, 2.5F)
          verticalLineToRelative(3.843F)
          lineTo(8.827F, 3.172F)
          curveToRelative(-1.562F, -1.563F, -4.094F, -1.563F, -5.656F, 0.0F)
          curveToRelative(-1.563F, 1.562F, -1.563F, 4.094F, 0.0F, 5.656F)
          lineToRelative(5.025F, 5.026F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(3.879F, 8.121F)
          curveToRelative(-1.172F, -1.171F, -1.172F, -3.07F, 0.0F, -4.242F)
          curveToRelative(1.171F, -1.172F, 3.07F, -1.172F, 4.242F, 0.0F)
          lineTo(11.243F, 7.0F)
          horizontalLineTo(7.499F)
          curveTo(7.224F, 7.0F, 7.0F, 7.224F, 7.0F, 7.5F)
          reflectiveCurveTo(7.224F, 8.0F, 7.5F, 8.0F)
          horizontalLineToRelative(4.9F)
          curveTo(12.732F, 8.0F, 13.0F, 7.731F, 13.0F, 7.4F)
          verticalLineTo(2.5F)
          close()        
      }
    }
    return _arrowRedo16!!
  }

private var _arrowRedo16: ImageVector? = null

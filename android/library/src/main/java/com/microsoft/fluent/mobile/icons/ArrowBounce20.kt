package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowBounce20: ImageVector
  get() {
    if (_arrowBounce20 != null) {
      return _arrowBounce20!!
    }
    _arrowBounce20 = fluentIcon(name = "Regular.ArrowBounce20", 20f) {
      materialPath {
          moveTo(2.5F, 6.0F)
          curveTo(2.224F, 6.0F, 2.0F, 6.224F, 2.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 13.776F, 2.224F, 14.0F, 2.5F, 14.0F)
          reflectiveCurveTo(3.0F, 13.776F, 3.0F, 13.5F)
          verticalLineTo(7.707F)
          lineToRelative(7.146F, 7.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(7.0F, -7.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(10.5F, 13.793F)
          lineTo(3.707F, 7.0F)
          horizontalLineTo(9.5F)
          curveTo(9.776F, 7.0F, 10.0F, 6.776F, 10.0F, 6.5F)
          reflectiveCurveTo(9.776F, 6.0F, 9.5F, 6.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _arrowBounce20!!
  }

private var _arrowBounce20: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowBounce16: ImageVector
  get() {
    if (_arrowBounce16 != null) {
      return _arrowBounce16!!
    }
    _arrowBounce16 = fluentIcon(name = "Regular.ArrowBounce16", 16f) {
      materialPath {
          moveTo(8.0F, 4.5F)
          curveTo(8.0F, 4.224F, 7.776F, 4.0F, 7.5F, 4.0F)
          horizontalLineToRelative(-6.0F)
          curveTo(1.224F, 4.0F, 1.0F, 4.224F, 1.0F, 4.5F)
          verticalLineToRelative(6.0F)
          curveTo(1.0F, 10.776F, 1.224F, 11.0F, 1.5F, 11.0F)
          reflectiveCurveTo(2.0F, 10.776F, 2.0F, 10.5F)
          verticalLineTo(5.707F)
          lineToRelative(6.397F, 6.397F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(5.75F, -5.75F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineTo(8.75F, 11.043F)
          lineTo(2.707F, 5.0F)
          horizontalLineTo(7.5F)
          curveTo(7.776F, 5.0F, 8.0F, 4.776F, 8.0F, 4.5F)
          close()        
      }
    }
    return _arrowBounce16!!
  }

private var _arrowBounce16: ImageVector? = null

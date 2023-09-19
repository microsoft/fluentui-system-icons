package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowPrevious12: ImageVector
  get() {
    if (_arrowPrevious12 != null) {
      return _arrowPrevious12!!
    }
    _arrowPrevious12 = fluentIcon(name = "Regular.ArrowPrevious12", 12f) {
      materialPath {
          moveTo(6.207F, 6.0F)
          lineToRelative(3.147F, -3.147F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(6.207F, 6.0F)
          close()
          moveTo(3.0F, 2.5F)
          curveTo(3.0F, 2.224F, 2.776F, 2.0F, 2.5F, 2.0F)
          reflectiveCurveTo(2.0F, 2.224F, 2.0F, 2.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 9.776F, 2.224F, 10.0F, 2.5F, 10.0F)
          reflectiveCurveTo(3.0F, 9.776F, 3.0F, 9.5F)
          verticalLineToRelative(-7.0F)
          close()        
      }
    }
    return _arrowPrevious12!!
  }

private var _arrowPrevious12: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowNext12: ImageVector
  get() {
    if (_arrowNext12 != null) {
      return _arrowNext12!!
    }
    _arrowNext12 = fluentIcon(name = "Regular.ArrowNext12", 12f) {
      materialPath {
          moveTo(2.647F, 2.853F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.511F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(5.793F, 6.0F)
          lineTo(2.646F, 2.853F)
          close()
          moveTo(10.0F, 2.5F)
          curveTo(10.0F, 2.224F, 9.776F, 2.0F, 9.5F, 2.0F)
          reflectiveCurveTo(9.0F, 2.224F, 9.0F, 2.5F)
          verticalLineToRelative(7.0F)
          curveTo(9.0F, 9.776F, 9.224F, 10.0F, 9.5F, 10.0F)
          reflectiveCurveTo(10.0F, 9.776F, 10.0F, 9.5F)
          verticalLineToRelative(-7.0F)
          close()        
      }
    }
    return _arrowNext12!!
  }

private var _arrowNext12: ImageVector? = null

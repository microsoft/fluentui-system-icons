package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDown12: ImageVector
  get() {
    if (_arrowDown12 != null) {
      return _arrowDown12!!
    }
    _arrowDown12 = fluentIcon(name = "Regular.ArrowDown12", 12f) {
      materialPath {
          moveTo(6.0F, 1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(6.793F)
          lineToRelative(2.646F, -2.646F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.707F, 0.0F)
          curveToRelative(0.196F, 0.195F, 0.196F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(5.5F, 8.793F)
          verticalLineTo(2.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _arrowDown12!!
  }

private var _arrowDown12: ImageVector? = null

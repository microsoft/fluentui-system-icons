package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUp12: ImageVector
  get() {
    if (_arrowUp12 != null) {
      return _arrowUp12!!
    }
    _arrowUp12 = fluentIcon(name = "Regular.ArrowUp12", 12f) {
      materialPath {
          moveTo(6.0F, 10.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(3.207F)
          lineToRelative(2.646F, 2.647F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(5.5F, 3.207F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          close()        
      }
    }
    return _arrowUp12!!
  }

private var _arrowUp12: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCurveDownLeft16: ImageVector
  get() {
    if (_arrowCurveDownLeft16 != null) {
      return _arrowCurveDownLeft16!!
    }
    _arrowCurveDownLeft16 = fluentIcon(name = "Regular.ArrowCurveDownLeft16", 16f) {
      materialPath {
          moveTo(10.934F, 1.252F)
          curveToRelative(0.137F, 0.24F, 0.054F, 0.545F, -0.186F, 0.682F)
          curveTo(8.213F, 3.383F, 8.0F, 6.002F, 8.0F, 8.0F)
          verticalLineToRelative(5.293F)
          lineToRelative(2.646F, -2.646F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-3.5F, 3.5F)
          curveTo(7.76F, 14.947F, 7.633F, 15.0F, 7.5F, 15.0F)
          curveToRelative(-0.133F, 0.0F, -0.26F, -0.053F, -0.354F, -0.146F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineTo(7.0F, 13.293F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -2.002F, 0.187F, -5.183F, 3.252F, -6.934F)
          curveToRelative(0.24F, -0.137F, 0.545F, -0.054F, 0.682F, 0.186F)
          close()        
      }
    }
    return _arrowCurveDownLeft16!!
  }

private var _arrowCurveDownLeft16: ImageVector? = null

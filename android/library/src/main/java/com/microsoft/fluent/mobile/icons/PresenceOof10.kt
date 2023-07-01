package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceOof10: ImageVector
  get() {
    if (_presenceOof10 != null) {
      return _presenceOof10!!
    }
    _presenceOof10 = fluentIcon(name = "Regular.PresenceOof10", 10f) {
      materialPath {
          moveTo(5.349F, 3.85F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.706F)
          curveToRelative(-0.196F, -0.195F, -0.513F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-1.497F, 1.5F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(1.497F, 1.5F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.196F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.195F, 0.196F, -0.511F, 0.0F, -0.707F)
          lineTo(4.704F, 5.498F)
          horizontalLineToRelative(1.8F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -0.277F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-1.8F)
          lineTo(5.35F, 3.85F)
          close()
          moveTo(4.998F, 0.0F)
          curveTo(2.238F, 0.0F, 0.0F, 2.237F, 0.0F, 4.998F)
          curveToRelative(0.0F, 2.76F, 2.237F, 4.997F, 4.998F, 4.997F)
          curveToRelative(2.76F, 0.0F, 4.997F, -2.237F, 4.997F, -4.997F)
          reflectiveCurveTo(7.758F, 0.0F, 4.998F, 0.0F)
          close()
          moveTo(1.0F, 4.998F)
          curveTo(1.0F, 2.79F, 2.79F, 1.0F, 4.998F, 1.0F)
          reflectiveCurveToRelative(3.997F, 1.79F, 3.997F, 3.998F)
          reflectiveCurveToRelative(-1.79F, 3.997F, -3.997F, 3.997F)
          curveTo(2.79F, 8.995F, 1.0F, 7.205F, 1.0F, 4.998F)
          close()        
      }
    }
    return _presenceOof10!!
  }

private var _presenceOof10: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceAvailable10: ImageVector
  get() {
    if (_presenceAvailable10 != null) {
      return _presenceAvailable10!!
    }
    _presenceAvailable10 = fluentIcon(name = "Regular.PresenceAvailable10", 10f) {
      materialPath {
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
          moveToRelative(6.104F, -1.602F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.25F, 2.25F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.0F, -1.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(4.5F, 5.293F)
          lineToRelative(1.896F, -1.897F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _presenceAvailable10!!
  }

private var _presenceAvailable10: ImageVector? = null

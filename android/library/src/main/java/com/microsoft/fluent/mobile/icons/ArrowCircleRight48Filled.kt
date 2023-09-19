package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleRight48: ImageVector
  get() {
    if (_arrowCircleRight48 != null) {
      return _arrowCircleRight48!!
    }
    _arrowCircleRight48 = fluentIcon(name = "Filled.ArrowCircleRight48", 48f) {
      materialPath {
          moveTo(4.0F, 24.0F)
          curveTo(4.0F, 12.954F, 12.954F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(20.0F, 8.954F, 20.0F, 20.0F)
          reflectiveCurveToRelative(-8.954F, 20.0F, -20.0F, 20.0F)
          reflectiveCurveTo(4.0F, 35.046F, 4.0F, 24.0F)
          close()
          moveToRelative(19.866F, -8.634F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(5.616F, 5.616F)
          horizontalLineTo(15.25F)
          curveTo(14.56F, 22.75F, 14.0F, 23.31F, 14.0F, 24.0F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(14.232F)
          lineToRelative(-5.616F, 5.616F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(1.28F, 0.488F, 1.768F, 0.0F)
          lineToRelative(7.75F, -7.75F)
          curveToRelative(0.488F, -0.488F, 0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-7.75F, -7.75F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          close()        
      }
    }
    return _arrowCircleRight48!!
  }

private var _arrowCircleRight48: ImageVector? = null

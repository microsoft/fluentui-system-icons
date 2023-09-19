package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleRight48: ImageVector
  get() {
    if (_arrowCircleRight48 != null) {
      return _arrowCircleRight48!!
    }
    _arrowCircleRight48 = fluentIcon(name = "Regular.ArrowCircleRight48", 48f) {
      materialPath {
          moveTo(23.866F, 15.366F)
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
          moveTo(24.0F, 4.0F)
          curveTo(12.954F, 4.0F, 4.0F, 12.954F, 4.0F, 24.0F)
          reflectiveCurveToRelative(8.954F, 20.0F, 20.0F, 20.0F)
          reflectiveCurveToRelative(20.0F, -8.954F, 20.0F, -20.0F)
          reflectiveCurveTo(35.046F, 4.0F, 24.0F, 4.0F)
          close()
          moveTo(6.5F, 24.0F)
          curveToRelative(0.0F, -9.665F, 7.835F, -17.5F, 17.5F, -17.5F)
          reflectiveCurveTo(41.5F, 14.335F, 41.5F, 24.0F)
          reflectiveCurveTo(33.665F, 41.5F, 24.0F, 41.5F)
          reflectiveCurveTo(6.5F, 33.665F, 6.5F, 24.0F)
          close()        
      }
    }
    return _arrowCircleRight48!!
  }

private var _arrowCircleRight48: ImageVector? = null

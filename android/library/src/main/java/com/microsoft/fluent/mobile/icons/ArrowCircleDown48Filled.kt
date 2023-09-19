package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleDown48: ImageVector
  get() {
    if (_arrowCircleDown48 != null) {
      return _arrowCircleDown48!!
    }
    _arrowCircleDown48 = fluentIcon(name = "Filled.ArrowCircleDown48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveTo(12.954F, 4.0F, 4.0F, 12.954F, 4.0F, 24.0F)
          reflectiveCurveToRelative(8.954F, 20.0F, 20.0F, 20.0F)
          reflectiveCurveToRelative(20.0F, -8.954F, 20.0F, -20.0F)
          reflectiveCurveTo(35.046F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(-8.634F, 19.866F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          lineToRelative(5.616F, 5.616F)
          verticalLineTo(15.25F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(14.232F)
          lineToRelative(5.616F, -5.616F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(-7.75F, 7.75F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          lineToRelative(-7.75F, -7.75F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          close()        
      }
    }
    return _arrowCircleDown48!!
  }

private var _arrowCircleDown48: ImageVector? = null

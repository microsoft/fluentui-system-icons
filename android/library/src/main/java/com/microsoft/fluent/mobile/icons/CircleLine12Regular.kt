package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleLine12: ImageVector
  get() {
    if (_circleLine12 != null) {
      return _circleLine12!!
    }
    _circleLine12 = fluentIcon(name = "Regular.CircleLine12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveTo(3.239F, 1.0F, 1.0F, 3.239F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(0.126F, 1.0F)
          horizontalLineToRelative(7.748F)
          curveTo(9.43F, 8.725F, 7.864F, 10.0F, 6.0F, 10.0F)
          curveToRelative(-1.864F, 0.0F, -3.43F, -1.275F, -3.874F, -3.0F)
          close()        
      }
    }
    return _circleLine12!!
  }

private var _circleLine12: ImageVector? = null

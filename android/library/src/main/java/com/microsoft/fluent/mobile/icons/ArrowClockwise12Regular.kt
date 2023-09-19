package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowClockwise12: ImageVector
  get() {
    if (_arrowClockwise12 != null) {
      return _arrowClockwise12!!
    }
    _arrowClockwise12 = fluentIcon(name = "Regular.ArrowClockwise12", 12f) {
      materialPath {
          moveTo(8.966F, 6.453F)
          curveTo(9.004F, 6.205F, 9.204F, 6.0F, 9.455F, 6.0F)
          curveToRelative(0.3F, 0.0F, 0.549F, 0.246F, 0.508F, 0.544F)
          curveTo(9.698F, 8.496F, 8.025F, 10.0F, 6.0F, 10.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          curveToRelative(1.195F, 0.0F, 2.267F, 0.524F, 3.0F, 1.354F)
          verticalLineTo(2.5F)
          curveTo(9.0F, 2.224F, 9.224F, 2.0F, 9.5F, 2.0F)
          reflectiveCurveTo(10.0F, 2.224F, 10.0F, 2.5F)
          verticalLineToRelative(2.0F)
          curveTo(10.0F, 4.776F, 9.776F, 5.0F, 9.5F, 5.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(7.224F, 5.0F, 7.0F, 4.776F, 7.0F, 4.5F)
          reflectiveCurveTo(7.224F, 4.0F, 7.5F, 4.0F)
          horizontalLineToRelative(0.736F)
          curveTo(7.686F, 3.386F, 6.888F, 3.0F, 6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          curveToRelative(1.503F, 0.0F, 2.748F, -1.105F, 2.966F, -2.547F)
          close()        
      }
    }
    return _arrowClockwise12!!
  }

private var _arrowClockwise12: ImageVector? = null

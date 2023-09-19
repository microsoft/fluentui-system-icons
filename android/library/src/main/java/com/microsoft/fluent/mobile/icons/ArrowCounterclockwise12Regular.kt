package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCounterclockwise12: ImageVector
  get() {
    if (_arrowCounterclockwise12 != null) {
      return _arrowCounterclockwise12!!
    }
    _arrowCounterclockwise12 = fluentIcon(name = "Regular.ArrowCounterclockwise12", 12f) {
      materialPath {
          moveTo(2.0F, 2.5F)
          curveTo(2.0F, 2.224F, 2.224F, 2.0F, 2.5F, 2.0F)
          reflectiveCurveTo(3.0F, 2.224F, 3.0F, 2.5F)
          verticalLineToRelative(0.854F)
          curveTo(3.733F, 2.524F, 4.805F, 2.0F, 6.0F, 2.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          curveToRelative(-2.025F, 0.0F, -3.698F, -1.504F, -3.963F, -3.456F)
          curveTo(1.997F, 6.246F, 2.244F, 6.0F, 2.545F, 6.0F)
          curveToRelative(0.252F, 0.0F, 0.451F, 0.205F, 0.489F, 0.453F)
          curveTo(3.252F, 7.895F, 4.497F, 9.0F, 6.0F, 9.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveTo(7.657F, 3.0F, 6.0F, 3.0F)
          curveTo(5.112F, 3.0F, 4.313F, 3.386F, 3.764F, 4.0F)
          horizontalLineTo(4.5F)
          curveTo(4.776F, 4.0F, 5.0F, 4.224F, 5.0F, 4.5F)
          reflectiveCurveTo(4.776F, 5.0F, 4.5F, 5.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(2.224F, 5.0F, 2.0F, 4.776F, 2.0F, 4.5F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _arrowCounterclockwise12!!
  }

private var _arrowCounterclockwise12: ImageVector? = null

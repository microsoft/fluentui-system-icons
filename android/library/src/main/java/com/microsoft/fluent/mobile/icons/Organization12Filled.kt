package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Organization12: ImageVector
  get() {
    if (_organization12 != null) {
      return _organization12!!
    }
    _organization12 = fluentIcon(name = "Filled.Organization12", 12f) {
      materialPath {
          moveTo(5.5F, 4.937F)
          curveTo(4.637F, 4.715F, 4.0F, 3.932F, 4.0F, 3.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          curveToRelative(0.0F, 0.932F, -0.637F, 1.715F, -1.5F, 1.937F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(1.063F)
          curveTo(10.363F, 8.285F, 11.0F, 9.068F, 11.0F, 10.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          curveToRelative(0.0F, -0.932F, 0.637F, -1.715F, 1.5F, -1.937F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(1.063F)
          curveTo(4.363F, 8.285F, 5.0F, 9.068F, 5.0F, 10.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          curveToRelative(0.0F, -0.932F, 0.637F, -1.715F, 1.5F, -1.937F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(4.937F)
          close()        
      }
    }
    return _organization12!!
  }

private var _organization12: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Temperature20: ImageVector
  get() {
    if (_temperature20 != null) {
      return _temperature20!!
    }
    _temperature20 = fluentIcon(name = "Regular.Temperature20", 20f) {
      materialPath {
          moveTo(10.0F, 6.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(5.063F)
          curveTo(11.363F, 12.285F, 12.0F, 13.068F, 12.0F, 14.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          curveToRelative(0.0F, -0.932F, 0.637F, -1.715F, 1.5F, -1.937F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          close()
          moveTo(10.0F, 2.0F)
          curveTo(8.343F, 2.0F, 7.0F, 3.343F, 7.0F, 5.0F)
          verticalLineToRelative(6.354F)
          curveTo(6.378F, 12.06F, 6.0F, 12.986F, 6.0F, 14.0F)
          curveToRelative(0.0F, 2.21F, 1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          curveToRelative(0.0F, -1.014F, -0.378F, -1.941F, -1.0F, -2.646F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.755F)
          lineToRelative(0.143F, 0.145F)
          curveTo(12.673F, 12.442F, 13.0F, 13.182F, 13.0F, 14.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          curveToRelative(0.0F, -0.818F, 0.326F, -1.558F, 0.857F, -2.1F)
          lineTo(8.0F, 11.755F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()        
      }
    }
    return _temperature20!!
  }

private var _temperature20: ImageVector? = null

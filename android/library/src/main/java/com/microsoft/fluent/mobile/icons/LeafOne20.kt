package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LeafOne20: ImageVector
  get() {
    if (_leafOne20 != null) {
      return _leafOne20!!
    }
    _leafOne20 = fluentIcon(name = "Regular.LeafOne20", 20f) {
      materialPath {
          moveTo(11.072F, 2.458F)
          lineToRelative(3.239F, 3.31F)
          curveToRelative(2.31F, 2.362F, 2.29F, 6.144F, -0.047F, 8.48F)
          curveToRelative(-1.05F, 1.051F, -2.391F, 1.633F, -3.764F, 1.747F)
          verticalLineToRelative(1.503F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-1.504F)
          curveTo(8.127F, 15.882F, 6.786F, 15.3F, 5.736F, 14.25F)
          curveTo(3.4F, 11.912F, 3.38F, 8.13F, 5.69F, 5.768F)
          lineToRelative(3.238F, -3.31F)
          curveToRelative(0.588F, -0.602F, 1.556F, -0.602F, 2.144F, 0.0F)
          close()
          moveTo(10.5F, 14.99F)
          curveToRelative(1.116F, -0.11F, 2.202F, -0.593F, 3.057F, -1.448F)
          curveToRelative(1.95F, -1.95F, 1.966F, -5.104F, 0.039F, -7.075F)
          lineToRelative(-3.239F, -3.31F)
          curveToRelative(-0.196F, -0.2F, -0.518F, -0.2F, -0.714F, 0.0F)
          lineToRelative(-3.239F, 3.31F)
          curveToRelative(-1.927F, 1.97F, -1.91F, 5.126F, 0.04F, 7.075F)
          curveToRelative(0.854F, 0.855F, 1.94F, 1.338F, 3.056F, 1.448F)
          verticalLineTo(9.498F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(5.492F)
          close()        
      }
    }
    return _leafOne20!!
  }

private var _leafOne20: ImageVector? = null

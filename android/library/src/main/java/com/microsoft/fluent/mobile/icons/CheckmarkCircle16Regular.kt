package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CheckmarkCircle16: ImageVector
  get() {
    if (_checkmarkCircle16 != null) {
      return _checkmarkCircle16!!
    }
    _checkmarkCircle16 = fluentIcon(name = "Regular.CheckmarkCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveTo(7.25F, 9.042F)
          lineToRelative(2.87F, -2.878F)
          curveToRelative(0.195F, -0.196F, 0.512F, -0.196F, 0.707F, -0.001F)
          curveToRelative(0.174F, 0.173F, 0.194F, 0.443F, 0.06F, 0.638F)
          lineToRelative(-0.059F, 0.07F)
          lineToRelative(-3.224F, 3.232F)
          curveToRelative(-0.173F, 0.174F, -0.443F, 0.194F, -0.638F, 0.059F)
          lineToRelative(-0.07F, -0.058F)
          lineToRelative(-1.75F, -1.75F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveTo(5.32F, 7.472F, 5.59F, 7.454F, 5.784F, 7.588F)
          lineToRelative(0.07F, 0.057F)
          lineTo(7.25F, 9.043F)
          lineToRelative(2.87F, -2.878F)
          lineToRelative(-2.87F, 2.878F)
          close()        
      }
    }
    return _checkmarkCircle16!!
  }

private var _checkmarkCircle16: ImageVector? = null

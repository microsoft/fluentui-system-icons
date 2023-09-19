package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mic28: ImageVector
  get() {
    if (_mic28 != null) {
      return _mic28!!
    }
    _mic28 = fluentIcon(name = "Filled.Mic28", 28f) {
      materialPath {
          moveTo(14.0F, 2.0F)
          curveToRelative(-2.485F, 0.0F, -4.5F, 2.015F, -4.5F, 4.5F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-8.0F)
          curveTo(18.5F, 4.015F, 16.485F, 2.0F, 14.0F, 2.0F)
          close()
          moveTo(7.5F, 13.75F)
          curveTo(7.5F, 13.337F, 7.164F, 13.0F, 6.75F, 13.0F)
          reflectiveCurveTo(6.0F, 13.338F, 6.0F, 13.75F)
          verticalLineToRelative(0.75F)
          curveToRelative(0.0F, 4.165F, 3.183F, 7.587F, 7.25F, 7.965F)
          verticalLineToRelative(2.785F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-2.785F)
          curveToRelative(4.067F, -0.378F, 7.25F, -3.8F, 7.25F, -7.965F)
          verticalLineToRelative(-0.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(0.75F)
          curveToRelative(0.0F, 3.59F, -2.91F, 6.5F, -6.5F, 6.5F)
          reflectiveCurveToRelative(-6.5F, -2.91F, -6.5F, -6.5F)
          verticalLineToRelative(-0.75F)
          close()        
      }
    }
    return _mic28!!
  }

private var _mic28: ImageVector? = null

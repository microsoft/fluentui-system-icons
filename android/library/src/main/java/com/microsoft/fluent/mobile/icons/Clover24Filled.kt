package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clover24: ImageVector
  get() {
    if (_clover24 != null) {
      return _clover24!!
    }
    _clover24 = fluentIcon(name = "Filled.Clover24", 24f) {
      materialPath {
          moveTo(6.75F, 2.0F)
          curveTo(4.127F, 2.0F, 2.0F, 4.127F, 2.0F, 6.75F)
          reflectiveCurveToRelative(2.127F, 4.75F, 4.75F, 4.75F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-4.0F)
          curveTo(11.5F, 4.127F, 9.373F, 2.0F, 6.75F, 2.0F)
          close()
          moveToRelative(0.0F, 20.0F)
          curveTo(4.127F, 22.0F, 2.0F, 19.873F, 2.0F, 17.25F)
          reflectiveCurveToRelative(2.127F, -4.75F, 4.75F, -4.75F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 2.623F, -2.127F, 4.75F, -4.75F, 4.75F)
          close()
          moveToRelative(10.5F, -20.0F)
          curveTo(19.873F, 2.0F, 22.0F, 4.127F, 22.0F, 6.75F)
          reflectiveCurveToRelative(-2.127F, 4.75F, -4.75F, 4.75F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-4.0F)
          curveTo(12.5F, 4.127F, 14.627F, 2.0F, 17.25F, 2.0F)
          close()
          moveToRelative(0.0F, 20.0F)
          curveToRelative(2.623F, 0.0F, 4.75F, -2.127F, 4.75F, -4.75F)
          reflectiveCurveToRelative(-2.127F, -4.75F, -4.75F, -4.75F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 2.623F, 2.127F, 4.75F, 4.75F, 4.75F)
          close()        
      }
    }
    return _clover24!!
  }

private var _clover24: ImageVector? = null

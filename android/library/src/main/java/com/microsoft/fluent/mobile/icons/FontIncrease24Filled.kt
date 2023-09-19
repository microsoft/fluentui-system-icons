package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FontIncrease24: ImageVector
  get() {
    if (_fontIncrease24 != null) {
      return _fontIncrease24!!
    }
    _fontIncrease24 = fluentIcon(name = "Filled.FontIncrease24", 24f) {
      materialPath {
          moveTo(16.625F, 5.78F)
          curveToRelative(-0.432F, 0.346F, -1.06F, 0.276F, -1.406F, -0.155F)
          curveToRelative(-0.345F, -0.432F, -0.275F, -1.06F, 0.156F, -1.406F)
          lineToRelative(2.5F, -2.0F)
          curveToRelative(0.366F, -0.292F, 0.884F, -0.292F, 1.25F, 0.0F)
          lineToRelative(2.5F, 2.0F)
          curveToRelative(0.43F, 0.345F, 0.5F, 0.974F, 0.156F, 1.406F)
          curveToRelative(-0.345F, 0.43F, -0.974F, 0.5F, -1.406F, 0.156F)
          lineTo(18.5F, 4.28F)
          lineToRelative(-1.875F, 1.5F)
          close()
          moveToRelative(-3.706F, -1.174F)
          curveTo(12.762F, 4.24F, 12.4F, 4.0F, 12.0F, 4.0F)
          reflectiveCurveToRelative(-0.76F, 0.24F, -0.919F, 0.606F)
          lineToRelative(-6.0F, 14.0F)
          curveTo(4.864F, 19.113F, 5.1F, 19.7F, 5.606F, 19.919F)
          curveToRelative(0.508F, 0.217F, 1.096F, -0.018F, 1.313F, -0.525F)
          lineTo(8.803F, 15.0F)
          horizontalLineToRelative(6.395F)
          lineToRelative(1.883F, 4.394F)
          curveToRelative(0.218F, 0.507F, 0.806F, 0.742F, 1.313F, 0.525F)
          curveToRelative(0.508F, -0.218F, 0.743F, -0.806F, 0.525F, -1.313F)
          lineToRelative(-6.0F, -14.0F)
          close()
          moveTo(12.0F, 7.54F)
          lineTo(14.34F, 13.0F)
          horizontalLineTo(9.66F)
          lineTo(12.0F, 7.54F)
          close()        
      }
    }
    return _fontIncrease24!!
  }

private var _fontIncrease24: ImageVector? = null

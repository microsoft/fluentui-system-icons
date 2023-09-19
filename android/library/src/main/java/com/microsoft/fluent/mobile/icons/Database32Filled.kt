package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Database32: ImageVector
  get() {
    if (_database32 != null) {
      return _database32!!
    }
    _database32 = fluentIcon(name = "Filled.Database32", 32f) {
      materialPath {
          moveTo(16.0F, 14.0F)
          curveToRelative(3.256F, 0.0F, 6.3F, -0.596F, 8.606F, -1.644F)
          curveToRelative(0.823F, -0.374F, 1.668F, -0.865F, 2.394F, -1.48F)
          verticalLineTo(25.0F)
          curveToRelative(0.0F, 2.761F, -4.925F, 5.0F, -11.0F, 5.0F)
          reflectiveCurveTo(5.0F, 27.761F, 5.0F, 25.0F)
          verticalLineTo(10.876F)
          curveToRelative(0.726F, 0.615F, 1.571F, 1.106F, 2.394F, 1.48F)
          curveTo(9.7F, 13.404F, 12.744F, 14.0F, 16.0F, 14.0F)
          close()
          moveTo(5.0F, 7.0F)
          curveToRelative(0.0F, -2.761F, 4.925F, -5.0F, 11.0F, -5.0F)
          reflectiveCurveToRelative(11.0F, 2.239F, 11.0F, 5.0F)
          reflectiveCurveToRelative(-4.925F, 5.0F, -11.0F, 5.0F)
          reflectiveCurveTo(5.0F, 9.761F, 5.0F, 7.0F)
          close()        
      }
    }
    return _database32!!
  }

private var _database32: ImageVector? = null

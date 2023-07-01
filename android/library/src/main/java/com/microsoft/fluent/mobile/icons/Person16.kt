package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Person16: ImageVector
  get() {
    if (_person16 != null) {
      return _person16!!
    }
    _person16 = fluentIcon(name = "Regular.Person16", 16f) {
      materialPath {
          moveTo(11.5F, 8.0F)
          curveTo(12.328F, 8.0F, 13.0F, 8.672F, 13.0F, 9.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.971F, -1.86F, 4.0F, -5.0F, 4.0F)
          curveToRelative(-3.14F, 0.0F, -5.0F, -2.029F, -5.0F, -4.0F)
          verticalLineTo(9.5F)
          curveTo(3.0F, 8.672F, 3.672F, 8.0F, 4.5F, 8.0F)
          horizontalLineToRelative(7.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(4.224F, 9.0F, 4.0F, 9.224F, 4.0F, 9.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.438F, 1.432F, 3.0F, 4.0F, 3.0F)
          reflectiveCurveToRelative(4.0F, -1.562F, 4.0F, -3.0F)
          verticalLineTo(9.5F)
          curveTo(12.0F, 9.224F, 11.776F, 9.0F, 11.5F, 9.0F)
          close()
          moveTo(8.0F, 1.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          reflectiveCurveTo(9.519F, 7.0F, 8.0F, 7.0F)
          reflectiveCurveTo(5.25F, 5.769F, 5.25F, 4.25F)
          reflectiveCurveTo(6.481F, 1.5F, 8.0F, 1.5F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(-0.966F, 0.0F, -1.75F, 0.784F, -1.75F, 1.75F)
          reflectiveCurveTo(7.034F, 6.0F, 8.0F, 6.0F)
          reflectiveCurveToRelative(1.75F, -0.784F, 1.75F, -1.75F)
          reflectiveCurveTo(8.966F, 2.5F, 8.0F, 2.5F)
          close()        
      }
    }
    return _person16!!
  }

private var _person16: ImageVector? = null

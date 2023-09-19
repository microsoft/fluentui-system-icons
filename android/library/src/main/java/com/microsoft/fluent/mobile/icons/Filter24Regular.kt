package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Filter24: ImageVector
  get() {
    if (_filter24 != null) {
      return _filter24!!
    }
    _filter24 = fluentIcon(name = "Regular.Filter24", 24f) {
      materialPath {
          moveTo(13.5F, 16.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(10.086F, 16.0F, 10.5F, 16.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(3.0F, -5.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(7.086F, 11.0F, 7.5F, 11.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveToRelative(3.0F, -5.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(19.914F, 7.5F, 19.5F, 7.5F)
          horizontalLineToRelative(-15.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(4.086F, 6.0F, 4.5F, 6.0F)
          horizontalLineToRelative(15.0F)
          close()        
      }
    }
    return _filter24!!
  }

private var _filter24: ImageVector? = null

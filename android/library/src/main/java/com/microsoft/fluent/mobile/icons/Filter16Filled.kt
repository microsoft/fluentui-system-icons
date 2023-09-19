package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Filter16: ImageVector
  get() {
    if (_filter16 != null) {
      return _filter16!!
    }
    _filter16 = fluentIcon(name = "Filled.Filter16", 16f) {
      materialPath {
          moveTo(1.75F, 3.75F)
          curveTo(1.75F, 3.336F, 2.086F, 3.0F, 2.5F, 3.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(13.914F, 4.5F, 13.5F, 4.5F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(2.0F, 4.0F)
          curveTo(3.75F, 7.336F, 4.086F, 7.0F, 4.5F, 7.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(11.914F, 8.5F, 11.5F, 8.5F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(2.0F, 4.0F)
          curveTo(5.75F, 11.336F, 6.086F, 11.0F, 6.5F, 11.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(9.914F, 12.5F, 9.5F, 12.5F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()        
      }
    }
    return _filter16!!
  }

private var _filter16: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Phone20: ImageVector
  get() {
    if (_phone20 != null) {
      return _phone20!!
    }
    _phone20 = fluentIcon(name = "Filled.Phone20", 20f) {
      materialPath {
          moveTo(6.5F, 2.0F)
          curveTo(5.672F, 2.0F, 5.0F, 2.672F, 5.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(5.0F, 17.328F, 5.672F, 18.0F, 6.5F, 18.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-13.0F)
          curveTo(15.0F, 2.672F, 14.328F, 2.0F, 13.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(9.0F, 14.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(11.276F, 15.0F, 11.0F, 15.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveTo(8.724F, 14.0F, 9.0F, 14.0F)
          close()        
      }
    }
    return _phone20!!
  }

private var _phone20: ImageVector? = null

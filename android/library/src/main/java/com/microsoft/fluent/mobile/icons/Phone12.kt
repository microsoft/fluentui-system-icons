package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Phone12: ImageVector
  get() {
    if (_phone12 != null) {
      return _phone12!!
    }
    _phone12 = fluentIcon(name = "Filled.Phone12", 12f) {
      materialPath {
          moveTo(3.0F, 2.5F)
          curveTo(3.0F, 1.672F, 3.672F, 1.0F, 4.5F, 1.0F)
          horizontalLineToRelative(3.0F)
          curveTo(8.328F, 1.0F, 9.0F, 1.672F, 9.0F, 2.5F)
          verticalLineToRelative(7.0F)
          curveTo(9.0F, 10.328F, 8.328F, 11.0F, 7.5F, 11.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(3.672F, 11.0F, 3.0F, 10.328F, 3.0F, 9.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(5.5F, 8.0F)
          curveTo(5.224F, 8.0F, 5.0F, 8.224F, 5.0F, 8.5F)
          reflectiveCurveTo(5.224F, 9.0F, 5.5F, 9.0F)
          horizontalLineToRelative(1.0F)
          curveTo(6.776F, 9.0F, 7.0F, 8.776F, 7.0F, 8.5F)
          reflectiveCurveTo(6.776F, 8.0F, 6.5F, 8.0F)
          horizontalLineToRelative(-1.0F)
          close()        
      }
    }
    return _phone12!!
  }

private var _phone12: ImageVector? = null

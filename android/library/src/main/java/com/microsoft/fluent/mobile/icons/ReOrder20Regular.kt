package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Reorder20: ImageVector
  get() {
    if (_reorder20 != null) {
      return _reorder20!!
    }
    _reorder20 = fluentIcon(name = "Regular.Reorder20", 20f) {
      materialPath {
          moveTo(2.5F, 8.0F)
          curveTo(2.224F, 8.0F, 2.0F, 8.224F, 2.0F, 8.5F)
          reflectiveCurveTo(2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 9.0F, 18.0F, 8.776F, 18.0F, 8.5F)
          reflectiveCurveTo(17.776F, 8.0F, 17.5F, 8.0F)
          horizontalLineToRelative(-15.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(2.224F, 11.0F, 2.0F, 11.224F, 2.0F, 11.5F)
          reflectiveCurveTo(2.224F, 12.0F, 2.5F, 12.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 11.0F, 17.5F, 11.0F)
          horizontalLineToRelative(-15.0F)
          close()        
      }
    }
    return _reorder20!!
  }

private var _reorder20: ImageVector? = null

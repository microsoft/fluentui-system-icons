package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Filter16: ImageVector
  get() {
    if (_filter16 != null) {
      return _filter16!!
    }
    _filter16 = fluentIcon(name = "Regular.Filter16", 16f) {
      materialPath {
          moveTo(2.0F, 3.5F)
          curveTo(2.0F, 3.224F, 2.224F, 3.0F, 2.5F, 3.0F)
          horizontalLineToRelative(11.0F)
          curveTo(13.776F, 3.0F, 14.0F, 3.224F, 14.0F, 3.5F)
          reflectiveCurveTo(13.776F, 4.0F, 13.5F, 4.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 4.0F, 2.0F, 3.776F, 2.0F, 3.5F)
          close()
          moveToRelative(2.0F, 4.0F)
          curveTo(4.0F, 7.224F, 4.224F, 7.0F, 4.5F, 7.0F)
          horizontalLineToRelative(7.0F)
          curveTo(11.776F, 7.0F, 12.0F, 7.224F, 12.0F, 7.5F)
          reflectiveCurveTo(11.776F, 8.0F, 11.5F, 8.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(4.224F, 8.0F, 4.0F, 7.776F, 4.0F, 7.5F)
          close()
          moveToRelative(2.0F, 4.0F)
          curveTo(6.0F, 11.224F, 6.224F, 11.0F, 6.5F, 11.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(9.776F, 12.0F, 9.5F, 12.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(6.224F, 12.0F, 6.0F, 11.776F, 6.0F, 11.5F)
          close()        
      }
    }
    return _filter16!!
  }

private var _filter16: ImageVector? = null

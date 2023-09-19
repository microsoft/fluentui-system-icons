package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.List20: ImageVector
  get() {
    if (_list20 != null) {
      return _list20!!
    }
    _list20 = fluentIcon(name = "Regular.List20", 20f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 4.224F, 2.224F, 4.0F, 2.5F, 4.0F)
          horizontalLineToRelative(11.0F)
          curveTo(13.776F, 4.0F, 14.0F, 4.224F, 14.0F, 4.5F)
          reflectiveCurveTo(13.776F, 5.0F, 13.5F, 5.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 5.0F, 2.0F, 4.776F, 2.0F, 4.5F)
          close()
          moveToRelative(0.0F, 10.0F)
          curveTo(2.0F, 14.224F, 2.224F, 14.0F, 2.5F, 14.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(12.776F, 15.0F, 12.5F, 15.0F)
          horizontalLineToRelative(-10.0F)
          curveTo(2.224F, 15.0F, 2.0F, 14.776F, 2.0F, 14.5F)
          close()
          moveTo(2.5F, 9.0F)
          curveTo(2.224F, 9.0F, 2.0F, 9.224F, 2.0F, 9.5F)
          reflectiveCurveTo(2.224F, 10.0F, 2.5F, 10.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 9.0F, 17.5F, 9.0F)
          horizontalLineToRelative(-15.0F)
          close()        
      }
    }
    return _list20!!
  }

private var _list20: ImageVector? = null

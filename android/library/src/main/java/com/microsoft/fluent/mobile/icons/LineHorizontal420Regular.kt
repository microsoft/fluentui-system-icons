package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LineHorizontal420: ImageVector
  get() {
    if (_lineHorizontal420 != null) {
      return _lineHorizontal420!!
    }
    _lineHorizontal420 = fluentIcon(name = "Regular.LineHorizontal420", 420f) {
      materialPath {
          moveTo(2.5F, 3.0F)
          curveTo(2.224F, 3.0F, 2.0F, 3.224F, 2.0F, 3.5F)
          reflectiveCurveTo(2.224F, 4.0F, 2.5F, 4.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 4.0F, 18.0F, 3.776F, 18.0F, 3.5F)
          reflectiveCurveTo(17.776F, 3.0F, 17.5F, 3.0F)
          horizontalLineToRelative(-15.0F)
          close()
          moveToRelative(0.0F, 4.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 7.0F, 18.0F, 7.224F, 18.0F, 7.5F)
          reflectiveCurveTo(17.776F, 8.0F, 17.5F, 8.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 8.0F, 2.0F, 7.776F, 2.0F, 7.5F)
          reflectiveCurveTo(2.224F, 7.0F, 2.5F, 7.0F)
          close()
          moveTo(2.0F, 11.5F)
          curveTo(2.0F, 11.224F, 2.224F, 11.0F, 2.5F, 11.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 12.0F, 17.5F, 12.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 12.0F, 2.0F, 11.776F, 2.0F, 11.5F)
          close()
          moveTo(2.5F, 15.0F)
          curveTo(2.224F, 15.0F, 2.0F, 15.224F, 2.0F, 15.5F)
          reflectiveCurveTo(2.224F, 16.0F, 2.5F, 16.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 15.0F, 17.5F, 15.0F)
          horizontalLineToRelative(-15.0F)
          close()        
      }
    }
    return _lineHorizontal420!!
  }

private var _lineHorizontal420: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Filter12: ImageVector
  get() {
    if (_filter12 != null) {
      return _filter12!!
    }
    _filter12 = fluentIcon(name = "Regular.Filter12", 12f) {
      materialPath {
          moveTo(1.0F, 2.5F)
          curveTo(1.0F, 2.224F, 1.224F, 2.0F, 1.5F, 2.0F)
          horizontalLineToRelative(9.0F)
          curveTo(10.776F, 2.0F, 11.0F, 2.224F, 11.0F, 2.5F)
          reflectiveCurveTo(10.776F, 3.0F, 10.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(1.224F, 3.0F, 1.0F, 2.776F, 1.0F, 2.5F)
          close()
          moveToRelative(2.0F, 3.0F)
          curveTo(3.0F, 5.224F, 3.224F, 5.0F, 3.5F, 5.0F)
          horizontalLineToRelative(5.0F)
          curveTo(8.776F, 5.0F, 9.0F, 5.224F, 9.0F, 5.5F)
          reflectiveCurveTo(8.776F, 6.0F, 8.5F, 6.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(3.224F, 6.0F, 3.0F, 5.776F, 3.0F, 5.5F)
          close()
          moveTo(5.0F, 8.0F)
          curveTo(4.724F, 8.0F, 4.5F, 8.224F, 4.5F, 8.5F)
          reflectiveCurveTo(4.724F, 9.0F, 5.0F, 9.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(7.276F, 8.0F, 7.0F, 8.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _filter12!!
  }

private var _filter12: ImageVector? = null

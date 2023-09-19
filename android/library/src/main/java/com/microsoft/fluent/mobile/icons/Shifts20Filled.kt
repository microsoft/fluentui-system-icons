package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shifts20: ImageVector
  get() {
    if (_shifts20 != null) {
      return _shifts20!!
    }
    _shifts20 = fluentIcon(name = "Filled.Shifts20", 20f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(7.0F, 0.5F)
          curveTo(10.0F, 6.224F, 9.776F, 6.0F, 9.5F, 6.0F)
          reflectiveCurveTo(9.0F, 6.224F, 9.0F, 6.5F)
          verticalLineToRelative(4.0F)
          curveTo(9.0F, 10.776F, 9.224F, 11.0F, 9.5F, 11.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.776F, 10.0F, 12.5F, 10.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(6.5F)
          close()        
      }
    }
    return _shifts20!!
  }

private var _shifts20: ImageVector? = null

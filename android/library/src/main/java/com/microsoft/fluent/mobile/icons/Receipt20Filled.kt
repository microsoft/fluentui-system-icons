package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Receipt20: ImageVector
  get() {
    if (_receipt20 != null) {
      return _receipt20!!
    }
    _receipt20 = fluentIcon(name = "Filled.Receipt20", 20f) {
      materialPath {
          moveTo(3.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(7.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(11.0F, 11.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(3.0F)
          close()
          moveTo(6.5F, 6.0F)
          curveTo(6.224F, 6.0F, 6.0F, 6.224F, 6.0F, 6.5F)
          reflectiveCurveTo(6.224F, 7.0F, 6.5F, 7.0F)
          horizontalLineToRelative(4.0F)
          curveTo(10.776F, 7.0F, 11.0F, 6.776F, 11.0F, 6.5F)
          reflectiveCurveTo(10.776F, 6.0F, 10.5F, 6.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(6.224F, 9.0F, 6.0F, 9.224F, 6.0F, 9.5F)
          reflectiveCurveTo(6.224F, 10.0F, 6.5F, 10.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(10.776F, 9.0F, 10.5F, 9.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(6.224F, 12.0F, 6.0F, 12.224F, 6.0F, 12.5F)
          reflectiveCurveTo(6.224F, 13.0F, 6.5F, 13.0F)
          horizontalLineToRelative(2.0F)
          curveTo(8.776F, 13.0F, 9.0F, 12.776F, 9.0F, 12.5F)
          reflectiveCurveTo(8.776F, 12.0F, 8.5F, 12.0F)
          horizontalLineToRelative(-2.0F)
          close()        
      }
    }
    return _receipt20!!
  }

private var _receipt20: ImageVector? = null

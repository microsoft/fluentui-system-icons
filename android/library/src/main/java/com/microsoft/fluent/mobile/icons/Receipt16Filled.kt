package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Receipt16: ImageVector
  get() {
    if (_receipt16 != null) {
      return _receipt16!!
    }
    _receipt16 = fluentIcon(name = "Filled.Receipt16", 16f) {
      materialPath {
          moveTo(2.0F, 3.75F)
          curveTo(2.0F, 2.784F, 2.784F, 2.0F, 3.75F, 2.0F)
          horizontalLineToRelative(5.5F)
          curveTo(10.216F, 2.0F, 11.0F, 2.784F, 11.0F, 3.75F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineTo(3.75F)
          close()
          moveTo(11.0F, 13.0F)
          horizontalLineToRelative(0.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(2.0F)
          close()
          moveTo(4.5F, 5.5F)
          curveTo(4.5F, 5.776F, 4.724F, 6.0F, 5.0F, 6.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(8.276F, 5.0F, 8.0F, 5.0F)
          horizontalLineTo(5.0F)
          curveTo(4.724F, 5.0F, 4.5F, 5.224F, 4.5F, 5.5F)
          close()
          moveToRelative(0.5F, 2.0F)
          curveTo(4.724F, 7.5F, 4.5F, 7.724F, 4.5F, 8.0F)
          reflectiveCurveTo(4.724F, 8.5F, 5.0F, 8.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(8.276F, 7.5F, 8.0F, 7.5F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(-0.5F, 3.0F)
          curveTo(4.5F, 10.776F, 4.724F, 11.0F, 5.0F, 11.0F)
          horizontalLineToRelative(1.5F)
          curveTo(6.776F, 11.0F, 7.0F, 10.776F, 7.0F, 10.5F)
          reflectiveCurveTo(6.776F, 10.0F, 6.5F, 10.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          close()        
      }
    }
    return _receipt16!!
  }

private var _receipt16: ImageVector? = null

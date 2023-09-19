package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Receipt16: ImageVector
  get() {
    if (_receipt16 != null) {
      return _receipt16!!
    }
    _receipt16 = fluentIcon(name = "Regular.Receipt16", 16f) {
      materialPath {
          moveTo(3.75F, 2.0F)
          curveTo(2.784F, 2.0F, 2.0F, 2.784F, 2.0F, 3.75F)
          verticalLineToRelative(7.75F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineTo(3.75F)
          curveTo(11.0F, 2.784F, 10.216F, 2.0F, 9.25F, 2.0F)
          horizontalLineToRelative(-5.5F)
          close()
          moveTo(11.0F, 11.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(-2.0F)
          close()
          moveTo(3.0F, 3.75F)
          curveTo(3.0F, 3.336F, 3.336F, 3.0F, 3.75F, 3.0F)
          horizontalLineToRelative(5.5F)
          curveTo(9.664F, 3.0F, 10.0F, 3.336F, 10.0F, 3.75F)
          verticalLineTo(13.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineTo(3.75F)
          close()
          moveTo(4.5F, 5.5F)
          curveTo(4.5F, 5.224F, 4.724F, 5.0F, 5.0F, 5.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(8.276F, 6.0F, 8.0F, 6.0F)
          horizontalLineTo(5.0F)
          curveTo(4.724F, 6.0F, 4.5F, 5.776F, 4.5F, 5.5F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(8.276F, 8.5F, 8.0F, 8.5F)
          horizontalLineTo(5.0F)
          curveTo(4.724F, 8.5F, 4.5F, 8.276F, 4.5F, 8.0F)
          close()
          moveTo(5.0F, 10.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(4.724F, 11.0F, 5.0F, 11.0F)
          horizontalLineToRelative(1.5F)
          curveTo(6.776F, 11.0F, 7.0F, 10.776F, 7.0F, 10.5F)
          reflectiveCurveTo(6.776F, 10.0F, 6.5F, 10.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _receipt16!!
  }

private var _receipt16: ImageVector? = null

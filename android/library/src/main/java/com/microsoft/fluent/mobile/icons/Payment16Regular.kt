package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Payment16: ImageVector
  get() {
    if (_payment16 != null) {
      return _payment16!!
    }
    _payment16 = fluentIcon(name = "Regular.Payment16", 16f) {
      materialPath {
          moveTo(10.5F, 10.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.776F, 10.0F, 12.5F, 10.0F)
          horizontalLineToRelative(-2.0F)
          close()
          moveTo(1.0F, 5.5F)
          curveTo(1.0F, 4.12F, 2.12F, 3.0F, 3.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(13.88F, 3.0F, 15.0F, 4.12F, 15.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(2.12F, 13.0F, 1.0F, 11.88F, 1.0F, 10.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(14.0F, 6.0F)
          verticalLineTo(5.5F)
          curveTo(14.0F, 4.672F, 13.328F, 4.0F, 12.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(2.672F, 4.0F, 2.0F, 4.672F, 2.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(12.0F)
          close()
          moveTo(2.0F, 7.0F)
          verticalLineToRelative(3.5F)
          curveTo(2.0F, 11.328F, 2.672F, 12.0F, 3.5F, 12.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(2.0F)
          close()        
      }
    }
    return _payment16!!
  }

private var _payment16: ImageVector? = null

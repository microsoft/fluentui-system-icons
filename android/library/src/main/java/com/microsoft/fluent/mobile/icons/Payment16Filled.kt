package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Payment16: ImageVector
  get() {
    if (_payment16 != null) {
      return _payment16!!
    }
    _payment16 = fluentIcon(name = "Filled.Payment16", 16f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(2.12F, 3.0F, 1.0F, 4.12F, 1.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(14.0F)
          verticalLineTo(5.5F)
          curveTo(15.0F, 4.12F, 13.88F, 3.0F, 12.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(15.0F, 7.0F)
          horizontalLineTo(1.0F)
          verticalLineToRelative(3.5F)
          curveTo(1.0F, 11.88F, 2.12F, 13.0F, 3.5F, 13.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(-4.5F, 3.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(12.776F, 11.0F, 12.5F, 11.0F)
          horizontalLineToRelative(-2.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _payment16!!
  }

private var _payment16: ImageVector? = null

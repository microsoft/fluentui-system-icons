package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Storage20: ImageVector
  get() {
    if (_storage20 != null) {
      return _storage20!!
    }
    _storage20 = fluentIcon(name = "Filled.Storage20", 20f) {
      materialPath {
          moveTo(2.0F, 8.5F)
          curveTo(2.0F, 7.12F, 3.12F, 6.0F, 4.5F, 6.0F)
          horizontalLineToRelative(11.0F)
          curveTo(16.88F, 6.0F, 18.0F, 7.12F, 18.0F, 8.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-3.0F)
          close()
          moveTo(13.0F, 9.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          close()
          moveToRelative(3.0F, 0.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          close()        
      }
    }
    return _storage20!!
  }

private var _storage20: ImageVector? = null

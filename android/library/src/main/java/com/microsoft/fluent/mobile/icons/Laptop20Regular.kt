package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Laptop20: ImageVector
  get() {
    if (_laptop20 != null) {
      return _laptop20!!
    }
    _laptop20 = fluentIcon(name = "Regular.Laptop20", 20f) {
      materialPath {
          moveTo(3.0F, 7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(2.0F, -1.0F)
          curveTo(4.448F, 6.0F, 4.0F, 6.448F, 4.0F, 7.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(-3.0F, 9.5F)
          curveTo(2.0F, 15.224F, 2.224F, 15.0F, 2.5F, 15.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 16.0F, 17.5F, 16.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 16.0F, 2.0F, 15.776F, 2.0F, 15.5F)
          close()        
      }
    }
    return _laptop20!!
  }

private var _laptop20: ImageVector? = null

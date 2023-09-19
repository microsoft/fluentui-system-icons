package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Desktop20: ImageVector
  get() {
    if (_desktop20 != null) {
      return _desktop20!!
    }
    _desktop20 = fluentIcon(name = "Regular.Desktop20", 20f) {
      materialPath {
          moveTo(4.0F, 2.0F)
          curveTo(2.895F, 2.0F, 2.0F, 2.895F, 2.0F, 4.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 17.0F, 5.0F, 17.224F, 5.0F, 17.5F)
          reflectiveCurveTo(5.224F, 18.0F, 5.5F, 18.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 17.0F, 14.5F, 17.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(8.0F, 13.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveTo(3.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.0F)
          close()        
      }
    }
    return _desktop20!!
  }

private var _desktop20: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SplitHorizontal20: ImageVector
  get() {
    if (_splitHorizontal20 != null) {
      return _splitHorizontal20!!
    }
    _splitHorizontal20 = fluentIcon(name = "Regular.SplitHorizontal20", 20f) {
      materialPath {
          moveTo(17.5F, 10.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 9.0F, 17.5F, 9.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 9.0F, 2.0F, 9.224F, 2.0F, 9.5F)
          reflectiveCurveTo(2.224F, 10.0F, 2.5F, 10.0F)
          horizontalLineToRelative(15.0F)
          close()
          moveTo(16.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          curveTo(4.895F, 2.0F, 4.0F, 2.895F, 4.0F, 4.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(0.0F, 7.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          close()        
      }
    }
    return _splitHorizontal20!!
  }

private var _splitHorizontal20: ImageVector? = null

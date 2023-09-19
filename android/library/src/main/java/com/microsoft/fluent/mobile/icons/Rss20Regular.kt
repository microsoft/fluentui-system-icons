package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Rss20: ImageVector
  get() {
    if (_rss20 != null) {
      return _rss20!!
    }
    _rss20 = fluentIcon(name = "Regular.Rss20", 20f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()
          moveTo(4.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(2.5F, 0.0F)
          curveTo(6.224F, 6.0F, 6.0F, 6.224F, 6.0F, 6.5F)
          reflectiveCurveTo(6.224F, 7.0F, 6.5F, 7.0F)
          curveToRelative(3.59F, 0.0F, 6.5F, 2.91F, 6.5F, 6.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          curveTo(14.0F, 9.358F, 10.642F, 6.0F, 6.5F, 6.0F)
          close()
          moveTo(6.0F, 9.5F)
          curveTo(6.0F, 9.224F, 6.224F, 9.0F, 6.5F, 9.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(10.0F, 13.776F, 10.0F, 13.5F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          curveTo(6.224F, 10.0F, 6.0F, 9.776F, 6.0F, 9.5F)
          close()
          moveTo(7.0F, 14.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()        
      }
    }
    return _rss20!!
  }

private var _rss20: ImageVector? = null

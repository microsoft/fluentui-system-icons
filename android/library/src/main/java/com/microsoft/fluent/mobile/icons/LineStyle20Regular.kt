package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LineStyle20: ImageVector
  get() {
    if (_lineStyle20 != null) {
      return _lineStyle20!!
    }
    _lineStyle20 = fluentIcon(name = "Regular.LineStyle20", 20f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 4.224F, 2.224F, 4.0F, 2.5F, 4.0F)
          horizontalLineToRelative(3.0F)
          curveTo(5.776F, 4.0F, 6.0F, 4.224F, 6.0F, 4.5F)
          reflectiveCurveTo(5.776F, 5.0F, 5.5F, 5.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(2.224F, 5.0F, 2.0F, 4.776F, 2.0F, 4.5F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveTo(8.0F, 4.224F, 8.224F, 4.0F, 8.5F, 4.0F)
          horizontalLineToRelative(3.0F)
          curveTo(11.776F, 4.0F, 12.0F, 4.224F, 12.0F, 4.5F)
          reflectiveCurveTo(11.776F, 5.0F, 11.5F, 5.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(8.224F, 5.0F, 8.0F, 4.776F, 8.0F, 4.5F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveTo(14.0F, 4.224F, 14.224F, 4.0F, 14.5F, 4.0F)
          horizontalLineToRelative(3.0F)
          curveTo(17.776F, 4.0F, 18.0F, 4.224F, 18.0F, 4.5F)
          reflectiveCurveTo(17.776F, 5.0F, 17.5F, 5.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(14.224F, 5.0F, 14.0F, 4.776F, 14.0F, 4.5F)
          close()
          moveToRelative(-12.0F, 5.0F)
          curveTo(2.0F, 9.224F, 2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 9.0F, 18.0F, 9.224F, 18.0F, 9.5F)
          reflectiveCurveTo(17.776F, 10.0F, 17.5F, 10.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 10.0F, 2.0F, 9.776F, 2.0F, 9.5F)
          close()
          moveTo(3.0F, 14.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _lineStyle20!!
  }

private var _lineStyle20: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DocumentOnePageColumns20: ImageVector
  get() {
    if (_documentOnePageColumns20 != null) {
      return _documentOnePageColumns20!!
    }
    _documentOnePageColumns20 = fluentIcon(name = "Regular.DocumentOnePageColumns20", 20f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(2.0F, -1.0F)
          curveTo(5.448F, 3.0F, 5.0F, 3.448F, 5.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(1.5F, 2.0F)
          curveTo(7.776F, 5.0F, 8.0F, 5.224F, 8.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(8.0F, 14.776F, 7.776F, 15.0F, 7.5F, 15.0F)
          reflectiveCurveTo(7.0F, 14.776F, 7.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(7.0F, 5.224F, 7.224F, 5.0F, 7.5F, 5.0F)
          close()
          moveTo(13.0F, 5.5F)
          curveTo(13.0F, 5.224F, 12.776F, 5.0F, 12.5F, 5.0F)
          reflectiveCurveTo(12.0F, 5.224F, 12.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-9.0F)
          close()        
      }
    }
    return _documentOnePageColumns20!!
  }

private var _documentOnePageColumns20: ImageVector? = null

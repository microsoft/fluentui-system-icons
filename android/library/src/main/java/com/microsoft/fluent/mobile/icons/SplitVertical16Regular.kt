package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SplitVertical16: ImageVector
  get() {
    if (_splitVertical16 != null) {
      return _splitVertical16!!
    }
    _splitVertical16 = fluentIcon(name = "Regular.SplitVertical16", 16f) {
      materialPath {
          moveTo(8.0F, 1.5F)
          curveTo(8.0F, 1.224F, 7.776F, 1.0F, 7.5F, 1.0F)
          reflectiveCurveTo(7.0F, 1.224F, 7.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveTo(7.0F, 14.776F, 7.224F, 15.0F, 7.5F, 15.0F)
          reflectiveCurveTo(8.0F, 14.776F, 8.0F, 14.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(6.0F, 13.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(3.0F)
          curveTo(1.895F, 3.0F, 1.0F, 3.895F, 1.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(6.0F, 0.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          close()        
      }
    }
    return _splitVertical16!!
  }

private var _splitVertical16: ImageVector? = null

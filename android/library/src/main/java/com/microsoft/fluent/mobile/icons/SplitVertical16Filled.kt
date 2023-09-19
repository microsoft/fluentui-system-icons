package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SplitVertical16: ImageVector
  get() {
    if (_splitVertical16 != null) {
      return _splitVertical16!!
    }
    _splitVertical16 = fluentIcon(name = "Filled.SplitVertical16", 16f) {
      materialPath {
          moveTo(8.0F, 1.5F)
          curveTo(8.0F, 1.224F, 7.776F, 1.0F, 7.5F, 1.0F)
          reflectiveCurveTo(7.0F, 1.224F, 7.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveTo(7.0F, 14.776F, 7.224F, 15.0F, 7.5F, 15.0F)
          reflectiveCurveTo(8.0F, 14.776F, 8.0F, 14.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(1.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(8.0F, 8.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(10.0F)
          close()        
      }
    }
    return _splitVertical16!!
  }

private var _splitVertical16: ImageVector? = null

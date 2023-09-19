package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SplitHorizontal12: ImageVector
  get() {
    if (_splitHorizontal12 != null) {
      return _splitHorizontal12!!
    }
    _splitHorizontal12 = fluentIcon(name = "Filled.SplitHorizontal12", 12f) {
      materialPath {
          moveTo(8.5F, 1.0F)
          curveTo(9.328F, 1.0F, 10.0F, 1.672F, 10.0F, 2.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(2.5F)
          curveTo(2.0F, 1.672F, 2.672F, 1.0F, 3.5F, 1.0F)
          horizontalLineToRelative(5.0F)
          close()
          moveToRelative(2.0F, 4.0F)
          curveTo(10.776F, 5.0F, 11.0F, 5.224F, 11.0F, 5.5F)
          reflectiveCurveTo(10.776F, 6.0F, 10.5F, 6.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(1.224F, 6.0F, 1.0F, 5.776F, 1.0F, 5.5F)
          reflectiveCurveTo(1.224F, 5.0F, 1.5F, 5.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveTo(2.0F, 7.0F)
          verticalLineToRelative(1.5F)
          curveTo(2.0F, 9.328F, 2.672F, 10.0F, 3.5F, 10.0F)
          horizontalLineToRelative(5.0F)
          curveTo(9.328F, 10.0F, 10.0F, 9.328F, 10.0F, 8.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(2.0F)
          close()        
      }
    }
    return _splitHorizontal12!!
  }

private var _splitHorizontal12: ImageVector? = null

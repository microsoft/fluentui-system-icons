package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Food16: ImageVector
  get() {
    if (_food16 != null) {
      return _food16!!
    }
    _food16 = fluentIcon(name = "Filled.Food16", 16f) {
      materialPath {
          moveTo(4.0F, 1.5F)
          curveTo(4.0F, 1.224F, 3.776F, 1.0F, 3.5F, 1.0F)
          reflectiveCurveTo(3.0F, 1.224F, 3.0F, 1.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.21F, 0.859F, 2.218F, 2.0F, 2.45F)
          verticalLineToRelative(7.55F)
          curveTo(5.0F, 14.776F, 5.224F, 15.0F, 5.5F, 15.0F)
          reflectiveCurveTo(6.0F, 14.776F, 6.0F, 14.5F)
          verticalLineTo(6.95F)
          curveTo(7.141F, 6.718F, 8.0F, 5.71F, 8.0F, 4.5F)
          verticalLineToRelative(-3.0F)
          curveTo(8.0F, 1.224F, 7.776F, 1.0F, 7.5F, 1.0F)
          reflectiveCurveTo(7.0F, 1.224F, 7.0F, 1.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.653F, -0.417F, 1.209F, -1.0F, 1.415F)
          verticalLineTo(1.5F)
          curveTo(6.0F, 1.224F, 5.776F, 1.0F, 5.5F, 1.0F)
          reflectiveCurveTo(5.0F, 1.224F, 5.0F, 1.5F)
          verticalLineToRelative(4.415F)
          curveTo(4.417F, 5.709F, 4.0F, 5.153F, 4.0F, 4.5F)
          verticalLineToRelative(-3.0F)
          close()
          moveToRelative(7.0F, 13.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 8.0F, 9.0F, 7.776F, 9.0F, 7.5F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.663F, 0.326F, -1.283F, 0.771F, -1.728F)
          curveTo(10.217F, 1.326F, 10.838F, 1.0F, 11.5F, 1.0F)
          curveTo(11.776F, 1.0F, 12.0F, 1.224F, 12.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(11.0F, 14.776F, 11.0F, 14.5F)
          close()        
      }
    }
    return _food16!!
  }

private var _food16: ImageVector? = null

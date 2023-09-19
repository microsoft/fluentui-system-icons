package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Flow16: ImageVector
  get() {
    if (_flow16 != null) {
      return _flow16!!
    }
    _flow16 = fluentIcon(name = "Regular.Flow16", 16f) {
      materialPath {
          moveTo(12.5F, 4.0F)
          curveTo(13.328F, 4.0F, 14.0F, 4.672F, 14.0F, 5.5F)
          reflectiveCurveTo(13.328F, 7.0F, 12.5F, 7.0F)
          reflectiveCurveTo(11.0F, 6.328F, 11.0F, 5.5F)
          reflectiveCurveTo(11.672F, 4.0F, 12.5F, 4.0F)
          close()
          moveToRelative(-2.45F, 2.0F)
          curveToRelative(0.232F, 1.141F, 1.24F, 2.0F, 2.45F, 2.0F)
          curveTo(13.88F, 8.0F, 15.0F, 6.88F, 15.0F, 5.5F)
          reflectiveCurveTo(13.88F, 3.0F, 12.5F, 3.0F)
          curveToRelative(-1.21F, 0.0F, -2.218F, 0.859F, -2.45F, 2.0F)
          horizontalLineTo(9.5F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.95F)
          curveTo(5.718F, 8.859F, 4.71F, 8.0F, 3.5F, 8.0F)
          curveTo(2.12F, 8.0F, 1.0F, 9.12F, 1.0F, 10.5F)
          reflectiveCurveTo(2.12F, 13.0F, 3.5F, 13.0F)
          curveToRelative(1.21F, 0.0F, 2.218F, -0.859F, 2.45F, -2.0F)
          horizontalLineTo(6.5F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(0.55F)
          close()
          moveTo(5.0F, 10.5F)
          curveTo(5.0F, 11.328F, 4.328F, 12.0F, 3.5F, 12.0F)
          reflectiveCurveTo(2.0F, 11.328F, 2.0F, 10.5F)
          reflectiveCurveTo(2.672F, 9.0F, 3.5F, 9.0F)
          reflectiveCurveTo(5.0F, 9.672F, 5.0F, 10.5F)
          close()        
      }
    }
    return _flow16!!
  }

private var _flow16: ImageVector? = null

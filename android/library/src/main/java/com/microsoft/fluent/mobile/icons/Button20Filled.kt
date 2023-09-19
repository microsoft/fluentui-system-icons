package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Button20: ImageVector
  get() {
    if (_button20 != null) {
      return _button20!!
    }
    _button20 = fluentIcon(name = "Filled.Button20", 20f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(7.0F, 1.5F)
          curveTo(9.0F, 9.776F, 9.224F, 10.0F, 9.5F, 10.0F)
          horizontalLineTo(14.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.276F, 9.0F, 14.0F, 9.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 9.0F, 9.0F, 9.224F, 9.0F, 9.5F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveTo(8.0F, 8.672F, 7.328F, 8.0F, 6.5F, 8.0F)
          reflectiveCurveTo(5.0F, 8.672F, 5.0F, 9.5F)
          reflectiveCurveTo(5.672F, 11.0F, 6.5F, 11.0F)
          reflectiveCurveTo(8.0F, 10.328F, 8.0F, 9.5F)
          close()        
      }
    }
    return _button20!!
  }

private var _button20: ImageVector? = null

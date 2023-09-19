package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlagCheckered20: ImageVector
  get() {
    if (_flagCheckered20 != null) {
      return _flagCheckered20!!
    }
    _flagCheckered20 = fluentIcon(name = "Regular.FlagCheckered20", 20f) {
      materialPath {
          moveTo(5.0F, 3.5F)
          curveTo(5.0F, 3.224F, 5.224F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(10.0F)
          curveTo(15.776F, 3.0F, 16.0F, 3.224F, 16.0F, 3.5F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.5F)
          curveTo(6.0F, 17.776F, 5.776F, 18.0F, 5.5F, 18.0F)
          reflectiveCurveTo(5.0F, 17.776F, 5.0F, 17.5F)
          verticalLineToRelative(-14.0F)
          close()
          moveTo(6.0F, 13.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          close()        
      }
    }
    return _flagCheckered20!!
  }

private var _flagCheckered20: ImageVector? = null

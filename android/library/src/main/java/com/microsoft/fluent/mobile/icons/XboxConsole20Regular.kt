package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.XboxConsole20: ImageVector
  get() {
    if (_xboxConsole20 != null) {
      return _xboxConsole20!!
    }
    _xboxConsole20 = fluentIcon(name = "Regular.XboxConsole20", 20f) {
      materialPath {
          moveTo(7.5F, 6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(7.914F, 5.0F, 7.5F, 5.0F)
          reflectiveCurveTo(6.75F, 5.336F, 6.75F, 5.75F)
          reflectiveCurveTo(7.086F, 6.5F, 7.5F, 6.5F)
          close()
          moveTo(4.0F, 2.5F)
          curveTo(4.0F, 2.224F, 4.224F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(11.0F)
          curveTo(15.776F, 2.0F, 16.0F, 2.224F, 16.0F, 2.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(4.224F, 18.0F, 4.0F, 17.776F, 4.0F, 17.5F)
          verticalLineToRelative(-15.0F)
          close()
          moveToRelative(4.0F, 7.0F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(7.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(14.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(9.5F)
          curveTo(7.0F, 9.224F, 7.224F, 9.0F, 7.5F, 9.0F)
          reflectiveCurveTo(8.0F, 9.224F, 8.0F, 9.5F)
          close()        
      }
    }
    return _xboxConsole20!!
  }

private var _xboxConsole20: ImageVector? = null

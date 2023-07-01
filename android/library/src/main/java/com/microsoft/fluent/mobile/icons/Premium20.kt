package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Premium20: ImageVector
  get() {
    if (_premium20 != null) {
      return _premium20!!
    }
    _premium20 = fluentIcon(name = "Regular.Premium20", 20f) {
      materialPath {
          moveTo(5.5F, 3.0F)
          curveTo(5.324F, 3.0F, 5.162F, 3.092F, 5.071F, 3.243F)
          lineToRelative(-3.0F, 5.0F)
          curveTo(1.961F, 8.425F, 1.98F, 8.657F, 2.116F, 8.82F)
          lineToRelative(7.5F, 9.0F)
          curveTo(9.71F, 17.934F, 9.852F, 18.0F, 10.0F, 18.0F)
          curveToRelative(0.148F, 0.0F, 0.29F, -0.066F, 0.384F, -0.18F)
          lineToRelative(7.5F, -9.0F)
          curveToRelative(0.136F, -0.163F, 0.154F, -0.395F, 0.045F, -0.577F)
          lineToRelative(-3.0F, -5.0F)
          curveTo(14.839F, 3.093F, 14.676F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(3.383F, 8.0F)
          lineToRelative(2.4F, -4.0F)
          horizontalLineToRelative(1.978F)
          lineToRelative(-1.6F, 4.0F)
          horizontalLineTo(3.384F)
          close()
          moveToRelative(2.775F, 1.0F)
          lineToRelative(2.267F, 5.829F)
          lineTo(3.567F, 9.0F)
          horizontalLineToRelative(2.591F)
          close()
          moveTo(10.0F, 16.12F)
          lineTo(7.231F, 9.0F)
          horizontalLineToRelative(5.538F)
          lineTo(10.0F, 16.12F)
          close()
          moveTo(7.239F, 8.0F)
          lineToRelative(1.6F, -4.0F)
          horizontalLineToRelative(2.322F)
          lineToRelative(1.6F, 4.0F)
          horizontalLineTo(7.24F)
          close()
          moveToRelative(6.6F, 0.0F)
          lineToRelative(-1.6F, -4.0F)
          horizontalLineToRelative(1.978F)
          lineToRelative(2.4F, 4.0F)
          horizontalLineToRelative(-2.779F)
          close()
          moveToRelative(0.003F, 1.0F)
          horizontalLineToRelative(2.59F)
          lineToRelative(-4.857F, 5.829F)
          lineTo(13.842F, 9.0F)
          close()        
      }
    }
    return _premium20!!
  }

private var _premium20: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSplit20: ImageVector
  get() {
    if (_tableSplit20 != null) {
      return _tableSplit20!!
    }
    _tableSplit20 = fluentIcon(name = "Filled.TableSplit20", 20f) {
      materialPath {
          moveTo(8.0F, 6.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(2.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(7.0F, 2.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 2.0F, 3.0F, 2.224F, 3.0F, 2.5F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(2.0F)
          close()
          moveToRelative(6.0F, 4.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(2.5F)
          curveTo(17.0F, 2.224F, 16.776F, 2.0F, 16.5F, 2.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(4.0F, 11.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.5F)
          close()
          moveTo(12.0F, 14.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(-8.5F, 4.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(1.5F)
          curveTo(3.0F, 17.776F, 3.224F, 18.0F, 3.5F, 18.0F)
          close()
          moveToRelative(-1.0F, -8.5F)
          horizontalLineToRelative(15.005F)
          curveToRelative(0.279F, 0.0F, 0.503F, 0.227F, 0.5F, 0.505F)
          curveToRelative(-0.003F, 0.274F, -0.226F, 0.495F, -0.5F, 0.495F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 10.5F, 2.0F, 10.276F, 2.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _tableSplit20!!
  }

private var _tableSplit20: ImageVector? = null

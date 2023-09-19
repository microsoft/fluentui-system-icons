package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabletLaptop20: ImageVector
  get() {
    if (_tabletLaptop20 != null) {
      return _tabletLaptop20!!
    }
    _tabletLaptop20 = fluentIcon(name = "Filled.TabletLaptop20", 20f) {
      materialPath {
          moveTo(7.0F, 3.0F)
          curveTo(5.895F, 3.0F, 5.0F, 3.895F, 5.0F, 5.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(10.5F, 11.0F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 14.0F, 17.5F, 14.0F)
          close()
          moveToRelative(-11.0F, 0.0F)
          curveTo(6.224F, 14.0F, 6.0F, 14.224F, 6.0F, 14.5F)
          reflectiveCurveTo(6.224F, 15.0F, 6.5F, 15.0F)
          horizontalLineToRelative(2.0F)
          curveTo(8.776F, 15.0F, 9.0F, 14.776F, 9.0F, 14.5F)
          reflectiveCurveTo(8.776F, 14.0F, 8.5F, 14.0F)
          horizontalLineToRelative(-2.0F)
          close()
          moveTo(2.0F, 11.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          close()        
      }
    }
    return _tabletLaptop20!!
  }

private var _tabletLaptop20: ImageVector? = null

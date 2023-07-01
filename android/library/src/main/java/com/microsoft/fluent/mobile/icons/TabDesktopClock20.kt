package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabDesktopClock20: ImageVector
  get() {
    if (_tabDesktopClock20 != null) {
      return _tabDesktopClock20!!
    }
    _tabDesktopClock20 = fluentIcon(name = "Filled.TabDesktopClock20", 20f) {
      materialPath {
          moveTo(5.5F, 3.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(4.1F)
          curveTo(3.75F, 9.216F, 4.6F, 9.0F, 5.5F, 9.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.462F, 5.5F, 5.5F)
          curveToRelative(0.0F, 0.9F, -0.216F, 1.75F, -0.6F, 2.5F)
          horizontalLineToRelative(4.1F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(9.5F)
          curveTo(8.672F, 7.0F, 8.0F, 6.328F, 8.0F, 5.5F)
          verticalLineTo(3.0F)
          horizontalLineTo(5.5F)
          close()
          moveTo(9.0F, 3.0F)
          verticalLineToRelative(2.5F)
          curveTo(9.0F, 5.776F, 9.224F, 6.0F, 9.5F, 6.0F)
          horizontalLineTo(17.0F)
          verticalLineTo(5.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineTo(9.0F)
          close()
          moveTo(5.5F, 19.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(7.985F, 10.0F, 5.5F, 10.0F)
          reflectiveCurveTo(1.0F, 12.015F, 1.0F, 14.5F)
          reflectiveCurveTo(3.015F, 19.0F, 5.5F, 19.0F)
          close()
          moveToRelative(0.0F, -7.0F)
          curveTo(5.776F, 12.0F, 6.0F, 12.224F, 6.0F, 12.5F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(7.276F, 15.0F, 7.0F, 15.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 15.0F, 5.0F, 14.776F, 5.0F, 14.5F)
          verticalLineToRelative(-2.0F)
          curveTo(5.0F, 12.224F, 5.224F, 12.0F, 5.5F, 12.0F)
          close()        
      }
    }
    return _tabDesktopClock20!!
  }

private var _tabDesktopClock20: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TabDesktopClock20: ImageVector
  get() {
    if (_tabDesktopClock20 != null) {
      return _tabDesktopClock20!!
    }
    _tabDesktopClock20 = fluentIcon(name = "Regular.TabDesktopClock20", 20f) {
      materialPath {
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-4.1F)
          curveToRelative(0.162F, -0.317F, 0.294F, -0.651F, 0.393F, -1.0F)
          horizontalLineTo(14.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(9.5F)
          curveTo(8.672F, 7.0F, 8.0F, 6.328F, 8.0F, 5.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 4.0F, 4.0F, 4.672F, 4.0F, 5.5F)
          verticalLineToRelative(3.707F)
          curveTo(3.651F, 9.306F, 3.317F, 9.437F, 3.0F, 9.6F)
          verticalLineTo(5.5F)
          close()
          moveTo(16.0F, 6.0F)
          verticalLineTo(5.5F)
          curveTo(16.0F, 4.672F, 15.328F, 4.0F, 14.5F, 4.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(1.5F)
          curveTo(9.0F, 5.776F, 9.224F, 6.0F, 9.5F, 6.0F)
          horizontalLineTo(16.0F)
          close()
          moveToRelative(-6.0F, 8.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(1.0F, 16.985F, 1.0F, 14.5F)
          reflectiveCurveTo(3.015F, 10.0F, 5.5F, 10.0F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveTo(5.5F, 12.0F)
          curveTo(5.224F, 12.0F, 5.0F, 12.224F, 5.0F, 12.5F)
          verticalLineToRelative(2.0F)
          curveTo(5.0F, 14.776F, 5.224F, 15.0F, 5.5F, 15.0F)
          horizontalLineTo(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(7.276F, 14.0F, 7.0F, 14.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-1.5F)
          curveTo(6.0F, 12.224F, 5.776F, 12.0F, 5.5F, 12.0F)
          close()        
      }
    }
    return _tabDesktopClock20!!
  }

private var _tabDesktopClock20: ImageVector? = null

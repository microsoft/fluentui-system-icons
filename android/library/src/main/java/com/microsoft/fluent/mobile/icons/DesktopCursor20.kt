package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DesktopCursor20: ImageVector
  get() {
    if (_desktopCursor20 != null) {
      return _desktopCursor20!!
    }
    _desktopCursor20 = fluentIcon(name = "Filled.DesktopCursor20", 20f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(2.672F, 2.0F, 2.0F, 2.672F, 2.0F, 3.5F)
          verticalLineToRelative(10.0F)
          curveTo(2.0F, 14.328F, 2.672F, 15.0F, 3.5F, 15.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 17.0F, 5.0F, 17.224F, 5.0F, 17.5F)
          reflectiveCurveTo(5.224F, 18.0F, 5.5F, 18.0F)
          horizontalLineTo(11.0F)
          lineToRelative(0.001F, -1.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(3.002F)
          lineToRelative(0.003F, -4.5F)
          curveToRelative(0.0F, -0.606F, 0.364F, -1.152F, 0.923F, -1.385F)
          curveToRelative(0.559F, -0.232F, 1.203F, -0.107F, 1.633F, 0.32F)
          lineToRelative(4.408F, 4.368F)
          curveTo(17.99F, 13.705F, 18.0F, 13.603F, 18.0F, 13.5F)
          verticalLineToRelative(-10.0F)
          curveTo(18.0F, 2.672F, 17.328F, 2.0F, 16.5F, 2.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(9.357F, 8.145F)
          curveToRelative(-0.143F, -0.142F, -0.358F, -0.184F, -0.544F, -0.106F)
          curveToRelative(-0.187F, 0.077F, -0.308F, 0.259F, -0.308F, 0.46F)
          lineTo(12.0F, 18.5F)
          curveToRelative(0.0F, 0.214F, 0.138F, 0.405F, 0.342F, 0.474F)
          curveToRelative(0.204F, 0.068F, 0.428F, -0.002F, 0.558F, -0.174F)
          lineToRelative(1.995F, -2.646F)
          lineToRelative(3.496F, 0.776F)
          curveToRelative(0.218F, 0.048F, 0.44F, -0.054F, 0.548F, -0.25F)
          curveToRelative(0.106F, -0.195F, 0.07F, -0.437F, -0.087F, -0.594F)
          lineToRelative(-5.995F, -5.94F)
          close()        
      }
    }
    return _desktopCursor20!!
  }

private var _desktopCursor20: ImageVector? = null

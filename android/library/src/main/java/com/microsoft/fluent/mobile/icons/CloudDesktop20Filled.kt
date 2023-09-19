package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudDesktop20: ImageVector
  get() {
    if (_cloudDesktop20 != null) {
      return _cloudDesktop20!!
    }
    _cloudDesktop20 = fluentIcon(name = "Filled.CloudDesktop20", 20f) {
      materialPath {
          moveTo(10.0F, 4.0F)
          curveToRelative(2.817F, 0.0F, 4.415F, 1.923F, 4.647F, 4.246F)
          horizontalLineToRelative(0.07F)
          curveToRelative(1.242F, 0.0F, 2.322F, 0.709F, 2.88F, 1.754F)
          horizontalLineTo(11.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(5.282F)
          curveTo(3.47F, 15.0F, 2.0F, 13.488F, 2.0F, 11.623F)
          curveToRelative(0.0F, -1.865F, 1.47F, -3.377F, 3.282F, -3.377F)
          horizontalLineToRelative(0.071F)
          curveTo(5.587F, 5.908F, 7.183F, 4.0F, 10.0F, 4.0F)
          close()
          moveToRelative(0.0F, 8.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(0.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(16.776F, 19.0F, 16.5F, 19.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(-2.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-4.0F)
          close()        
      }
    }
    return _cloudDesktop20!!
  }

private var _cloudDesktop20: ImageVector? = null

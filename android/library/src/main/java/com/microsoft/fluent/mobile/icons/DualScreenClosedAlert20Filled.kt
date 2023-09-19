package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DualScreenClosedAlert20: ImageVector
  get() {
    if (_dualScreenClosedAlert20 != null) {
      return _dualScreenClosedAlert20!!
    }
    _dualScreenClosedAlert20 = fluentIcon(name = "Filled.DualScreenClosedAlert20", 20f) {
      materialPath {
          moveTo(10.5F, 5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(1.656F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(2.0F)
          lineToRelative(1.32F, 1.119F)
          curveTo(18.174F, 8.419F, 17.961F, 9.0F, 17.495F, 9.0F)
          horizontalLineTo(9.503F)
          curveTo(9.037F, 9.0F, 8.825F, 8.42F, 9.18F, 8.119F)
          lineTo(10.5F, 7.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(3.0F, 6.0F)
          curveToRelative(-0.653F, 0.0F, -1.21F, -0.418F, -1.415F, -1.0F)
          horizontalLineToRelative(2.829F)
          curveToRelative(-0.206F, 0.582F, -0.761F, 1.0F, -1.415F, 1.0F)
          close()
          moveToRelative(-4.0F, -4.463F)
          lineTo(8.532F, 7.356F)
          curveTo(7.468F, 8.259F, 8.106F, 10.0F, 9.503F, 10.0F)
          horizontalLineToRelative(1.52F)
          lineToRelative(0.119F, 0.334F)
          curveTo(11.485F, 11.303F, 12.409F, 12.0F, 13.499F, 12.0F)
          curveToRelative(0.172F, 0.0F, 0.34F, -0.017F, 0.501F, -0.05F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.5F)
          verticalLineToRelative(1.537F)
          close()        
      }
    }
    return _dualScreenClosedAlert20!!
  }

private var _dualScreenClosedAlert20: ImageVector? = null

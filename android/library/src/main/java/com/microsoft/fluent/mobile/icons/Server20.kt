package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Server20: ImageVector
  get() {
    if (_server20 != null) {
      return _server20!!
    }
    _server20 = fluentIcon(name = "Filled.Server20", 20f) {
      materialPath {
          moveTo(7.5F, 2.0F)
          curveTo(6.12F, 2.0F, 5.0F, 3.12F, 5.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveTo(5.0F, 16.88F, 6.12F, 18.0F, 7.5F, 18.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-11.0F)
          curveTo(15.0F, 3.12F, 13.88F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(7.0F, 5.5F)
          curveTo(7.0F, 5.224F, 7.224F, 5.0F, 7.5F, 5.0F)
          horizontalLineToRelative(5.0F)
          curveTo(12.776F, 5.0F, 13.0F, 5.224F, 13.0F, 5.5F)
          reflectiveCurveTo(12.776F, 6.0F, 12.5F, 6.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(7.224F, 6.0F, 7.0F, 5.776F, 7.0F, 5.5F)
          close()
          moveToRelative(0.0F, 7.0F)
          curveTo(7.0F, 12.224F, 7.224F, 12.0F, 7.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(12.776F, 13.0F, 12.5F, 13.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(7.224F, 13.0F, 7.0F, 12.776F, 7.0F, 12.5F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveTo(7.0F, 14.224F, 7.224F, 14.0F, 7.5F, 14.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(12.776F, 15.0F, 12.5F, 15.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(7.224F, 15.0F, 7.0F, 14.776F, 7.0F, 14.5F)
          close()        
      }
    }
    return _server20!!
  }

private var _server20: ImageVector? = null

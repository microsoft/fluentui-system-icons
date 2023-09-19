package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Mail20: ImageVector
  get() {
    if (_mail20 != null) {
      return _mail20!!
    }
    _mail20 = fluentIcon(name = "Regular.Mail20", 20f) {
      materialPath {
          moveTo(15.5F, 4.0F)
          curveTo(16.88F, 4.0F, 18.0F, 5.12F, 18.0F, 6.5F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.12F, 17.0F, 2.0F, 15.88F, 2.0F, 14.5F)
          verticalLineToRelative(-8.0F)
          curveTo(2.0F, 5.12F, 3.12F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(11.0F)
          close()
          moveTo(17.0F, 7.961F)
          lineToRelative(-6.746F, 3.97F)
          curveToRelative(-0.13F, 0.077F, -0.287F, 0.09F, -0.426F, 0.038F)
          lineToRelative(-0.082F, -0.038F)
          lineTo(3.0F, 7.963F)
          verticalLineTo(14.5F)
          curveTo(3.0F, 15.328F, 3.672F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(7.961F)
          close()
          moveTo(15.5F, 5.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.672F, 5.0F, 3.0F, 5.672F, 3.0F, 6.5F)
          verticalLineToRelative(0.302F)
          lineToRelative(7.0F, 4.118F)
          lineToRelative(7.0F, -4.12F)
          verticalLineTo(6.5F)
          curveTo(17.0F, 5.672F, 16.328F, 5.0F, 15.5F, 5.0F)
          close()        
      }
    }
    return _mail20!!
  }

private var _mail20: ImageVector? = null

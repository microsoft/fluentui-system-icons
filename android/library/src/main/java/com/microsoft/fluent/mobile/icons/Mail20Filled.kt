package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mail20: ImageVector
  get() {
    if (_mail20 != null) {
      return _mail20!!
    }
    _mail20 = fluentIcon(name = "Filled.Mail20", 20f) {
      materialPath {
          moveTo(18.0F, 7.373F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.12F, 17.0F, 2.0F, 15.88F, 2.0F, 14.5F)
          verticalLineTo(7.373F)
          lineToRelative(7.746F, 4.558F)
          curveToRelative(0.157F, 0.092F, 0.351F, 0.092F, 0.508F, 0.0F)
          lineTo(18.0F, 7.373F)
          close()
          moveTo(15.5F, 4.0F)
          curveToRelative(1.287F, 0.0F, 2.347F, 0.973F, 2.485F, 2.223F)
          lineTo(10.0F, 10.92F)
          lineTo(2.015F, 6.223F)
          curveTo(2.153F, 4.973F, 3.213F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(11.0F)
          close()        
      }
    }
    return _mail20!!
  }

private var _mail20: ImageVector? = null

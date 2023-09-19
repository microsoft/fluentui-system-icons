package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Alert48: ImageVector
  get() {
    if (_alert48 != null) {
      return _alert48!!
    }
    _alert48 = fluentIcon(name = "Filled.Alert48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveTo(15.716F, 4.0F, 9.0F, 10.716F, 9.0F, 19.0F)
          verticalLineToRelative(8.486F)
          lineToRelative(-2.804F, 6.356F)
          curveTo(5.54F, 35.329F, 6.629F, 37.0F, 8.254F, 37.0F)
          horizontalLineToRelative(31.492F)
          curveToRelative(1.625F, 0.0F, 2.715F, -1.671F, 2.058F, -3.158F)
          lineTo(39.0F, 27.487F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, -8.284F, -6.716F, -15.0F, -15.0F, -15.0F)
          close()
          moveToRelative(0.0F, 40.0F)
          curveToRelative(-2.973F, 0.0F, -5.44F, -2.162F, -5.917F, -5.0F)
          horizontalLineToRelative(11.834F)
          curveToRelative(-0.476F, 2.838F, -2.944F, 5.0F, -5.917F, 5.0F)
          close()        
      }
    }
    return _alert48!!
  }

private var _alert48: ImageVector? = null

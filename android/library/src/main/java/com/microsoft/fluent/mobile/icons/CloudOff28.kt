package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudOff28: ImageVector
  get() {
    if (_cloudOff28 != null) {
      return _cloudOff28!!
    }
    _cloudOff28 = fluentIcon(name = "Filled.CloudOff28", 28f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(6.085F, 6.085F)
          curveTo(7.868F, 10.157F, 7.59F, 11.05F, 7.519F, 12.0F)
          horizontalLineTo(7.25F)
          curveToRelative(-2.623F, 0.0F, -4.75F, 2.127F, -4.75F, 4.75F)
          reflectiveCurveToRelative(2.127F, 4.75F, 4.75F, 4.75F)
          horizontalLineToRelative(13.189F)
          lineToRelative(4.28F, 4.28F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(7.041F, 4.92F)
          lineToRelative(13.353F, 13.353F)
          curveToRelative(1.112F, -0.869F, 1.826F, -2.223F, 1.826F, -3.743F)
          curveToRelative(0.0F, -2.623F, -2.127F, -4.75F, -4.75F, -4.75F)
          horizontalLineToRelative(-0.269F)
          curveTo(20.226F, 8.644F, 17.421F, 6.0F, 14.0F, 6.0F)
          curveToRelative(-1.365F, 0.0F, -2.633F, 0.421F, -3.679F, 1.14F)
          close()        
      }
    }
    return _cloudOff28!!
  }

private var _cloudOff28: ImageVector? = null

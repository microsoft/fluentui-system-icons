package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Bluetooth32: ImageVector
  get() {
    if (_bluetooth32 != null) {
      return _bluetooth32!!
    }
    _bluetooth32 = fluentIcon(name = "Regular.Bluetooth32", 32f) {
      materialPath {
          moveTo(15.6F, 2.083F)
          curveToRelative(0.365F, -0.159F, 0.789F, -0.086F, 1.08F, 0.184F)
          lineToRelative(7.0F, 6.5F)
          curveTo(23.884F, 8.957F, 24.0F, 9.222F, 24.0F, 9.5F)
          curveToRelative(0.0F, 0.278F, -0.116F, 0.544F, -0.32F, 0.733F)
          lineTo(17.47F, 16.0F)
          lineToRelative(6.21F, 5.767F)
          curveTo(23.884F, 21.957F, 24.0F, 22.222F, 24.0F, 22.5F)
          curveToRelative(0.0F, 0.278F, -0.116F, 0.544F, -0.32F, 0.733F)
          lineToRelative(-7.0F, 6.5F)
          curveToRelative(-0.291F, 0.27F, -0.715F, 0.343F, -1.08F, 0.184F)
          curveToRelative(-0.364F, -0.16F, -0.6F, -0.52F, -0.6F, -0.917F)
          verticalLineTo(18.293F)
          lineToRelative(-5.32F, 4.94F)
          curveToRelative(-0.404F, 0.376F, -1.037F, 0.352F, -1.413F, -0.053F)
          curveToRelative(-0.376F, -0.404F, -0.352F, -1.037F, 0.053F, -1.413F)
          lineTo(14.53F, 16.0F)
          lineToRelative(-6.21F, -5.767F)
          curveTo(7.914F, 9.857F, 7.89F, 9.224F, 8.266F, 8.819F)
          curveTo(8.642F, 8.415F, 9.275F, 8.391F, 9.68F, 8.767F)
          lineToRelative(5.32F, 4.94F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.398F, 0.236F, -0.758F, 0.6F, -0.917F)
          close()
          moveToRelative(1.4F, 16.21F)
          verticalLineToRelative(8.414F)
          lineToRelative(4.53F, -4.207F)
          lineTo(17.0F, 18.293F)
          close()
          moveToRelative(0.0F, -4.586F)
          lineTo(21.53F, 9.5F)
          lineTo(17.0F, 5.293F)
          verticalLineToRelative(8.414F)
          close()        
      }
    }
    return _bluetooth32!!
  }

private var _bluetooth32: ImageVector? = null

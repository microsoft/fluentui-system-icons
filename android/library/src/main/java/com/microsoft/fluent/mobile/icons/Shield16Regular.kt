package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Shield16: ImageVector
  get() {
    if (_shield16 != null) {
      return _shield16!!
    }
    _shield16 = fluentIcon(name = "Regular.Shield16", 16f) {
      materialPath {
          moveTo(7.647F, 2.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveTo(9.595F, 3.39F, 10.969F, 4.0F, 12.5F, 4.0F)
          curveTo(12.776F, 4.0F, 13.0F, 4.224F, 13.0F, 4.5F)
          verticalLineToRelative(3.001F)
          curveToRelative(0.0F, 3.219F, -1.641F, 5.407F, -4.842F, 6.473F)
          curveToRelative(-0.102F, 0.035F, -0.213F, 0.035F, -0.316F, 0.0F)
          curveTo(4.642F, 12.908F, 3.0F, 10.72F, 3.0F, 7.501F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 4.224F, 3.224F, 4.0F, 3.5F, 4.0F)
          curveToRelative(1.53F, 0.0F, 2.904F, -0.611F, 4.147F, -1.854F)
          close()
          moveTo(8.0F, 3.19F)
          curveTo(6.814F, 4.255F, 5.48F, 4.87F, 4.0F, 4.981F)
          verticalLineToRelative(2.52F)
          curveToRelative(0.0F, 1.434F, 0.363F, 2.564F, 1.021F, 3.444F)
          curveTo(5.66F, 11.797F, 6.63F, 12.488F, 8.0F, 12.972F)
          curveToRelative(1.37F, -0.483F, 2.341F, -1.175F, 2.979F, -2.027F)
          curveTo(11.637F, 10.065F, 12.0F, 8.935F, 12.0F, 7.501F)
          verticalLineToRelative(-2.52F)
          curveTo(10.52F, 4.87F, 9.185F, 4.255F, 8.0F, 3.19F)
          close()        
      }
    }
    return _shield16!!
  }

private var _shield16: ImageVector? = null

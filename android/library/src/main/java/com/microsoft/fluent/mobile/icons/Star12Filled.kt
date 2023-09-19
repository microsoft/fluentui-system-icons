package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Star12: ImageVector
  get() {
    if (_star12 != null) {
      return _star12!!
    }
    _star12 = fluentIcon(name = "Filled.Star12", 12f) {
      materialPath {
          moveTo(5.284F, 1.546F)
          curveToRelative(0.293F, -0.595F, 1.14F, -0.595F, 1.434F, 0.0F)
          lineTo(7.83F, 3.798F)
          lineToRelative(2.486F, 0.361F)
          curveToRelative(0.656F, 0.096F, 0.918F, 0.902F, 0.443F, 1.365F)
          lineTo(8.96F, 7.277F)
          lineToRelative(0.425F, 2.476F)
          curveToRelative(0.112F, 0.654F, -0.574F, 1.152F, -1.16F, 0.844F)
          lineTo(6.0F, 9.427F)
          lineToRelative(-2.224F, 1.17F)
          curveToRelative(-0.587F, 0.308F, -1.272F, -0.19F, -1.16F, -0.844F)
          lineTo(3.04F, 7.277F)
          lineTo(1.243F, 5.524F)
          curveTo(0.767F, 5.06F, 1.03F, 4.254F, 1.685F, 4.159F)
          lineTo(4.172F, 3.8F)
          lineToRelative(1.112F, -2.253F)
          close()        
      }
    }
    return _star12!!
  }

private var _star12: ImageVector? = null

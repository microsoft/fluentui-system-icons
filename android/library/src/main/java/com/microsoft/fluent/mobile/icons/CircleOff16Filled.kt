package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleOff16: ImageVector
  get() {
    if (_circleOff16 != null) {
      return _circleOff16!!
    }
    _circleOff16 = fluentIcon(name = "Filled.CircleOff16", 16f) {
      materialPath {
          moveTo(11.874F, 12.582F)
          lineToRelative(2.272F, 2.272F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.272F, 2.272F)
          curveTo(2.534F, 5.17F, 2.0F, 6.523F, 2.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, 2.686F, 6.0F, 6.0F, 6.0F)
          curveToRelative(1.477F, 0.0F, 2.83F, -0.534F, 3.874F, -1.418F)
          close()
          moveTo(14.0F, 8.0F)
          curveToRelative(0.0F, 1.113F, -0.303F, 2.155F, -0.83F, 3.048F)
          lineTo(4.951F, 2.83F)
          curveTo(5.845F, 2.303F, 6.887F, 2.0F, 8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          close()        
      }
    }
    return _circleOff16!!
  }

private var _circleOff16: ImageVector? = null

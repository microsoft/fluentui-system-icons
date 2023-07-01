package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleOff16: ImageVector
  get() {
    if (_circleOff16 != null) {
      return _circleOff16!!
    }
    _circleOff16 = fluentIcon(name = "Regular.CircleOff16", 16f) {
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
          moveToRelative(-0.71F, -0.71F)
          curveTo(10.302F, 12.576F, 9.201F, 13.0F, 8.0F, 13.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          curveToRelative(0.0F, -1.2F, 0.423F, -2.302F, 1.128F, -3.164F)
          lineToRelative(7.036F, 7.035F)
          close()
          moveTo(13.0F, 8.0F)
          curveToRelative(0.0F, 0.834F, -0.204F, 1.621F, -0.566F, 2.313F)
          lineToRelative(0.735F, 0.735F)
          curveTo(13.697F, 10.155F, 14.0F, 9.113F, 14.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          curveToRelative(-1.113F, 0.0F, -2.155F, 0.303F, -3.048F, 0.83F)
          lineToRelative(0.735F, 0.736F)
          curveTo(6.38F, 3.204F, 7.166F, 3.0F, 8.0F, 3.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          close()        
      }
    }
    return _circleOff16!!
  }

private var _circleOff16: ImageVector? = null

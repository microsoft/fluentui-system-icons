package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Play20: ImageVector
  get() {
    if (_play20 != null) {
      return _play20!!
    }
    _play20 = fluentIcon(name = "Regular.Play20", 20f) {
      materialPath {
          moveTo(17.22F, 8.687F)
          curveToRelative(1.036F, 0.57F, 1.036F, 2.056F, 0.0F, 2.626F)
          lineToRelative(-9.997F, 5.499F)
          curveTo(6.223F, 17.362F, 5.0F, 16.639F, 5.0F, 15.499F)
          verticalLineTo(4.501F)
          curveToRelative(0.0F, -1.14F, 1.224F, -1.863F, 2.223F, -1.313F)
          lineToRelative(9.997F, 5.499F)
          close()
          moveToRelative(-0.482F, 1.75F)
          curveToRelative(0.345F, -0.19F, 0.345F, -0.685F, 0.0F, -0.875F)
          lineTo(6.741F, 4.063F)
          curveTo(6.408F, 3.88F, 6.0F, 4.121F, 6.0F, 4.501F)
          verticalLineToRelative(10.998F)
          curveToRelative(0.0F, 0.38F, 0.408F, 0.621F, 0.741F, 0.438F)
          lineToRelative(9.997F, -5.5F)
          close()        
      }
    }
    return _play20!!
  }

private var _play20: ImageVector? = null

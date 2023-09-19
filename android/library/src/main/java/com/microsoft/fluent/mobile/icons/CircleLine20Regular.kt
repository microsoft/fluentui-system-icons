package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleLine20: ImageVector
  get() {
    if (_circleLine20 != null) {
      return _circleLine20!!
    }
    _circleLine20 = fluentIcon(name = "Regular.CircleLine20", 20f) {
      materialPath {
          moveTo(3.018F, 9.5F)
          horizontalLineToRelative(13.964F)
          curveTo(16.726F, 5.867F, 13.698F, 3.0F, 10.0F, 3.0F)
          curveTo(6.302F, 3.0F, 3.274F, 5.867F, 3.018F, 9.5F)
          close()
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(14.982F, 0.5F)
          horizontalLineTo(3.018F)
          curveTo(3.274F, 14.133F, 6.302F, 17.0F, 10.0F, 17.0F)
          curveToRelative(3.698F, 0.0F, 6.726F, -2.867F, 6.982F, -6.5F)
          close()        
      }
    }
    return _circleLine20!!
  }

private var _circleLine20: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.InkingToolAccent24: ImageVector
  get() {
    if (_inkingToolAccent24 != null) {
      return _inkingToolAccent24!!
    }
    _inkingToolAccent24 = fluentIcon(name = "Filled.InkingToolAccent24", 24f) {
      materialPath {
          moveTo(4.0F, 7.0F)
          horizontalLineToRelative(16.25F)
          curveToRelative(0.118F, 0.0F, 0.218F, -0.082F, 0.243F, -0.193F)
          lineTo(20.5F, 6.75F)
          verticalLineTo(3.0F)
          horizontalLineTo(3.75F)
          verticalLineToRelative(3.75F)
          curveToRelative(0.0F, 0.118F, 0.082F, 0.218F, 0.193F, 0.243F)
          lineTo(4.0F, 7.0F)
          close()
          moveToRelative(7.976F, 6.946F)
          lineToRelative(2.641F, -5.947F)
          lineTo(15.5F, 7.5F)
          lineToRelative(0.758F, 0.499F)
          lineToRelative(-2.911F, 6.556F)
          curveTo(13.227F, 14.825F, 12.957F, 15.0F, 12.66F, 15.0F)
          curveToRelative(-0.542F, 0.0F, -0.905F, -0.558F, -0.685F, -1.054F)
          close()
          moveTo(13.0F, 19.0F)
          curveToRelative(0.0F, 1.105F, -0.448F, 2.0F, -1.0F, 2.0F)
          reflectiveCurveToRelative(-1.0F, -0.895F, -1.0F, -2.0F)
          reflectiveCurveToRelative(0.448F, -2.0F, 1.0F, -2.0F)
          reflectiveCurveToRelative(1.0F, 0.895F, 1.0F, 2.0F)
          close()        
      }
    }
    return _inkingToolAccent24!!
  }

private var _inkingToolAccent24: ImageVector? = null

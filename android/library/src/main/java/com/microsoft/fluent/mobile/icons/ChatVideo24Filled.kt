package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatVideo24: ImageVector
  get() {
    if (_chatVideo24 != null) {
      return _chatVideo24!!
    }
    _chatVideo24 = fluentIcon(name = "Filled.ChatVideo24", 24f) {
      materialPath {
          moveTo(22.0F, 12.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          curveToRelative(0.0F, 1.643F, 0.397F, 3.23F, 1.145F, 4.65F)
          lineToRelative(-1.116F, 4.29F)
          curveToRelative(-0.037F, 0.14F, -0.037F, 0.288F, 0.0F, 0.428F)
          curveToRelative(0.118F, 0.454F, 0.582F, 0.727F, 1.036F, 0.608F)
          lineToRelative(4.29F, -1.117F)
          curveTo(8.776F, 21.604F, 10.36F, 22.0F, 12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          close()
          moveTo(12.0F, 8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(3.0F, 5.162F)
          verticalLineToRelative(-2.324F)
          lineToRelative(1.734F, -1.642F)
          curveTo(17.212F, 8.744F, 18.0F, 9.083F, 18.0F, 9.741F)
          verticalLineToRelative(4.518F)
          curveToRelative(0.0F, 0.658F, -0.788F, 0.997F, -1.266F, 0.545F)
          lineTo(15.0F, 13.162F)
          close()        
      }
    }
    return _chatVideo24!!
  }

private var _chatVideo24: ImageVector? = null

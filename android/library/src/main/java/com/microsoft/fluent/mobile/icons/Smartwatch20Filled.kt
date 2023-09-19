package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Smartwatch20: ImageVector
  get() {
    if (_smartwatch20 != null) {
      return _smartwatch20!!
    }
    _smartwatch20 = fluentIcon(name = "Filled.Smartwatch20", 20f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(6.895F, 2.0F, 6.0F, 2.896F, 6.0F, 4.0F)
          verticalLineToRelative(0.17F)
          curveTo(6.313F, 4.06F, 6.65F, 4.0F, 7.0F, 4.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.35F, 0.0F, 0.687F, 0.06F, 1.0F, 0.17F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.104F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(8.0F)
          close()
          moveTo(7.0F, 5.0F)
          curveTo(5.895F, 5.0F, 5.0F, 5.895F, 5.0F, 7.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(0.0F, 11.0F)
          curveToRelative(-0.35F, 0.0F, -0.687F, -0.06F, -1.0F, -0.17F)
          verticalLineTo(16.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-0.17F)
          curveTo(13.687F, 15.94F, 13.35F, 16.0F, 13.0F, 16.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _smartwatch20!!
  }

private var _smartwatch20: ImageVector? = null

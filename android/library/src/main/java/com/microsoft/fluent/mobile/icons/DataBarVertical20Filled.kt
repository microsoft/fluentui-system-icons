package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataBarVertical20: ImageVector
  get() {
    if (_dataBarVertical20 != null) {
      return _dataBarVertical20!!
    }
    _dataBarVertical20 = fluentIcon(name = "Filled.DataBarVertical20", 20f) {
      materialPath {
          moveTo(5.0F, 3.0F)
          curveTo(3.895F, 3.0F, 3.0F, 3.895F, 3.0F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(5.0F, 3.0F)
          curveTo(8.895F, 6.0F, 8.0F, 6.895F, 8.0F, 8.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(5.0F, 3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()        
      }
    }
    return _dataBarVertical20!!
  }

private var _dataBarVertical20: ImageVector? = null

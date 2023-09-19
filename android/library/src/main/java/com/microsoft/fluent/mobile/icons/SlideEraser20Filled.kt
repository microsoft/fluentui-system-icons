package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideEraser20: ImageVector
  get() {
    if (_slideEraser20 != null) {
      return _slideEraser20!!
    }
    _slideEraser20 = fluentIcon(name = "Filled.SlideEraser20", 20f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(5.07F)
          lineToRelative(-0.41F, -0.41F)
          curveToRelative(-0.878F, -0.879F, -2.303F, -0.879F, -3.182F, 0.0F)
          lineToRelative(-3.749F, 3.75F)
          curveTo(10.219F, 14.848F, 10.0F, 15.423F, 10.0F, 16.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(13.116F, 5.366F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.767F, 0.0F)
          lineToRelative(1.75F, 1.75F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(-2.576F, 2.575F)
          lineToRelative(-3.518F, -3.516F)
          lineToRelative(2.577F, -2.577F)
          close()
          moveToRelative(-3.175F, 3.175F)
          lineToRelative(-0.575F, 0.575F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(1.75F, 1.749F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.767F, 0.0F)
          lineToRelative(0.576F, -0.575F)
          lineToRelative(-3.518F, -3.517F)
          close()        
      }
    }
    return _slideEraser20!!
  }

private var _slideEraser20: ImageVector? = null

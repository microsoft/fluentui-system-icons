package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SlideEraser20: ImageVector
  get() {
    if (_slideEraser20 != null) {
      return _slideEraser20!!
    }
    _slideEraser20 = fluentIcon(name = "Regular.SlideEraser20", 20f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.0F, -0.343F, 0.078F, -0.686F, 0.234F, -1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(4.235F)
          curveToRelative(0.213F, 0.106F, 0.413F, 0.248F, 0.59F, 0.425F)
          lineTo(18.0F, 11.07F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(11.116F, 7.366F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.767F, 0.0F)
          lineToRelative(1.75F, 1.75F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(-2.575F, 2.575F)
          lineToRelative(-3.518F, -3.517F)
          lineToRelative(2.576F, -2.576F)
          close()
          moveTo(11.94F, 14.54F)
          lineToRelative(-0.575F, 0.576F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(1.75F, 1.749F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.767F, 0.0F)
          lineToRelative(0.577F, -0.576F)
          lineToRelative(-3.519F, -3.517F)
          close()        
      }
    }
    return _slideEraser20!!
  }

private var _slideEraser20: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PersonSquare20: ImageVector
  get() {
    if (_personSquare20 != null) {
      return _personSquare20!!
    }
    _personSquare20 = fluentIcon(name = "Regular.PersonSquare20", 20f) {
      materialPath {
          moveTo(10.0F, 5.0F)
          curveTo(8.895F, 5.0F, 8.0F, 5.895F, 8.0F, 7.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(2.5F, 5.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(6.672F, 10.0F, 6.0F, 10.672F, 6.0F, 11.5F)
          curveToRelative(0.0F, 1.116F, 0.459F, 2.01F, 1.212F, 2.615F)
          curveTo(7.953F, 14.71F, 8.947F, 15.0F, 10.0F, 15.0F)
          curveToRelative(1.053F, 0.0F, 2.047F, -0.29F, 2.788F, -0.885F)
          curveTo(13.54F, 13.51F, 14.0F, 12.616F, 14.0F, 11.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          close()
          moveTo(6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()
          moveTo(4.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()        
      }
    }
    return _personSquare20!!
  }

private var _personSquare20: ImageVector? = null

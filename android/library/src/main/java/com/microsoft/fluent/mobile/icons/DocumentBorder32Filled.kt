package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentBorder32: ImageVector
  get() {
    if (_documentBorder32 != null) {
      return _documentBorder32!!
    }
    _documentBorder32 = fluentIcon(name = "Filled.DocumentBorder32", 32f) {
      materialPath {
          moveTo(9.0F, 2.0F)
          curveTo(6.79F, 2.0F, 5.0F, 3.79F, 5.0F, 6.0F)
          verticalLineToRelative(20.0F)
          curveToRelative(0.0F, 2.21F, 1.79F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineTo(9.0F)
          close()
          moveTo(7.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(20.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.25F, 0.0F)
          curveTo(9.56F, 6.0F, 9.0F, 6.56F, 9.0F, 7.25F)
          verticalLineToRelative(17.5F)
          curveTo(9.0F, 25.44F, 9.56F, 26.0F, 10.25F, 26.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(7.25F)
          curveTo(23.0F, 6.56F, 22.44F, 6.0F, 21.75F, 6.0F)
          horizontalLineToRelative(-11.5F)
          close()        
      }
    }
    return _documentBorder32!!
  }

private var _documentBorder32: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SlideEraser16: ImageVector
  get() {
    if (_slideEraser16 != null) {
      return _slideEraser16!!
    }
    _slideEraser16 = fluentIcon(name = "Regular.SlideEraser16", 16f) {
      materialPath {
          moveTo(1.0F, 3.75F)
          curveTo(1.0F, 2.784F, 1.784F, 2.0F, 2.75F, 2.0F)
          horizontalLineToRelative(10.5F)
          curveTo(14.216F, 2.0F, 15.0F, 2.784F, 15.0F, 3.75F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-0.07F)
          lineTo(14.0F, 7.07F)
          verticalLineTo(3.75F)
          curveTo(14.0F, 3.336F, 13.664F, 3.0F, 13.25F, 3.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 3.0F, 2.0F, 3.336F, 2.0F, 3.75F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 10.664F, 2.336F, 11.0F, 2.75F, 11.0F)
          horizontalLineToRelative(3.484F)
          curveTo(6.078F, 11.314F, 6.0F, 11.657F, 6.0F, 12.0F)
          horizontalLineTo(2.75F)
          curveTo(1.784F, 12.0F, 1.0F, 11.216F, 1.0F, 10.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveToRelative(10.116F, 3.616F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.767F, 0.0F)
          lineToRelative(1.75F, 1.75F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(-2.576F, 2.575F)
          lineTo(8.54F, 9.943F)
          lineToRelative(2.577F, -2.577F)
          close()
          moveTo(7.94F, 10.541F)
          lineToRelative(-0.575F, 0.575F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(1.75F, 1.749F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.767F, 0.0F)
          lineToRelative(0.576F, -0.575F)
          lineTo(7.94F, 10.54F)
          close()        
      }
    }
    return _slideEraser16!!
  }

private var _slideEraser16: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DocumentBorder20: ImageVector
  get() {
    if (_documentBorder20 != null) {
      return _documentBorder20!!
    }
    _documentBorder20 = fluentIcon(name = "Regular.DocumentBorder20", 20f) {
      materialPath {
          moveTo(6.5F, 2.0F)
          curveTo(5.12F, 2.0F, 4.0F, 3.12F, 4.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveTo(4.0F, 16.88F, 5.12F, 18.0F, 6.5F, 18.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-11.0F)
          curveTo(16.0F, 3.12F, 14.88F, 2.0F, 13.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(5.0F, 4.5F)
          curveTo(5.0F, 3.672F, 5.672F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(14.328F, 3.0F, 15.0F, 3.672F, 15.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(5.672F, 17.0F, 5.0F, 16.328F, 5.0F, 15.5F)
          verticalLineToRelative(-11.0F)
          close()
          moveTo(6.75F, 4.0F)
          curveTo(6.336F, 4.0F, 6.0F, 4.336F, 6.0F, 4.75F)
          verticalLineToRelative(10.5F)
          curveTo(6.0F, 15.664F, 6.336F, 16.0F, 6.75F, 16.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.75F)
          curveTo(14.0F, 4.336F, 13.664F, 4.0F, 13.25F, 4.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveTo(7.0F, 15.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _documentBorder20!!
  }

private var _documentBorder20: ImageVector? = null

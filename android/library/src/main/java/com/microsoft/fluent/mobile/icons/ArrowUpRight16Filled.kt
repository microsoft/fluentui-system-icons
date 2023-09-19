package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpRight16: ImageVector
  get() {
    if (_arrowUpRight16 != null) {
      return _arrowUpRight16!!
    }
    _arrowUpRight16 = fluentIcon(name = "Filled.ArrowUpRight16", 16f) {
      materialPath {
          moveTo(7.0F, 2.75F)
          curveTo(7.0F, 2.336F, 7.335F, 2.0F, 7.75F, 2.0F)
          horizontalLineToRelative(5.5F)
          curveTo(13.664F, 2.0F, 14.0F, 2.336F, 14.0F, 2.75F)
          verticalLineToRelative(5.5F)
          curveTo(14.0F, 8.664F, 13.664F, 9.0F, 13.25F, 9.0F)
          curveToRelative(-0.415F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(4.56F)
          lineToRelative(-9.22F, 9.22F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(9.22F, -9.22F)
          horizontalLineTo(7.75F)
          curveTo(7.335F, 3.5F, 7.0F, 3.164F, 7.0F, 2.75F)
          close()        
      }
    }
    return _arrowUpRight16!!
  }

private var _arrowUpRight16: ImageVector? = null

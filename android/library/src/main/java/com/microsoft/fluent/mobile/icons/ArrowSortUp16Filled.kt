package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSortUp16: ImageVector
  get() {
    if (_arrowSortUp16 != null) {
      return _arrowSortUp16!!
    }
    _arrowSortUp16 = fluentIcon(name = "Filled.ArrowSortUp16", 16f) {
      materialPath {
          moveTo(7.22F, 2.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.75F, 2.75F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(8.5F, 4.56F)
          verticalLineToRelative(8.69F)
          curveTo(8.5F, 13.664F, 8.164F, 14.0F, 7.75F, 14.0F)
          reflectiveCurveTo(7.0F, 13.664F, 7.0F, 13.25F)
          verticalLineTo(4.56F)
          lineTo(5.53F, 6.03F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(2.75F, -2.75F)
          close()        
      }
    }
    return _arrowSortUp16!!
  }

private var _arrowSortUp16: ImageVector? = null

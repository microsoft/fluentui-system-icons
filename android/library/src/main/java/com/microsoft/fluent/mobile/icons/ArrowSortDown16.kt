package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSortDown16: ImageVector
  get() {
    if (_arrowSortDown16 != null) {
      return _arrowSortDown16!!
    }
    _arrowSortDown16 = fluentIcon(name = "Filled.ArrowSortDown16", 16f) {
      materialPath {
          moveTo(7.22F, 13.78F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.75F, -2.75F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(8.5F, 11.44F)
          verticalLineTo(2.75F)
          curveTo(8.5F, 2.336F, 8.164F, 2.0F, 7.75F, 2.0F)
          reflectiveCurveTo(7.0F, 2.336F, 7.0F, 2.75F)
          verticalLineToRelative(8.69F)
          lineTo(5.53F, 9.97F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.75F, 2.75F)
          close()        
      }
    }
    return _arrowSortDown16!!
  }

private var _arrowSortDown16: ImageVector? = null

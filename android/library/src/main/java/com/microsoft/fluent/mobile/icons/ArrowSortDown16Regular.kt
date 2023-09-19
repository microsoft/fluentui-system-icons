package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSortDown16: ImageVector
  get() {
    if (_arrowSortDown16 != null) {
      return _arrowSortDown16!!
    }
    _arrowSortDown16 = fluentIcon(name = "Regular.ArrowSortDown16", 16f) {
      materialPath {
          moveTo(7.146F, 13.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(8.0F, 12.293F)
          verticalLineTo(2.5F)
          curveTo(8.0F, 2.224F, 7.776F, 2.0F, 7.5F, 2.0F)
          reflectiveCurveTo(7.0F, 2.224F, 7.0F, 2.5F)
          verticalLineToRelative(9.793F)
          lineToRelative(-2.146F, -2.147F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(3.0F, 3.0F)
          close()        
      }
    }
    return _arrowSortDown16!!
  }

private var _arrowSortDown16: ImageVector? = null

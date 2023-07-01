package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSortUp16: ImageVector
  get() {
    if (_arrowSortUp16 != null) {
      return _arrowSortUp16!!
    }
    _arrowSortUp16 = fluentIcon(name = "Regular.ArrowSortUp16", 16f) {
      materialPath {
          moveTo(7.146F, 2.147F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(8.0F, 3.707F)
          verticalLineTo(13.5F)
          curveTo(8.0F, 13.776F, 7.776F, 14.0F, 7.5F, 14.0F)
          reflectiveCurveTo(7.0F, 13.776F, 7.0F, 13.5F)
          verticalLineTo(3.707F)
          lineTo(4.854F, 5.854F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(3.0F, -3.0F)
          close()        
      }
    }
    return _arrowSortUp16!!
  }

private var _arrowSortUp16: ImageVector? = null

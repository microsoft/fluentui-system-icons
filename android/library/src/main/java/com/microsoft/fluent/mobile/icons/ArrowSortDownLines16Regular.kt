package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSortDownLines16: ImageVector
  get() {
    if (_arrowSortDownLines16 != null) {
      return _arrowSortDownLines16!!
    }
    _arrowSortDownLines16 = fluentIcon(name = "Regular.ArrowSortDownLines16", 16f) {
      materialPath {
          moveTo(8.854F, 10.854F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(5.0F, 12.293F)
          verticalLineTo(2.5F)
          curveTo(5.0F, 2.224F, 5.224F, 2.0F, 5.5F, 2.0F)
          reflectiveCurveTo(6.0F, 2.224F, 6.0F, 2.5F)
          verticalLineToRelative(9.793F)
          lineToRelative(2.146F, -2.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          close()
          moveTo(8.5F, 3.0F)
          curveTo(8.224F, 3.0F, 8.0F, 3.224F, 8.0F, 3.5F)
          reflectiveCurveTo(8.224F, 4.0F, 8.5F, 4.0F)
          horizontalLineToRelative(5.0F)
          curveTo(13.776F, 4.0F, 14.0F, 3.776F, 14.0F, 3.5F)
          reflectiveCurveTo(13.776F, 3.0F, 13.5F, 3.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveTo(8.224F, 5.0F, 8.0F, 5.224F, 8.0F, 5.5F)
          reflectiveCurveTo(8.224F, 6.0F, 8.5F, 6.0F)
          horizontalLineToRelative(3.0F)
          curveTo(11.776F, 6.0F, 12.0F, 5.776F, 12.0F, 5.5F)
          reflectiveCurveTo(11.776F, 5.0F, 11.5F, 5.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveTo(8.224F, 7.0F, 8.0F, 7.224F, 8.0F, 7.5F)
          reflectiveCurveTo(8.224F, 8.0F, 8.5F, 8.0F)
          horizontalLineToRelative(1.0F)
          curveTo(9.776F, 8.0F, 10.0F, 7.776F, 10.0F, 7.5F)
          reflectiveCurveTo(9.776F, 7.0F, 9.5F, 7.0F)
          horizontalLineToRelative(-1.0F)
          close()        
      }
    }
    return _arrowSortDownLines16!!
  }

private var _arrowSortDownLines16: ImageVector? = null

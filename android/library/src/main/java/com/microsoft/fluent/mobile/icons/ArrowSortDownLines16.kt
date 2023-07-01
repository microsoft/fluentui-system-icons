package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSortDownLines16: ImageVector
  get() {
    if (_arrowSortDownLines16 != null) {
      return _arrowSortDownLines16!!
    }
    _arrowSortDownLines16 = fluentIcon(name = "Filled.ArrowSortDownLines16", 16f) {
      materialPath {
          moveTo(9.03F, 11.03F)
          lineToRelative(-2.75F, 2.75F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.75F, -2.75F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(5.0F, 11.44F)
          verticalLineTo(2.75F)
          curveTo(5.0F, 2.336F, 5.336F, 2.0F, 5.75F, 2.0F)
          reflectiveCurveTo(6.5F, 2.336F, 6.5F, 2.75F)
          verticalLineToRelative(8.69F)
          lineToRelative(1.47F, -1.47F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          close()
          moveTo(8.5F, 2.0F)
          curveTo(8.086F, 2.0F, 7.75F, 2.336F, 7.75F, 2.75F)
          reflectiveCurveTo(8.086F, 3.5F, 8.5F, 3.5F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.914F, 2.0F, 13.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(8.086F, 6.0F, 8.5F, 6.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(11.914F, 4.5F, 11.5F, 4.5F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveTo(8.086F, 7.0F, 7.75F, 7.336F, 7.75F, 7.75F)
          reflectiveCurveTo(8.086F, 8.5F, 8.5F, 8.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(9.914F, 7.0F, 9.5F, 7.0F)
          horizontalLineToRelative(-1.0F)
          close()        
      }
    }
    return _arrowSortDownLines16!!
  }

private var _arrowSortDownLines16: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSortDown20: ImageVector
  get() {
    if (_arrowSortDown20 != null) {
      return _arrowSortDown20!!
    }
    _arrowSortDown20 = fluentIcon(name = "Filled.ArrowSortDown20", 20f) {
      materialPath {
          moveTo(9.75F, 17.0F)
          curveToRelative(0.235F, 0.0F, 0.452F, -0.108F, 0.59F, -0.278F)
          lineToRelative(2.94F, -2.946F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.292F, -0.293F, -0.766F, -0.293F, -1.058F, 0.0F)
          lineTo(10.5F, 14.434F)
          verticalLineTo(3.75F)
          curveTo(10.5F, 3.336F, 10.164F, 3.0F, 9.75F, 3.0F)
          reflectiveCurveTo(9.0F, 3.336F, 9.0F, 3.75F)
          verticalLineToRelative(10.694F)
          lineToRelative(-1.722F, -1.733F)
          curveToRelative(-0.292F, -0.293F, -0.766F, -0.293F, -1.059F, 0.0F)
          curveToRelative(-0.292F, 0.293F, -0.292F, 0.768F, 0.0F, 1.061F)
          lineToRelative(3.004F, 3.008F)
          curveTo(9.37F, 16.928F, 9.557F, 17.001F, 9.75F, 17.0F)
          close()        
      }
    }
    return _arrowSortDown20!!
  }

private var _arrowSortDown20: ImageVector? = null

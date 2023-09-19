package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSortUp20: ImageVector
  get() {
    if (_arrowSortUp20 != null) {
      return _arrowSortUp20!!
    }
    _arrowSortUp20 = fluentIcon(name = "Filled.ArrowSortUp20", 20f) {
      materialPath {
          moveTo(9.75F, 3.0F)
          curveToRelative(0.235F, 0.0F, 0.452F, 0.108F, 0.59F, 0.278F)
          lineToRelative(2.94F, 2.945F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.061F)
          curveToRelative(-0.292F, 0.293F, -0.766F, 0.293F, -1.058F, 0.0F)
          lineTo(10.5F, 5.566F)
          verticalLineTo(16.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(9.0F, 16.664F, 9.0F, 16.25F)
          verticalLineTo(5.556F)
          lineTo(7.278F, 7.289F)
          curveToRelative(-0.292F, 0.293F, -0.766F, 0.293F, -1.059F, 0.0F)
          curveToRelative(-0.292F, -0.293F, -0.292F, -0.768F, 0.0F, -1.061F)
          lineTo(9.223F, 3.22F)
          curveTo(9.37F, 3.072F, 9.557F, 2.999F, 9.75F, 3.0F)
          close()        
      }
    }
    return _arrowSortUp20!!
  }

private var _arrowSortUp20: ImageVector? = null

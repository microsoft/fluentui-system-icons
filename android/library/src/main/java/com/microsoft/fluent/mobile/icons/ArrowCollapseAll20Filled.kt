package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCollapseAll20: ImageVector
  get() {
    if (_arrowCollapseAll20 != null) {
      return _arrowCollapseAll20!!
    }
    _arrowCollapseAll20 = fluentIcon(name = "Filled.ArrowCollapseAll20", 20f) {
      materialPath {
          moveTo(2.0F, 4.75F)
          curveTo(2.0F, 4.336F, 2.336F, 4.0F, 2.75F, 4.0F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 4.0F, 18.0F, 4.336F, 18.0F, 4.75F)
          reflectiveCurveTo(17.664F, 5.5F, 17.25F, 5.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 5.5F, 2.0F, 5.164F, 2.0F, 4.75F)
          close()
          moveToRelative(3.22F, 2.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.75F, 2.75F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(6.5F, 9.31F)
          verticalLineToRelative(6.44F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(5.0F, 16.164F, 5.0F, 15.75F)
          verticalLineTo(9.31F)
          lineToRelative(-1.47F, 1.47F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(2.75F, -2.75F)
          close()
          moveTo(9.5F, 7.75F)
          curveTo(9.5F, 7.336F, 9.836F, 7.0F, 10.25F, 7.0F)
          horizontalLineToRelative(7.0F)
          curveTo(17.664F, 7.0F, 18.0F, 7.336F, 18.0F, 7.75F)
          reflectiveCurveTo(17.664F, 8.5F, 17.25F, 8.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(9.836F, 8.5F, 9.5F, 8.164F, 9.5F, 7.75F)
          close()        
      }
    }
    return _arrowCollapseAll20!!
  }

private var _arrowCollapseAll20: ImageVector? = null

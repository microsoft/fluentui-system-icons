package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowMinimizeVertical20: ImageVector
  get() {
    if (_arrowMinimizeVertical20 != null) {
      return _arrowMinimizeVertical20!!
    }
    _arrowMinimizeVertical20 = fluentIcon(name = "Filled.ArrowMinimizeVertical20", 20f) {
      materialPath {
          moveTo(9.75F, 1.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(2.69F)
          lineToRelative(0.72F, -0.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(9.0F, 4.94F)
          verticalLineTo(2.25F)
          curveTo(9.0F, 1.836F, 9.336F, 1.5F, 9.75F, 1.5F)
          close()
          moveTo(3.5F, 9.75F)
          curveTo(3.5F, 9.336F, 3.836F, 9.0F, 4.25F, 9.0F)
          horizontalLineToRelative(11.0F)
          curveTo(15.664F, 9.0F, 16.0F, 9.336F, 16.0F, 9.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(8.78F, 4.47F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(9.0F, 14.56F)
          verticalLineToRelative(2.69F)
          curveTo(9.0F, 17.664F, 9.336F, 18.0F, 9.75F, 18.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-2.69F)
          lineToRelative(0.72F, 0.72F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _arrowMinimizeVertical20!!
  }

private var _arrowMinimizeVertical20: ImageVector? = null

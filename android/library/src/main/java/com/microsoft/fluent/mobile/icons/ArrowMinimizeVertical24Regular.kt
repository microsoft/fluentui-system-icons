package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowMinimizeVertical24: ImageVector
  get() {
    if (_arrowMinimizeVertical24 != null) {
      return _arrowMinimizeVertical24!!
    }
    _arrowMinimizeVertical24 = fluentIcon(name = "Regular.ArrowMinimizeVertical24", 24f) {
      materialPath {
          moveTo(11.75F, 2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(4.19F)
          lineToRelative(1.22F, -1.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(11.0F, 6.94F)
          verticalLineTo(2.75F)
          curveTo(11.0F, 2.336F, 11.336F, 2.0F, 11.75F, 2.0F)
          close()
          moveTo(4.0F, 11.75F)
          curveTo(4.0F, 11.336F, 4.336F, 11.0F, 4.75F, 11.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(4.75F)
          curveTo(4.336F, 12.5F, 4.0F, 12.164F, 4.0F, 11.75F)
          close()
          moveToRelative(9.72F, 6.03F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(11.0F, 16.56F)
          verticalLineToRelative(4.69F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-4.69F)
          lineToRelative(1.22F, 1.22F)
          close()        
      }
    }
    return _arrowMinimizeVertical24!!
  }

private var _arrowMinimizeVertical24: ImageVector? = null

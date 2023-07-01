package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSplit24: ImageVector
  get() {
    if (_arrowSplit24 != null) {
      return _arrowSplit24!!
    }
    _arrowSplit24 = fluentIcon(name = "Regular.ArrowSplit24", 24f) {
      materialPath {
          moveTo(12.0F, 3.0F)
          curveToRelative(0.415F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(2.496F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          verticalLineToRelative(6.192F)
          lineToRelative(1.725F, -1.723F)
          curveToRelative(0.293F, -0.292F, 0.768F, -0.292F, 1.06F, 0.001F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          lineToRelative(-3.005F, 3.001F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.294F, -0.294F, -0.294F, -0.768F, 0.0F, -1.061F)
          curveToRelative(0.292F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(1.72F, 1.72F)
          verticalLineToRelative(-6.19F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(8.751F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          verticalLineToRelative(6.19F)
          lineToRelative(1.72F, -1.72F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.293F, 0.294F, -0.768F, 0.294F, -1.06F, 0.0F)
          lineToRelative(-3.001F, -3.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(6.0F, 18.44F)
          verticalLineToRelative(-6.19F)
          curveTo(6.0F, 10.731F, 7.233F, 9.5F, 8.75F, 9.5F)
          horizontalLineToRelative(2.5F)
          verticalLineTo(3.75F)
          curveTo(11.25F, 3.336F, 11.587F, 3.0F, 12.0F, 3.0F)
          close()        
      }
    }
    return _arrowSplit24!!
  }

private var _arrowSplit24: ImageVector? = null

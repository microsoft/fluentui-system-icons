package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCurveDownLeft24: ImageVector
  get() {
    if (_arrowCurveDownLeft24 != null) {
      return _arrowCurveDownLeft24!!
    }
    _arrowCurveDownLeft24 = fluentIcon(name = "Regular.ArrowCurveDownLeft24", 24f) {
      materialPath {
          moveTo(16.401F, 3.378F)
          curveToRelative(-0.205F, -0.36F, -0.663F, -0.485F, -1.023F, -0.28F)
          curveToRelative(-2.269F, 1.297F, -3.391F, 2.954F, -3.921F, 4.71F)
          curveToRelative(-0.468F, 1.553F, -0.463F, 3.166F, -0.458F, 4.543F)
          lineToRelative(0.001F, 0.4F)
          verticalLineToRelative(5.688F)
          lineToRelative(-3.72F, -3.72F)
          curveToRelative(-0.293F, -0.292F, -0.767F, -0.292F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.294F, -0.293F, 0.769F, 0.0F, 1.061F)
          lineToRelative(5.0F, 5.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(5.0F, -5.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-3.72F, 3.72F)
          verticalLineToRelative(-6.07F)
          curveToRelative(-0.004F, -1.411F, -0.007F, -2.802F, 0.393F, -4.128F)
          curveToRelative(0.42F, -1.394F, 1.298F, -2.737F, 3.23F, -3.84F)
          curveToRelative(0.359F, -0.206F, 0.484F, -0.664F, 0.278F, -1.024F)
          close()        
      }
    }
    return _arrowCurveDownLeft24!!
  }

private var _arrowCurveDownLeft24: ImageVector? = null

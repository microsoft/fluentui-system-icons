package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowStepOut28: ImageVector
  get() {
    if (_arrowStepOut28 != null) {
      return _arrowStepOut28!!
    }
    _arrowStepOut28 = fluentIcon(name = "Regular.ArrowStepOut28", 28f) {
      materialPath {
          moveTo(14.0F, 16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.622F)
          lineToRelative(3.957F, 4.146F)
          curveToRelative(0.287F, 0.3F, 0.761F, 0.31F, 1.06F, 0.024F)
          curveToRelative(0.3F, -0.285F, 0.311F, -0.76F, 0.026F, -1.06F)
          lineToRelative(-5.25F, -5.5F)
          curveTo(14.4F, 2.084F, 14.205F, 2.0F, 14.0F, 2.0F)
          curveToRelative(-0.205F, 0.0F, -0.401F, 0.084F, -0.543F, 0.232F)
          lineToRelative(-5.25F, 5.5F)
          curveToRelative(-0.286F, 0.3F, -0.275F, 0.775F, 0.025F, 1.06F)
          curveToRelative(0.3F, 0.287F, 0.775F, 0.276F, 1.06F, -0.024F)
          lineToRelative(3.958F, -4.146F)
          verticalLineTo(15.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          close()
          moveToRelative(4.0F, 5.5F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          close()
          moveToRelative(-1.5F, 0.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          reflectiveCurveToRelative(-2.5F, 1.12F, -2.5F, 2.5F)
          reflectiveCurveToRelative(1.12F, 2.5F, 2.5F, 2.5F)
          reflectiveCurveToRelative(2.5F, -1.12F, 2.5F, -2.5F)
          close()        
      }
    }
    return _arrowStepOut28!!
  }

private var _arrowStepOut28: ImageVector? = null

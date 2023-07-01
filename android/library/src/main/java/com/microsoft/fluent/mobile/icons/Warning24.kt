package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Warning24: ImageVector
  get() {
    if (_warning24 != null) {
      return _warning24!!
    }
    _warning24 = fluentIcon(name = "Regular.Warning24", 24f) {
      materialPath {
          moveTo(13.0F, 17.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -0.999F, -1.0F, -0.999F)
          curveToRelative(-0.55F, 0.0F, -0.998F, 0.447F, -0.998F, 0.999F)
          reflectiveCurveToRelative(0.447F, 0.999F, 0.999F, 0.999F)
          curveToRelative(0.551F, 0.0F, 0.998F, -0.447F, 0.998F, -0.999F)
          close()
          moveToRelative(-0.26F, -7.853F)
          curveToRelative(-0.05F, -0.366F, -0.364F, -0.648F, -0.744F, -0.648F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.749F, 0.75F)
          lineToRelative(0.004F, 4.502F)
          lineToRelative(0.007F, 0.102F)
          curveToRelative(0.05F, 0.366F, 0.364F, 0.648F, 0.743F, 0.648F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.337F, 0.75F, -0.75F)
          lineToRelative(-0.004F, -4.502F)
          lineToRelative(-0.007F, -0.102F)
          close()
          moveToRelative(1.23F, -5.488F)
          curveToRelative(-0.857F, -1.548F, -3.082F, -1.548F, -3.938F, 0.0F)
          lineTo(2.286F, 17.66F)
          curveTo(1.456F, 19.16F, 2.541F, 21.0F, 4.256F, 21.0F)
          horizontalLineToRelative(15.49F)
          curveToRelative(1.714F, 0.0F, 2.799F, -1.84F, 1.969F, -3.34F)
          lineToRelative(-7.746F, -14.0F)
          close()
          moveToRelative(-2.626F, 0.726F)
          curveToRelative(0.286F, -0.516F, 1.027F, -0.516F, 1.313F, 0.0F)
          lineToRelative(7.745F, 14.002F)
          curveToRelative(0.277F, 0.5F, -0.085F, 1.113F, -0.656F, 1.113F)
          horizontalLineTo(4.256F)
          curveToRelative(-0.572F, 0.0F, -0.934F, -0.614F, -0.657F, -1.113F)
          lineToRelative(7.745F, -14.002F)
          close()        
      }
    }
    return _warning24!!
  }

private var _warning24: ImageVector? = null

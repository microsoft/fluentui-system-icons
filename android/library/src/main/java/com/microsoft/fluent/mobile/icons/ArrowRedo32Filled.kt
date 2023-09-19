package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRedo32: ImageVector
  get() {
    if (_arrowRedo32 != null) {
      return _arrowRedo32!!
    }
    _arrowRedo32 = fluentIcon(name = "Filled.ArrowRedo32", 32f) {
      materialPath {
          moveTo(27.002F, 4.256F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveToRelative(-1.25F, 0.56F, -1.25F, 1.25F)
          verticalLineToRelative(6.181F)
          lineTo(19.905F, 5.64F)
          curveToRelative(-1.221F, -1.294F, -3.252F, -2.326F, -5.481F, -2.542F)
          curveToRelative(-2.28F, -0.222F, -4.817F, 0.407F, -6.929F, 2.52F)
          curveToRelative(-2.149F, 2.148F, -2.712F, 4.659F, -2.5F, 6.83F)
          curveToRelative(0.205F, 2.104F, 1.143F, 3.958F, 2.119F, 4.935F)
          lineToRelative(0.001F, 0.002F)
          lineTo(18.322F, 28.68F)
          curveToRelative(0.486F, 0.49F, 1.277F, 0.494F, 1.768F, 0.007F)
          curveToRelative(0.49F, -0.486F, 0.493F, -1.277F, 0.007F, -1.767F)
          lineToRelative(-11.21F, -11.3F)
          lineToRelative(-0.004F, -0.004F)
          curveToRelative(-0.523F, -0.523F, -1.245F, -1.818F, -1.4F, -3.412F)
          curveToRelative(-0.15F, -1.528F, 0.228F, -3.268F, 1.78F, -4.82F)
          curveToRelative(1.525F, -1.525F, 3.298F, -1.957F, 4.92F, -1.8F)
          curveToRelative(1.669F, 0.163F, 3.128F, 0.947F, 3.907F, 1.774F)
          lineToRelative(0.007F, 0.007F)
          lineToRelative(4.939F, 5.155F)
          horizontalLineToRelative(-6.437F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(9.153F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(4.256F)
          close()        
      }
    }
    return _arrowRedo32!!
  }

private var _arrowRedo32: ImageVector? = null

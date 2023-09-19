package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pulse32: ImageVector
  get() {
    if (_pulse32 != null) {
      return _pulse32!!
    }
    _pulse32 = fluentIcon(name = "Filled.Pulse32", 32f) {
      materialPath {
          moveTo(11.53F, 5.0F)
          curveToRelative(0.548F, 0.013F, 1.024F, 0.383F, 1.173F, 0.91F)
          lineToRelative(4.354F, 15.438F)
          lineToRelative(3.25F, -10.468F)
          curveToRelative(0.153F, -0.496F, 0.597F, -0.845F, 1.115F, -0.878F)
          curveToRelative(0.517F, -0.032F, 1.001F, 0.258F, 1.216F, 0.73F)
          lineToRelative(2.167F, 4.768F)
          horizontalLineToRelative(2.945F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(28.44F, 18.0F, 27.75F, 18.0F)
          horizontalLineTo(24.0F)
          curveToRelative(-0.49F, 0.0F, -0.935F, -0.287F, -1.138F, -0.733F)
          lineToRelative(-1.141F, -2.51F)
          lineToRelative(-3.527F, 11.364F)
          curveToRelative(-0.164F, 0.528F, -0.657F, 0.886F, -1.21F, 0.879F)
          curveToRelative(-0.554F, -0.007F, -1.037F, -0.378F, -1.187F, -0.91F)
          lineTo(11.4F, 10.501F)
          lineToRelative(-2.214F, 6.643F)
          curveTo(9.016F, 17.655F, 8.538F, 18.0F, 8.0F, 18.0F)
          horizontalLineTo(4.25F)
          curveTo(3.56F, 18.0F, 3.0F, 17.44F, 3.0F, 16.75F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineTo(7.1F)
          lineToRelative(3.214F, -9.645F)
          curveTo(10.488F, 5.335F, 10.981F, 4.987F, 11.53F, 5.0F)
          close()        
      }
    }
    return _pulse32!!
  }

private var _pulse32: ImageVector? = null

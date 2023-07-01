package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BowlChopsticks24: ImageVector
  get() {
    if (_bowlChopsticks24 != null) {
      return _bowlChopsticks24!!
    }
    _bowlChopsticks24 = fluentIcon(name = "Filled.BowlChopsticks24", 24f) {
      materialPath {
          moveTo(5.376F, 2.1F)
          curveTo(5.735F, 1.893F, 6.193F, 2.017F, 6.4F, 2.376F)
          lineTo(11.365F, 11.0F)
          horizontalLineToRelative(2.27F)
          lineTo(9.1F, 3.124F)
          curveTo(8.893F, 2.765F, 9.017F, 2.307F, 9.376F, 2.1F)
          curveToRelative(0.359F, -0.207F, 0.817F, -0.083F, 1.024F, 0.276F)
          lineTo(15.365F, 11.0F)
          horizontalLineToRelative(5.933F)
          curveTo(21.686F, 11.0F, 22.0F, 11.315F, 22.0F, 11.702F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.045F, -0.16F, 2.053F, -0.458F, 3.0F)
          horizontalLineTo(2.458F)
          curveTo(2.16F, 14.053F, 2.0F, 13.045F, 2.0F, 12.0F)
          verticalLineToRelative(-0.298F)
          curveTo(2.0F, 11.315F, 2.314F, 11.0F, 2.702F, 11.0F)
          horizontalLineToRelative(6.933F)
          lineTo(5.1F, 3.124F)
          curveTo(4.893F, 2.765F, 5.017F, 2.307F, 5.376F, 2.1F)
          close()
          moveTo(3.067F, 16.5F)
          curveTo(4.714F, 19.763F, 8.096F, 22.0F, 12.0F, 22.0F)
          reflectiveCurveToRelative(7.286F, -2.237F, 8.933F, -5.5F)
          horizontalLineTo(3.067F)
          close()        
      }
    }
    return _bowlChopsticks24!!
  }

private var _bowlChopsticks24: ImageVector? = null

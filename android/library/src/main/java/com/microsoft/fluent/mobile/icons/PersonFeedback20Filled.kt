package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonFeedback20: ImageVector
  get() {
    if (_personFeedback20 != null) {
      return _personFeedback20!!
    }
    _personFeedback20 = fluentIcon(name = "Filled.PersonFeedback20", 20f) {
      materialPath {
          moveTo(10.5F, 12.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 1.971F, -1.86F, 4.0F, -5.0F, 4.0F)
          curveToRelative(-3.14F, 0.0F, -5.0F, -2.029F, -5.0F, -4.0F)
          verticalLineToRelative(-0.5F)
          curveTo(2.0F, 12.672F, 2.672F, 12.0F, 3.5F, 12.0F)
          horizontalLineToRelative(7.0F)
          close()
          moveTo(7.0F, 5.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          reflectiveCurveTo(8.519F, 11.0F, 7.0F, 11.0F)
          reflectiveCurveTo(4.25F, 9.769F, 4.25F, 8.25F)
          reflectiveCurveTo(5.481F, 5.5F, 7.0F, 5.5F)
          close()
          moveTo(16.0F, 2.0F)
          curveToRelative(1.054F, 0.0F, 1.918F, 0.816F, 1.994F, 1.85F)
          lineTo(18.0F, 4.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.054F, -0.816F, 1.918F, -1.85F, 1.995F)
          lineTo(16.0F, 8.0F)
          horizontalLineToRelative(-1.501F)
          lineToRelative(-1.198F, 1.6F)
          curveToRelative(-0.53F, 0.706F, -1.604F, 0.42F, -1.777F, -0.376F)
          lineToRelative(-0.017F, -0.111F)
          lineTo(11.5F, 9.0F)
          verticalLineTo(7.935F)
          lineToRelative(-0.078F, -0.02F)
          curveToRelative(-0.725F, -0.218F, -1.277F, -0.838F, -1.397F, -1.6F)
          lineToRelative(-0.02F, -0.166F)
          lineTo(10.0F, 6.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.054F, 0.816F, -1.918F, 1.85F, -1.994F)
          lineTo(12.0F, 2.0F)
          horizontalLineToRelative(4.0F)
          close()        
      }
    }
    return _personFeedback20!!
  }

private var _personFeedback20: ImageVector? = null

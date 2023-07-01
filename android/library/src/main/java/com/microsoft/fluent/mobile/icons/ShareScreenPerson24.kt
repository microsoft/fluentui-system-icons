package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ShareScreenPerson24: ImageVector
  get() {
    if (_shareScreenPerson24 != null) {
      return _shareScreenPerson24!!
    }
    _shareScreenPerson24 = fluentIcon(name = "Regular.ShareScreenPerson24", 24f) {
      materialPath {
          moveTo(5.25F, 4.0F)
          curveTo(3.455F, 4.0F, 2.0F, 5.455F, 2.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveTo(2.0F, 18.545F, 3.455F, 20.0F, 5.25F, 20.0F)
          horizontalLineToRelative(7.752F)
          lineTo(13.0F, 19.875F)
          verticalLineToRelative(-0.103F)
          curveToRelative(0.0F, -0.459F, 0.111F, -0.891F, 0.308F, -1.272F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(4.377F)
          curveTo(21.407F, 12.26F, 22.0F, 13.311F, 22.0F, 14.5F)
          verticalLineTo(7.25F)
          curveTo(22.0F, 5.455F, 20.545F, 4.0F, 18.75F, 4.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(21.0F, 14.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(16.0F, 15.88F, 16.0F, 14.5F)
          reflectiveCurveToRelative(1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          close()
          moveToRelative(2.0F, 5.375F)
          curveTo(23.0F, 21.431F, 21.714F, 23.0F, 18.5F, 23.0F)
          reflectiveCurveTo(14.0F, 21.437F, 14.0F, 19.875F)
          verticalLineToRelative(-0.103F)
          curveTo(14.0F, 18.792F, 14.794F, 18.0F, 15.773F, 18.0F)
          horizontalLineToRelative(5.454F)
          curveTo(22.207F, 18.0F, 23.0F, 18.793F, 23.0F, 19.772F)
          verticalLineToRelative(0.103F)
          close()        
      }
    }
    return _shareScreenPerson24!!
  }

private var _shareScreenPerson24: ImageVector? = null

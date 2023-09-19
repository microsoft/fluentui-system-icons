package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageStack16: ImageVector
  get() {
    if (_imageStack16 != null) {
      return _imageStack16!!
    }
    _imageStack16 = fluentIcon(name = "Filled.ImageStack16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(2.793F)
          lineToRelative(1.97F, -1.97F)
          curveToRelative(0.683F, -0.683F, 1.791F, -0.683F, 2.474F, 0.0F)
          lineTo(11.207F, 7.0F)
          horizontalLineTo(14.0F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(14.0F, 8.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 1.04F, 0.635F, 1.931F, 1.538F, 2.308F)
          curveToRelative(0.025F, -0.059F, 0.06F, -0.114F, 0.109F, -0.162F)
          lineToRelative(3.116F, -3.116F)
          curveToRelative(0.683F, -0.683F, 1.791F, -0.683F, 2.474F, 0.0F)
          lineToRelative(3.117F, 3.116F)
          curveToRelative(0.047F, 0.048F, 0.084F, 0.103F, 0.108F, 0.162F)
          curveTo(13.365F, 13.431F, 14.0F, 12.54F, 14.0F, 11.5F)
          verticalLineTo(8.0F)
          close()
          moveTo(6.207F, 7.0F)
          horizontalLineToRelative(3.586F)
          lineTo(8.53F, 5.737F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(6.207F, 7.0F)
          close()
          moveToRelative(5.086F, 7.0F)
          horizontalLineTo(4.707F)
          lineToRelative(2.763F, -2.763F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(11.293F, 14.0F)
          close()
          moveTo(12.5F, 9.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(11.0F, 10.164F, 11.0F, 9.75F)
          reflectiveCurveTo(11.336F, 9.0F, 11.75F, 9.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          close()
          moveTo(11.75F, 5.0F)
          curveTo(11.336F, 5.0F, 11.0F, 4.664F, 11.0F, 4.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(12.164F, 5.0F, 11.75F, 5.0F)
          close()        
      }
    }
    return _imageStack16!!
  }

private var _imageStack16: ImageVector? = null

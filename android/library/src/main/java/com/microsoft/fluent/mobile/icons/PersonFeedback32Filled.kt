package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonFeedback32: ImageVector
  get() {
    if (_personFeedback32 != null) {
      return _personFeedback32!!
    }
    _personFeedback32 = fluentIcon(name = "Filled.PersonFeedback32", 32f) {
      materialPath {
          moveTo(19.95F, 15.89F)
          curveTo(20.13F, 15.97F, 20.32F, 16.0F, 20.5F, 16.0F)
          curveToRelative(0.41F, 0.0F, 0.81F, -0.17F, 1.1F, -0.48F)
          lineTo(23.94F, 13.0F)
          horizontalLineTo(27.0F)
          curveToRelative(1.65F, 0.0F, 3.0F, -1.35F, 3.0F, -3.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.65F, -1.35F, -3.0F, -3.0F, -3.0F)
          horizontalLineToRelative(-8.0F)
          curveToRelative(-1.65F, 0.0F, -3.0F, 1.35F, -3.0F, 3.0F)
          verticalLineToRelative(4.99F)
          curveToRelative(0.0F, 1.65F, 1.35F, 3.0F, 3.0F, 3.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.63F, 0.37F, 1.17F, 0.95F, 1.4F)
          close()
          moveTo(10.5F, 18.0F)
          curveToRelative(-2.76F, 0.0F, -5.0F, -2.24F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.24F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.24F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.24F, 5.0F, -5.0F, 5.0F)
          close()
          moveToRelative(0.0F, 11.99F)
          curveToRelative(-2.9F, 0.0F, -5.12F, -0.8F, -6.62F, -2.368F)
          curveToRelative(-1.931F, -2.015F, -1.886F, -4.585F, -1.881F, -4.838F)
          verticalLineToRelative(-0.017F)
          curveTo(2.0F, 21.26F, 3.26F, 20.0F, 4.82F, 20.0F)
          horizontalLineToRelative(11.36F)
          curveToRelative(1.55F, 0.0F, 2.82F, 1.259F, 2.82F, 2.817F)
          verticalLineToRelative(0.01F)
          curveToRelative(0.004F, 0.182F, 0.06F, 2.77F, -1.88F, 4.805F)
          curveTo(15.62F, 29.201F, 13.4F, 30.0F, 10.5F, 30.0F)
          verticalLineToRelative(-0.01F)
          close()        
      }
    }
    return _personFeedback32!!
  }

private var _personFeedback32: ImageVector? = null

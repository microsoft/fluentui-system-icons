package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageBorder20: ImageVector
  get() {
    if (_imageBorder20 != null) {
      return _imageBorder20!!
    }
    _imageBorder20 = fluentIcon(name = "Filled.ImageBorder20", 20f) {
      materialPath {
          moveTo(6.0F, 6.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(7.782F)
          lineToRelative(-2.802F, -2.788F)
          curveToRelative(-0.663F, -0.659F, -1.733F, -0.659F, -2.396F, 0.0F)
          lineTo(6.0F, 13.782F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(5.5F, 1.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-1.007F, 4.203F)
          lineTo(12.802F, 14.0F)
          horizontalLineTo(7.198F)
          lineToRelative(2.309F, -2.297F)
          curveToRelative(0.273F, -0.27F, 0.713F, -0.27F, 0.986F, 0.0F)
          close()
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.0F, -1.0F)
          curveTo(5.448F, 5.0F, 5.0F, 5.448F, 5.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _imageBorder20!!
  }

private var _imageBorder20: ImageVector? = null

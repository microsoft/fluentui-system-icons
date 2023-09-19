package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ZoomOut24: ImageVector
  get() {
    if (_zoomOut24 != null) {
      return _zoomOut24!!
    }
    _zoomOut24 = fluentIcon(name = "Regular.ZoomOut24", 24f) {
      materialPath {
          moveTo(12.75F, 9.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-5.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(5.5F)
          close()
          moveToRelative(4.5F, 0.75F)
          curveToRelative(0.0F, -4.004F, -3.246F, -7.25F, -7.25F, -7.25F)
          reflectiveCurveTo(2.75F, 5.996F, 2.75F, 10.0F)
          reflectiveCurveToRelative(3.246F, 7.25F, 7.25F, 7.25F)
          curveToRelative(1.732F, 0.0F, 3.322F, -0.607F, 4.569F, -1.62F)
          lineToRelative(4.9F, 4.9F)
          lineToRelative(0.085F, 0.073F)
          curveToRelative(0.293F, 0.218F, 0.71F, 0.194F, 0.976F, -0.073F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.9F, -4.901F)
          curveToRelative(1.013F, -1.247F, 1.62F, -2.837F, 1.62F, -4.569F)
          close()
          moveToRelative(-13.0F, 0.0F)
          curveToRelative(0.0F, -3.176F, 2.574F, -5.75F, 5.75F, -5.75F)
          reflectiveCurveToRelative(5.75F, 2.574F, 5.75F, 5.75F)
          reflectiveCurveToRelative(-2.574F, 5.75F, -5.75F, 5.75F)
          reflectiveCurveTo(4.25F, 13.176F, 4.25F, 10.0F)
          close()        
      }
    }
    return _zoomOut24!!
  }

private var _zoomOut24: ImageVector? = null

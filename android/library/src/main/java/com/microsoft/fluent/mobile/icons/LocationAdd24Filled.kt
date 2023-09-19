package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationAdd24: ImageVector
  get() {
    if (_locationAdd24 != null) {
      return _locationAdd24!!
    }
    _locationAdd24 = fluentIcon(name = "Filled.LocationAdd24", 24f) {
      materialPath {
          moveTo(16.97F, 18.056F)
          lineToRelative(1.187F, -1.174F)
          curveToRelative(3.4F, -3.4F, 3.4F, -8.914F, 0.0F, -12.314F)
          curveToRelative(-3.4F, -3.4F, -8.913F, -3.4F, -12.314F, 0.0F)
          curveToRelative(-3.4F, 3.4F, -3.4F, 8.914F, 0.0F, 12.314F)
          curveToRelative(0.296F, 0.296F, 0.663F, 0.659F, 1.102F, 1.09F)
          lineToRelative(3.491F, 3.396F)
          curveToRelative(0.872F, 0.843F, 2.256F, 0.843F, 3.128F, 0.0F)
          curveToRelative(1.396F, -1.35F, 2.531F, -2.454F, 3.406F, -3.312F)
          close()
          moveTo(12.0F, 7.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-2.5F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(11.5F)
          horizontalLineToRelative(-2.5F)
          curveTo(8.336F, 11.5F, 8.0F, 11.164F, 8.0F, 10.75F)
          curveTo(8.0F, 10.335F, 8.336F, 10.0F, 8.75F, 10.0F)
          horizontalLineToRelative(2.5F)
          verticalLineTo(7.75F)
          curveTo(11.25F, 7.335F, 11.586F, 7.0F, 12.0F, 7.0F)
          close()        
      }
    }
    return _locationAdd24!!
  }

private var _locationAdd24: ImageVector? = null

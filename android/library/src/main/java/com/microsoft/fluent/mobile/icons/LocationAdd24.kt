package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LocationAdd24: ImageVector
  get() {
    if (_locationAdd24 != null) {
      return _locationAdd24!!
    }
    _locationAdd24 = fluentIcon(name = "Regular.LocationAdd24", 24f) {
      materialPath {
          moveTo(8.0F, 10.75F)
          curveTo(8.0F, 10.336F, 8.336F, 10.0F, 8.75F, 10.0F)
          horizontalLineToRelative(2.5F)
          verticalLineTo(7.75F)
          curveTo(11.25F, 7.334F, 11.586F, 7.0F, 12.0F, 7.0F)
          reflectiveCurveToRelative(0.75F, 0.335F, 0.75F, 0.75F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-2.5F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 0.413F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.337F, -0.75F, -0.75F)
          verticalLineTo(11.5F)
          horizontalLineToRelative(-2.5F)
          curveTo(8.336F, 11.5F, 8.0F, 11.164F, 8.0F, 10.75F)
          close()
          moveTo(5.843F, 4.568F)
          curveToRelative(3.4F, -3.4F, 8.914F, -3.4F, 12.314F, 0.0F)
          curveToRelative(3.4F, 3.4F, 3.4F, 8.914F, 0.0F, 12.314F)
          lineToRelative(-1.187F, 1.174F)
          curveToRelative(-0.875F, 0.858F, -2.01F, 1.962F, -3.406F, 3.312F)
          curveToRelative(-0.872F, 0.843F, -2.256F, 0.843F, -3.128F, 0.0F)
          lineToRelative(-3.49F, -3.396F)
          curveToRelative(-0.44F, -0.431F, -0.807F, -0.794F, -1.103F, -1.09F)
          curveToRelative(-3.4F, -3.4F, -3.4F, -8.914F, 0.0F, -12.314F)
          close()
          moveToRelative(11.254F, 1.06F)
          curveToRelative(-2.815F, -2.814F, -7.378F, -2.814F, -10.193F, 0.0F)
          curveToRelative(-2.815F, 2.815F, -2.815F, 7.379F, 0.0F, 10.193F)
          lineTo(8.39F, 17.29F)
          curveToRelative(0.819F, 0.801F, 1.848F, 1.801F, 3.088F, 3.0F)
          curveToRelative(0.29F, 0.282F, 0.752F, 0.282F, 1.043F, 0.0F)
          lineToRelative(3.395F, -3.3F)
          curveToRelative(0.469F, -0.461F, 0.862F, -0.85F, 1.18F, -1.168F)
          curveToRelative(2.814F, -2.814F, 2.814F, -7.378F, 0.0F, -10.192F)
          close()        
      }
    }
    return _locationAdd24!!
  }

private var _locationAdd24: ImageVector? = null

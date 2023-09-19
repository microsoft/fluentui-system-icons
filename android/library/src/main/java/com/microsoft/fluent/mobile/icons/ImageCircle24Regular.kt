package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ImageCircle24: ImageVector
  get() {
    if (_imageCircle24 != null) {
      return _imageCircle24!!
    }
    _imageCircle24 = fluentIcon(name = "Regular.ImageCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 3.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, 3.806F, -8.5F, 8.5F)
          curveToRelative(0.0F, 2.08F, 0.748F, 3.987F, 1.99F, 5.465F)
          lineToRelative(4.934F, -4.843F)
          curveToRelative(0.875F, -0.859F, 2.277F, -0.859F, 3.152F, 0.0F)
          lineToRelative(4.935F, 4.843F)
          curveTo(19.752F, 15.987F, 20.5F, 14.08F, 20.5F, 12.0F)
          curveToRelative(0.0F, -4.694F, -3.806F, -8.5F, -8.5F, -8.5F)
          close()
          moveToRelative(5.449F, 15.024F)
          lineToRelative(-4.924F, -4.832F)
          curveToRelative(-0.291F, -0.286F, -0.759F, -0.286F, -1.05F, 0.0F)
          lineTo(6.55F, 18.524F)
          curveTo(8.026F, 19.758F, 9.927F, 20.5F, 12.0F, 20.5F)
          reflectiveCurveToRelative(3.974F, -0.742F, 5.449F, -1.976F)
          close()
          moveTo(2.0F, 12.0F)
          curveTo(2.0F, 6.477F, 6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          close()
          moveToRelative(13.25F, -2.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(14.836F, 8.0F, 15.25F, 8.0F)
          reflectiveCurveTo(16.0F, 8.336F, 16.0F, 8.75F)
          reflectiveCurveTo(15.664F, 9.5F, 15.25F, 9.5F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          reflectiveCurveTo(16.493F, 6.5F, 15.25F, 6.5F)
          reflectiveCurveTo(13.0F, 7.507F, 13.0F, 8.75F)
          reflectiveCurveTo(14.007F, 11.0F, 15.25F, 11.0F)
          close()        
      }
    }
    return _imageCircle24!!
  }

private var _imageCircle24: ImageVector? = null

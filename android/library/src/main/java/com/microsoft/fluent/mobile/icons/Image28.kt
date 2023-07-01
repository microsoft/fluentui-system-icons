package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Image28: ImageVector
  get() {
    if (_image28 != null) {
      return _image28!!
    }
    _image28 = fluentIcon(name = "Filled.Image28", 28f) {
      materialPath {
          moveTo(3.0F, 6.75F)
          curveTo(3.0F, 4.679F, 4.679F, 3.0F, 6.75F, 3.0F)
          horizontalLineToRelative(14.5F)
          curveTo(23.321F, 3.0F, 25.0F, 4.679F, 25.0F, 6.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 0.771F, -0.233F, 1.488F, -0.632F, 2.084F)
          lineToRelative(-8.97F, -8.767F)
          curveToRelative(-0.777F, -0.76F, -2.019F, -0.76F, -2.796F, 0.0F)
          lineToRelative(-8.97F, 8.767F)
          curveTo(3.232F, 22.738F, 3.0F, 22.02F, 3.0F, 21.25F)
          verticalLineTo(6.75F)
          close()
          moveToRelative(1.698F, 17.64F)
          curveTo(5.288F, 24.774F, 5.993F, 25.0F, 6.75F, 25.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.757F, 0.0F, 1.462F, -0.225F, 2.052F, -0.61F)
          lineToRelative(-8.952F, -8.75F)
          curveToRelative(-0.195F, -0.19F, -0.505F, -0.19F, -0.7F, 0.0F)
          lineToRelative(-8.952F, 8.75F)
          close()
          moveTo(20.75F, 10.0F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          reflectiveCurveTo(16.25F, 8.757F, 16.25F, 10.0F)
          reflectiveCurveToRelative(1.007F, 2.25F, 2.25F, 2.25F)
          reflectiveCurveToRelative(2.25F, -1.007F, 2.25F, -2.25F)
          close()        
      }
    }
    return _image28!!
  }

private var _image28: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Reward24: ImageVector
  get() {
    if (_reward24 != null) {
      return _reward24!!
    }
    _reward24 = fluentIcon(name = "Filled.Reward24", 24f) {
      materialPath {
          moveTo(20.25F, 1.999F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(3.043F)
          curveToRelative(0.0F, 1.024F, -0.57F, 1.963F, -1.477F, 2.437F)
          lineToRelative(-6.3F, 3.29F)
          curveTo(15.869F, 13.34F, 17.0F, 15.038F, 17.0F, 17.0F)
          curveToRelative(0.0F, 2.762F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.238F, -5.0F, -5.0F)
          curveToRelative(0.0F, -1.962F, 1.131F, -3.66F, 2.777F, -4.48F)
          lineToRelative(-6.3F, -3.29F)
          curveTo(2.569F, 8.755F, 2.0F, 7.816F, 2.0F, 6.792F)
          verticalLineTo(3.749F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(16.5F)
          close()
          moveTo(12.0F, 13.499F)
          curveToRelative(-1.933F, 0.0F, -3.5F, 1.568F, -3.5F, 3.5F)
          curveToRelative(0.0F, 1.934F, 1.567F, 3.5F, 3.5F, 3.5F)
          reflectiveCurveToRelative(3.5F, -1.566F, 3.5F, -3.5F)
          curveToRelative(0.0F, -1.932F, -1.567F, -3.5F, -3.5F, -3.5F)
          close()
          moveToRelative(4.0F, -10.0F)
          horizontalLineTo(7.997F)
          verticalLineToRelative(6.398F)
          lineToRelative(3.887F, 2.03F)
          curveToRelative(0.073F, 0.039F, 0.16F, 0.039F, 0.232F, 0.0F)
          lineTo(16.0F, 9.899F)
          verticalLineToRelative(-6.4F)
          close()        
      }
    }
    return _reward24!!
  }

private var _reward24: ImageVector? = null

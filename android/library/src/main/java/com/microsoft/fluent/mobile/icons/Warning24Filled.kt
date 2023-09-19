package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Warning24: ImageVector
  get() {
    if (_warning24 != null) {
      return _warning24!!
    }
    _warning24 = fluentIcon(name = "Filled.Warning24", 24f) {
      materialPath {
          moveTo(10.03F, 3.659F)
          curveToRelative(0.856F, -1.548F, 3.081F, -1.548F, 3.937F, 0.0F)
          lineToRelative(7.746F, 14.001F)
          curveToRelative(0.83F, 1.5F, -0.255F, 3.34F, -1.969F, 3.34F)
          horizontalLineTo(4.254F)
          curveToRelative(-1.715F, 0.0F, -2.8F, -1.84F, -1.97F, -3.34F)
          lineToRelative(7.746F, -14.0F)
          close()
          moveTo(12.997F, 17.0F)
          curveToRelative(0.0F, -0.552F, -0.447F, -0.999F, -0.998F, -0.999F)
          curveTo(11.447F, 16.001F, 11.0F, 16.448F, 11.0F, 17.0F)
          reflectiveCurveToRelative(0.447F, 1.0F, 0.999F, 1.0F)
          curveToRelative(0.551F, 0.0F, 0.998F, -0.448F, 0.998F, -1.0F)
          close()
          moveToRelative(-0.259F, -7.853F)
          curveTo(12.688F, 8.782F, 12.374F, 8.5F, 11.995F, 8.5F)
          curveToRelative(-0.415F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          lineToRelative(0.004F, 4.502F)
          lineToRelative(0.007F, 0.102F)
          curveToRelative(0.05F, 0.366F, 0.364F, 0.648F, 0.743F, 0.648F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.337F, 0.75F, -0.751F)
          lineToRelative(-0.004F, -4.502F)
          lineToRelative(-0.007F, -0.101F)
          close()        
      }
    }
    return _warning24!!
  }

private var _warning24: ImageVector? = null

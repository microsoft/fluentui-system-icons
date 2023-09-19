package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Info24: ImageVector
  get() {
    if (_info24 != null) {
      return _info24!!
    }
    _info24 = fluentIcon(name = "Regular.Info24", 24f) {
      materialPath {
          moveTo(12.0F, 1.998F)
          curveToRelative(5.524F, 0.0F, 10.002F, 4.478F, 10.002F, 10.002F)
          curveToRelative(0.0F, 5.523F, -4.478F, 10.0F, -10.002F, 10.0F)
          curveToRelative(-5.524F, 0.001F, -10.002F, -4.477F, -10.002F, -10.0F)
          curveTo(1.998F, 6.476F, 6.476F, 1.998F, 12.0F, 1.998F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-4.695F, 0.0F, -8.502F, 3.806F, -8.502F, 8.502F)
          curveToRelative(0.0F, 4.695F, 3.807F, 8.501F, 8.502F, 8.501F)
          reflectiveCurveToRelative(8.502F, -3.806F, 8.502F, -8.501F)
          curveToRelative(0.0F, -4.696F, -3.807F, -8.502F, -8.502F, -8.502F)
          close()
          moveToRelative(-0.004F, 7.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.744F, 0.648F)
          lineToRelative(0.007F, 0.102F)
          lineToRelative(0.004F, 5.502F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.744F, -0.648F)
          lineToRelative(-0.006F, -0.101F)
          lineToRelative(-0.004F, -5.502F)
          curveToRelative(0.0F, -0.414F, 0.335F, -0.75F, 0.75F, -0.75F)
          close()
          moveToRelative(0.005F, -3.497F)
          curveToRelative(0.551F, 0.0F, 0.998F, 0.447F, 0.998F, 0.998F)
          curveToRelative(0.0F, 0.552F, -0.447F, 1.0F, -0.998F, 1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          curveToRelative(0.0F, -0.551F, 0.448F, -0.998F, 1.0F, -0.998F)
          close()        
      }
    }
    return _info24!!
  }

private var _info24: ImageVector? = null

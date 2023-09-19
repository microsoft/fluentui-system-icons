package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ErrorCircle24: ImageVector
  get() {
    if (_errorCircle24 != null) {
      return _errorCircle24!!
    }
    _errorCircle24 = fluentIcon(name = "Regular.ErrorCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.478F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.522F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 1.667F)
          curveToRelative(-4.595F, 0.0F, -8.333F, 3.738F, -8.333F, 8.333F)
          curveToRelative(0.0F, 4.595F, 3.738F, 8.333F, 8.333F, 8.333F)
          curveToRelative(4.595F, 0.0F, 8.333F, -3.738F, 8.333F, -8.333F)
          curveToRelative(0.0F, -4.595F, -3.738F, -8.333F, -8.333F, -8.333F)
          close()
          moveToRelative(-0.001F, 10.835F)
          curveToRelative(0.551F, 0.0F, 0.998F, 0.447F, 0.998F, 0.999F)
          curveToRelative(0.0F, 0.551F, -0.447F, 0.999F, -0.998F, 0.999F)
          curveToRelative(-0.552F, 0.0F, -0.999F, -0.448F, -0.999F, -1.0F)
          curveToRelative(0.0F, -0.55F, 0.447F, -0.998F, 0.999F, -0.998F)
          close()
          moveTo(11.994F, 7.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.744F, 0.648F)
          lineToRelative(0.007F, 0.101F)
          lineToRelative(0.004F, 4.502F)
          curveToRelative(0.0F, 0.414F, -0.335F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.281F, -0.743F, -0.647F)
          lineToRelative(-0.007F, -0.102F)
          lineToRelative(-0.004F, -4.501F)
          curveToRelative(0.0F, -0.415F, 0.335F, -0.75F, 0.75F, -0.751F)
          close()        
      }
    }
    return _errorCircle24!!
  }

private var _errorCircle24: ImageVector? = null

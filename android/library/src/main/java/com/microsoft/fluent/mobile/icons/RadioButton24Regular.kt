package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RadioButton24: ImageVector
  get() {
    if (_radioButton24 != null) {
      return _radioButton24!!
    }
    _radioButton24 = fluentIcon(name = "Regular.RadioButton24", 24f) {
      materialPath {
          moveTo(12.0F, 22.002F)
          curveToRelative(5.524F, 0.0F, 10.002F, -4.478F, 10.002F, -10.001F)
          curveToRelative(0.0F, -5.524F, -4.478F, -10.002F, -10.002F, -10.002F)
          curveToRelative(-5.524F, 0.0F, -10.002F, 4.478F, -10.002F, 10.002F)
          curveToRelative(0.0F, 5.523F, 4.478F, 10.001F, 10.002F, 10.001F)
          close()
          moveToRelative(0.0F, -1.5F)
          curveToRelative(-4.695F, 0.0F, -8.502F, -3.806F, -8.502F, -8.501F)
          curveToRelative(0.0F, -4.696F, 3.807F, -8.502F, 8.502F, -8.502F)
          reflectiveCurveToRelative(8.502F, 3.806F, 8.502F, 8.502F)
          curveToRelative(0.0F, 4.695F, -3.807F, 8.501F, -8.502F, 8.501F)
          close()        
      }
    }
    return _radioButton24!!
  }

private var _radioButton24: ImageVector? = null

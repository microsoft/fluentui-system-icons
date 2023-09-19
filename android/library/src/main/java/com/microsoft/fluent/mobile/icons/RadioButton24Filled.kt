package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RadioButton24: ImageVector
  get() {
    if (_radioButton24 != null) {
      return _radioButton24!!
    }
    _radioButton24 = fluentIcon(name = "Filled.RadioButton24", 24f) {
      materialPath {
          moveTo(12.0F, 1.999F)
          curveToRelative(5.524F, 0.0F, 10.002F, 4.478F, 10.002F, 10.002F)
          curveToRelative(0.0F, 5.523F, -4.478F, 10.001F, -10.002F, 10.001F)
          curveToRelative(-5.524F, 0.0F, -10.002F, -4.478F, -10.002F, -10.001F)
          curveTo(1.998F, 6.477F, 6.476F, 1.999F, 12.0F, 1.999F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-4.695F, 0.0F, -8.502F, 3.806F, -8.502F, 8.502F)
          curveToRelative(0.0F, 4.695F, 3.807F, 8.501F, 8.502F, 8.501F)
          reflectiveCurveToRelative(8.502F, -3.806F, 8.502F, -8.501F)
          curveToRelative(0.0F, -4.696F, -3.807F, -8.502F, -8.502F, -8.502F)
          close()
          moveToRelative(-0.004F, 2.5F)
          curveToRelative(3.313F, 0.0F, 5.999F, 2.686F, 5.999F, 5.998F)
          curveToRelative(0.0F, 3.313F, -2.686F, 5.998F, -5.999F, 5.998F)
          curveToRelative(-3.312F, 0.0F, -5.998F, -2.685F, -5.998F, -5.998F)
          reflectiveCurveTo(8.684F, 6.0F, 11.996F, 6.0F)
          close()        
      }
    }
    return _radioButton24!!
  }

private var _radioButton24: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Emoji24: ImageVector
  get() {
    if (_emoji24 != null) {
      return _emoji24!!
    }
    _emoji24 = fluentIcon(name = "Regular.Emoji24", 24f) {
      materialPath {
          moveTo(12.0F, 1.998F)
          curveToRelative(5.524F, 0.0F, 10.002F, 4.478F, 10.002F, 10.002F)
          curveToRelative(0.0F, 5.523F, -4.479F, 10.0F, -10.002F, 10.0F)
          curveToRelative(-5.524F, 0.001F, -10.002F, -4.477F, -10.002F, -10.0F)
          curveTo(1.998F, 6.476F, 6.476F, 1.998F, 12.0F, 1.998F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-4.695F, 0.0F, -8.502F, 3.806F, -8.502F, 8.502F)
          curveToRelative(0.0F, 4.695F, 3.807F, 8.501F, 8.502F, 8.501F)
          reflectiveCurveToRelative(8.502F, -3.806F, 8.502F, -8.501F)
          curveToRelative(0.0F, -4.696F, -3.807F, -8.502F, -8.502F, -8.502F)
          close()
          moveTo(8.462F, 14.783F)
          curveTo(9.31F, 15.86F, 10.602F, 16.5F, 12.0F, 16.5F)
          curveToRelative(1.396F, 0.0F, 2.686F, -0.639F, 3.535F, -1.714F)
          curveToRelative(0.257F, -0.325F, 0.728F, -0.38F, 1.053F, -0.124F)
          curveToRelative(0.325F, 0.257F, 0.38F, 0.729F, 0.124F, 1.054F)
          curveTo(15.582F, 17.148F, 13.86F, 18.0F, 12.0F, 18.0F)
          curveToRelative(-1.863F, 0.0F, -3.586F, -0.855F, -4.716F, -2.29F)
          curveToRelative(-0.257F, -0.325F, -0.2F, -0.797F, 0.124F, -1.053F)
          curveToRelative(0.326F, -0.256F, 0.797F, -0.2F, 1.054F, 0.125F)
          close()
          moveTo(9.0F, 8.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(9.69F, 11.248F, 9.0F, 11.248F)
          reflectiveCurveToRelative(-1.249F, -0.56F, -1.249F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.249F, 1.25F, -1.249F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.249F, -1.25F, 1.249F)
          reflectiveCurveToRelative(-1.249F, -0.56F, -1.249F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.249F, 1.25F, -1.249F)
          close()        
      }
    }
    return _emoji24!!
  }

private var _emoji24: ImageVector? = null

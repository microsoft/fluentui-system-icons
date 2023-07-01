package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Emoji24: ImageVector
  get() {
    if (_emoji24 != null) {
      return _emoji24!!
    }
    _emoji24 = fluentIcon(name = "Filled.Emoji24", 24f) {
      materialPath {
          moveTo(12.0F, 1.998F)
          curveToRelative(5.524F, 0.0F, 10.002F, 4.478F, 10.002F, 10.002F)
          curveToRelative(0.0F, 5.523F, -4.479F, 10.0F, -10.002F, 10.0F)
          curveToRelative(-5.524F, 0.001F, -10.002F, -4.477F, -10.002F, -10.0F)
          curveTo(1.998F, 6.476F, 6.476F, 1.998F, 12.0F, 1.998F)
          close()
          moveTo(8.462F, 14.783F)
          curveToRelative(-0.257F, -0.325F, -0.728F, -0.381F, -1.054F, -0.125F)
          curveToRelative(-0.325F, 0.256F, -0.38F, 0.728F, -0.125F, 1.053F)
          curveToRelative(1.131F, 1.435F, 2.854F, 2.29F, 4.717F, 2.29F)
          curveToRelative(1.86F, 0.0F, 3.581F, -0.853F, 4.712F, -2.284F)
          curveToRelative(0.257F, -0.325F, 0.201F, -0.797F, -0.124F, -1.054F)
          curveToRelative(-0.325F, -0.256F, -0.796F, -0.201F, -1.053F, 0.124F)
          curveToRelative(-0.85F, 1.075F, -2.139F, 1.714F, -3.535F, 1.714F)
          curveToRelative(-1.398F, 0.0F, -2.69F, -0.64F, -3.538F, -1.718F)
          close()
          moveTo(9.0F, 8.75F)
          curveToRelative(-0.69F, 0.0F, -1.249F, 0.56F, -1.249F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.249F, 1.25F, 1.249F)
          reflectiveCurveToRelative(1.249F, -0.56F, 1.249F, -1.25F)
          reflectiveCurveTo(9.69F, 8.75F, 9.0F, 8.75F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveToRelative(-0.69F, 0.0F, -1.249F, 0.56F, -1.249F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.249F, 1.25F, 1.249F)
          reflectiveCurveToRelative(1.249F, -0.56F, 1.249F, -1.25F)
          reflectiveCurveTo(15.69F, 8.75F, 15.0F, 8.75F)
          close()        
      }
    }
    return _emoji24!!
  }

private var _emoji24: ImageVector? = null

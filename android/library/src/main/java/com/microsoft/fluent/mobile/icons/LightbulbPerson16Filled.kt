package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LightbulbPerson16: ImageVector
  get() {
    if (_lightbulbPerson16 != null) {
      return _lightbulbPerson16!!
    }
    _lightbulbPerson16 = fluentIcon(name = "Filled.LightbulbPerson16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(5.515F, 2.0F, 3.5F, 4.015F, 3.5F, 6.5F)
          curveToRelative(0.0F, 1.256F, 0.515F, 2.393F, 1.345F, 3.208F)
          curveTo(4.94F, 9.803F, 5.0F, 9.902F, 5.025F, 9.995F)
          lineToRelative(0.14F, 0.51F)
          curveTo(5.939F, 9.877F, 6.925F, 9.5F, 8.0F, 9.5F)
          reflectiveCurveToRelative(2.061F, 0.377F, 2.835F, 1.005F)
          lineToRelative(0.14F, -0.51F)
          curveToRelative(0.025F, -0.093F, 0.084F, -0.191F, 0.18F, -0.287F)
          curveTo(11.985F, 8.893F, 12.5F, 7.756F, 12.5F, 6.5F)
          curveTo(12.5F, 4.015F, 10.485F, 2.0F, 8.0F, 2.0F)
          close()
          moveTo(5.573F, 12.0F)
          lineTo(5.46F, 11.59F)
          curveTo(6.1F, 10.92F, 7.001F, 10.5F, 8.0F, 10.5F)
          curveToRelative(1.0F, 0.0F, 1.901F, 0.419F, 2.539F, 1.09F)
          lineTo(10.427F, 12.0F)
          horizontalLineTo(5.573F)
          close()
          moveToRelative(0.276F, 1.0F)
          curveToRelative(0.21F, 0.595F, 0.775F, 1.0F, 1.415F, 1.0F)
          horizontalLineToRelative(1.472F)
          curveToRelative(0.64F, 0.0F, 1.204F, -0.405F, 1.414F, -1.0F)
          horizontalLineToRelative(-4.3F)
          close()
          moveTo(7.0F, 6.5F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          close()
          moveToRelative(1.0F, -2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          close()        
      }
    }
    return _lightbulbPerson16!!
  }

private var _lightbulbPerson16: ImageVector? = null

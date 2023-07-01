package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Lightbulb16: ImageVector
  get() {
    if (_lightbulb16 != null) {
      return _lightbulb16!!
    }
    _lightbulb16 = fluentIcon(name = "Regular.Lightbulb16", 16f) {
      materialPath {
          moveTo(4.5F, 6.5F)
          curveTo(4.5F, 4.567F, 6.067F, 3.0F, 8.0F, 3.0F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          curveToRelative(0.0F, 0.977F, -0.4F, 1.86F, -1.046F, 2.495F)
          curveToRelative(-0.193F, 0.19F, -0.363F, 0.437F, -0.445F, 0.736F)
          lineTo(9.664F, 11.0F)
          horizontalLineTo(6.336F)
          lineTo(5.99F, 9.731F)
          curveToRelative(-0.08F, -0.3F, -0.25F, -0.546F, -0.444F, -0.736F)
          curveTo(4.9F, 8.36F, 4.5F, 7.477F, 4.5F, 6.5F)
          close()
          moveTo(6.61F, 12.0F)
          horizontalLineToRelative(2.78F)
          lineToRelative(-0.17F, 0.632F)
          curveTo(9.159F, 12.849F, 8.962F, 13.0F, 8.736F, 13.0F)
          horizontalLineTo(7.264F)
          curveToRelative(-0.226F, 0.0F, -0.423F, -0.15F, -0.483F, -0.368F)
          lineTo(6.61F, 12.0F)
          close()
          moveTo(8.0F, 2.0F)
          curveTo(5.515F, 2.0F, 3.5F, 4.015F, 3.5F, 6.5F)
          curveToRelative(0.0F, 1.256F, 0.515F, 2.393F, 1.345F, 3.208F)
          curveTo(4.94F, 9.803F, 5.0F, 9.902F, 5.025F, 9.995F)
          lineToRelative(0.792F, 2.9F)
          curveTo(5.995F, 13.547F, 6.587F, 14.0F, 7.264F, 14.0F)
          horizontalLineToRelative(1.472F)
          curveToRelative(0.677F, 0.0F, 1.27F, -0.453F, 1.447F, -1.105F)
          lineToRelative(0.791F, -2.9F)
          curveTo(11.0F, 9.902F, 11.06F, 9.803F, 11.155F, 9.707F)
          curveTo(11.985F, 8.893F, 12.5F, 7.756F, 12.5F, 6.5F)
          curveTo(12.5F, 4.015F, 10.485F, 2.0F, 8.0F, 2.0F)
          close()        
      }
    }
    return _lightbulb16!!
  }

private var _lightbulb16: ImageVector? = null

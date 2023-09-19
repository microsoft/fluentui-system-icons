package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Lightbulb16: ImageVector
  get() {
    if (_lightbulb16 != null) {
      return _lightbulb16!!
    }
    _lightbulb16 = fluentIcon(name = "Filled.Lightbulb16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(5.515F, 2.0F, 3.5F, 4.015F, 3.5F, 6.5F)
          curveToRelative(0.0F, 1.256F, 0.515F, 2.393F, 1.345F, 3.208F)
          curveTo(4.94F, 9.803F, 5.0F, 9.902F, 5.025F, 9.995F)
          lineTo(5.3F, 11.0F)
          horizontalLineToRelative(5.4F)
          lineToRelative(0.274F, -1.005F)
          curveTo(11.0F, 9.902F, 11.06F, 9.803F, 11.155F, 9.707F)
          curveTo(11.985F, 8.893F, 12.5F, 7.756F, 12.5F, 6.5F)
          curveTo(12.5F, 4.015F, 10.485F, 2.0F, 8.0F, 2.0F)
          close()
          moveToRelative(2.427F, 10.0F)
          horizontalLineTo(5.573F)
          lineToRelative(0.244F, 0.895F)
          curveTo(5.995F, 13.547F, 6.587F, 14.0F, 7.264F, 14.0F)
          horizontalLineToRelative(1.472F)
          curveToRelative(0.677F, 0.0F, 1.27F, -0.453F, 1.447F, -1.105F)
          lineTo(10.427F, 12.0F)
          close()        
      }
    }
    return _lightbulb16!!
  }

private var _lightbulb16: ImageVector? = null

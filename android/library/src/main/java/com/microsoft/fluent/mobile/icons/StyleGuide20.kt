package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StyleGuide20: ImageVector
  get() {
    if (_styleGuide20 != null) {
      return _styleGuide20!!
    }
    _styleGuide20 = fluentIcon(name = "Filled.StyleGuide20", 20f) {
      materialPath {
          moveTo(6.819F, 17.259F)
          curveToRelative(0.073F, 0.271F, 0.187F, 0.52F, 0.335F, 0.74F)
          horizontalLineTo(6.998F)
          curveToRelative(-1.104F, 0.0F, -2.0F, -0.895F, -2.001F, -2.0F)
          lineToRelative(-0.005F, -5.535F)
          lineTo(6.82F, 17.26F)
          close()
          moveTo(4.0F, 16.499F)
          curveToRelative(0.0F, 0.152F, 0.014F, 0.301F, 0.04F, 0.446F)
          lineTo(3.984F, 16.93F)
          curveToRelative(-1.067F, -0.286F, -1.7F, -1.383F, -1.416F, -2.45F)
          lineToRelative(1.426F, -5.34F)
          lineTo(4.0F, 16.5F)
          close()
          moveToRelative(3.655F, 0.018F)
          curveToRelative(0.287F, 1.067F, 1.384F, 1.7F, 2.451F, 1.414F)
          lineToRelative(5.416F, -1.451F)
          curveToRelative(1.067F, -0.286F, 1.7F, -1.383F, 1.413F, -2.45F)
          lineTo(14.099F, 3.483F)
          curveToRelative(-0.287F, -1.067F, -1.384F, -1.7F, -2.451F, -1.414F)
          lineToRelative(-5.416F, 1.45F)
          curveToRelative(-1.067F, 0.286F, -1.7F, 1.382F, -1.413F, 2.449F)
          lineToRelative(2.836F, 10.55F)
          close()
          moveTo(9.0F, 6.25F)
          curveTo(9.0F, 6.664F, 8.664F, 7.0F, 8.25F, 7.0F)
          reflectiveCurveTo(7.5F, 6.664F, 7.5F, 6.25F)
          curveToRelative(0.0F, -0.415F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(9.0F, 5.835F, 9.0F, 6.25F)
          close()        
      }
    }
    return _styleGuide20!!
  }

private var _styleGuide20: ImageVector? = null

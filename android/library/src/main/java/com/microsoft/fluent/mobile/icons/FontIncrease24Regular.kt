package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FontIncrease24: ImageVector
  get() {
    if (_fontIncrease24 != null) {
      return _fontIncrease24!!
    }
    _fontIncrease24 = fluentIcon(name = "Regular.FontIncrease24", 24f) {
      materialPath {
          moveTo(15.195F, 5.755F)
          curveToRelative(0.279F, 0.306F, 0.753F, 0.329F, 1.06F, 0.05F)
          lineTo(18.5F, 3.764F)
          lineToRelative(2.245F, 2.04F)
          curveToRelative(0.307F, 0.28F, 0.781F, 0.257F, 1.06F, -0.05F)
          curveToRelative(0.279F, -0.306F, 0.256F, -0.78F, -0.05F, -1.059F)
          lineToRelative(-2.75F, -2.5F)
          curveToRelative(-0.287F, -0.26F, -0.723F, -0.26F, -1.01F, 0.0F)
          lineToRelative(-2.75F, 2.5F)
          curveToRelative(-0.306F, 0.279F, -0.329F, 0.753F, -0.05F, 1.06F)
          close()
          moveTo(12.0F, 4.0F)
          curveToRelative(0.308F, 0.0F, 0.584F, 0.188F, 0.697F, 0.473F)
          lineToRelative(5.75F, 14.5F)
          curveToRelative(0.153F, 0.385F, -0.035F, 0.821F, -0.42F, 0.974F)
          curveToRelative(-0.386F, 0.153F, -0.822F, -0.036F, -0.974F, -0.42F)
          lineTo(15.258F, 15.0F)
          horizontalLineTo(8.742F)
          lineToRelative(-1.795F, 4.526F)
          curveTo(6.795F, 19.911F, 6.36F, 20.1F, 5.974F, 19.947F)
          curveToRelative(-0.385F, -0.153F, -0.574F, -0.589F, -0.421F, -0.974F)
          lineToRelative(5.75F, -14.5F)
          curveTo(11.416F, 4.188F, 11.693F, 4.0F, 12.0F, 4.0F)
          close()
          moveToRelative(-2.663F, 9.5F)
          horizontalLineToRelative(5.326F)
          lineTo(12.0F, 6.785F)
          lineTo(9.337F, 13.5F)
          close()        
      }
    }
    return _fontIncrease24!!
  }

private var _fontIncrease24: ImageVector? = null

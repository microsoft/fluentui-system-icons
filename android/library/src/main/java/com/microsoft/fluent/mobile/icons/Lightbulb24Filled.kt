package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Lightbulb24: ImageVector
  get() {
    if (_lightbulb24 != null) {
      return _lightbulb24!!
    }
    _lightbulb24 = fluentIcon(name = "Filled.Lightbulb24", 24f) {
      materialPath {
          moveTo(15.538F, 18.999F)
          lineToRelative(-0.29F, 1.259F)
          curveToRelative(-0.224F, 0.963F, -1.047F, 1.66F, -2.02F, 1.735F)
          lineTo(13.056F, 22.0F)
          horizontalLineToRelative(-2.111F)
          curveToRelative(-0.99F, 0.0F, -1.856F, -0.645F, -2.147F, -1.577F)
          lineTo(8.75F, 20.256F)
          lineToRelative(-0.29F, -1.257F)
          horizontalLineToRelative(7.077F)
          close()
          moveTo(12.0F, 2.001F)
          curveToRelative(4.004F, 0.0F, 7.25F, 3.246F, 7.25F, 7.25F)
          curveToRelative(0.0F, 2.136F, -0.936F, 4.093F, -2.765F, 5.84F)
          curveToRelative(-0.036F, 0.034F, -0.06F, 0.078F, -0.071F, 0.125F)
          lineTo(15.886F, 17.5F)
          horizontalLineTo(8.114F)
          lineToRelative(-0.526F, -2.283F)
          curveToRelative(-0.011F, -0.047F, -0.036F, -0.09F, -0.071F, -0.124F)
          curveToRelative(-1.83F, -1.748F, -2.767F, -3.705F, -2.767F, -5.841F)
          curveToRelative(0.0F, -4.004F, 3.246F, -7.25F, 7.25F, -7.25F)
          close()        
      }
    }
    return _lightbulb24!!
  }

private var _lightbulb24: ImageVector? = null
